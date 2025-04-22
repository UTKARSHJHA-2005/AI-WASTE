// The page where user analysis waste materials.
import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; // Notifications
import { Send, Loader2, Image } from "lucide-react"; // Icons
import "react-toastify/dist/ReactToastify.css";

const GROQ_API_KEY = "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";

function Chat() {
    const [message, setMessage] = useState(""); // Message State
    const [chatHistory, setChatHistory] = useState([]); // Chat History
    const [loading, setLoading] = useState(false); // Loading State
    const [image, setImage] = useState(null); // Image State
    const fileInputRef = useRef(null); // File Input Reference
    const chatContainerRef = useRef(null); // Chat Container Reference

    // Scroll to bottom of chat
    useEffect(() => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [chatHistory, loading]);

    const handleImageClick = () => fileInputRef.current.click(); // Trigger file input

    // Handling image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) setImage(URL.createObjectURL(file)); // Preview image before sending
    };

    // Sending the message to the AI
    const handleSend = async () => {
        // Not Able to recognize by AI.
        if (!message.trim()) {
            toast.error("Invalid message input");
            return;
        }
        setLoading(true);
        const userMessage = {
            role: "user",
            content: `${message.trim()} tell me its recycling reuse methods and steps only and also don’t start okaya and all come to main point`,
        };
        // Add the user's message to the chat history
        setChatHistory((prev) => [
            ...prev,
            { type: "user", content: message.trim(), image },
        ]);
        if (image) {
            // Add image to chat history if available
            setChatHistory((prev) => [
                ...prev,
                { type: "user", content: "User uploaded an image.", image },
            ]);
        }
        setMessage(""); // Clear input field after sending the message
        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${GROQ_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [userMessage],
                    temperature: 0.7,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Groq API Error:", response.status, errorData);
                alert(`Error: ${response.status} - ${errorData.error?.message || "Bad Request"}`);
                setLoading(false);
                return;
            }
            const data = await response.json();
            console.log("Groq Response:", data);
            const reply = data.choices?.[0]?.message?.content;
            if (reply) {
                // Add AI response to chat history
                setChatHistory((prev) => [...prev, { type: "ai", content: reply }]);
            } else {
                console.warn("Empty response from Groq.");
            }
        } catch (err) {
            console.error("Network or JSON error:", err.message);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Function to format AI responses
    const formatText = (text) => {
        const points = text.split('\n').map((point, index) => {
            const formattedPoint = point
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                .replace(/\*(.*?)\*/g, '<em>$1</em>')            
                .replace(/`(.*?)`/g, '<code>$1</code>');           

            return `<p key=${index} class="mb-4">${formattedPoint.trim()}</p>`;
        });
        return points.join(''); // Join the points with a gap between them
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 via-green-100 to-white">
            {/* Header */}
            <div className="bg-white shadow p-5 text-center border-b sticky top-0 z-10">
                <h1 className="text-2xl font-bold text-green-600">AI Recycler</h1>
            </div>
            {/* Chat */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={chatContainerRef}>
                {chatHistory.length === 0 && (
                    <div className="text-center text-gray-500">Start by typing your waste description or uploading an image.</div>
                )}
                {chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`rounded-xl p-4 max-w-[70%] shadow-xl transition-all duration-300 ease-in-out ${msg.type === "user" ? "bg-green-600 text-white rounded-br-none transform hover:scale-105" : "bg-gray-100 text-black rounded-bl-none transform hover:scale-105"
                            }`}>
                            {msg.image && <img src={msg.image} alt="Uploaded" className="mb-2 rounded-lg shadow-lg" />}
                            {/* Display formatted AI response */}
                            <p className="text-sm" dangerouslySetInnerHTML={{ __html: formatText(msg.content) }} />
                        </div>
                    </div>
                ))}
                {/* Loading */}
                {loading && (
                    <div className="flex justify-start">
                        <div className="rounded-xl p-4 bg-gray-200 text-gray-600 animate-pulse max-w-[70%]">
                            <Loader2 className="animate-spin inline-block mr-2" size={18} />
                            Thinking...
                        </div>
                    </div>
                )}
            </div>
            {/* Input - Image, Text, Send Button */}
            <div className="p-4 border-t bg-white flex items-center gap-2">
                <button onClick={handleImageClick} className="text-green-600">
                    <Image size={24} />
                </button>
                <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageChange} />
                <input type="text" placeholder="Ask about your waste item..." value={message} onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 p-2 border rounded-md shadow-sm" />
                <button onClick={handleSend} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2">
                    <Send size={18} />
                    Send
                </button>
            </div>
            {/* ToastContainer */}
            <ToastContainer />
        </div>
    );
}

export default Chat;
