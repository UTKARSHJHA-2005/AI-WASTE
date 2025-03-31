import { useState, useRef, useEffect } from "react";
import { AI_Prompt, chatSession } from "../AIModal";
import { toast, ToastContainer } from "react-toastify";
import { Send, Loader2, Image } from "lucide-react"; // Icons

function Chat() {
    const [message, setMessage] = useState(""); // User Input
    const [chatHistory, setChatHistory] = useState([]); // Chat History
    const [loading, setLoading] = useState(false); // Loading
    const [image, setImage] = useState(null); // Image
    const fileInputRef = useRef(null); // File Input Reference
    const chatContainerRef = useRef(null); // Chat Container Reference

    // Scroll to bottom on new message
    useEffect(() => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [chatHistory, loading]);

    const handleImageClick = () => fileInputRef.current.click();

    // Function to image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) setImage(file);
    };

    // Function to send message
    const handleSend = async () => {
        if (!message.trim() && !image) return; // Prevent empty messages
        setLoading(true);
        try {
            const FINAL_PROMPT = AI_Prompt.replace('{code}', message);
            const result = await chatSession.sendMessage(FINAL_PROMPT);
            const responseText = result.response.text();
            // Append user message and AI response to chat history
            setChatHistory((prevChat) => [
                ...prevChat,
                { type: "user", content: message, image: image ? URL.createObjectURL(image) : null },
                { type: "bot", content: formatText(responseText) }
            ]);
            setMessage(""); // Clear input
            setImage(null); // Clear image
        } catch (error) {
            console.error('Error generating response:', error.message);
            toast.error('Failed to process your request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Formatting the AI Response.
    const formatText = (text) => {
        const cleanedText = text.replace(/[`*]/g, ''); // Remove backticks and asterisks
        const formattedText = cleanedText.replace(/(\d+\.)/g, '\n$1'); // Add line breaks after numbers
        const boldPattern = /\*\*\*(.*?)\*\*\*/g; // Regular expression to match bold text
        return formattedText.split(boldPattern).map((part, index) =>
            index % 2 !== 0 ? <strong key={index}>{part}</strong> : part
        );
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 via-green-100 to-white">
            {/* Header */}
            <div className="bg-white shadow-lg p-5 text-center border-b sticky top-0 z-10">
                <h1 className="text-2xl font-extrabold text-green-600">AI Recycler</h1>
                <p className="text-gray-500 text-sm">Your processor, powered by AI diagnosis</p>
            </div>

            {/* Chat Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={chatContainerRef}>
                {chatHistory.length === 0 && (
                    <div className="text-center p-4 bg-green-200 rounded-lg">
                        <p className="text-green-700">Welcome! Describe your wastes or upload an image to begin.</p>
                    </div>
                )}

                {/* Chat Messages */}
                {chatHistory.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`rounded-xl p-4 max-w-[70%] shadow-md ${msg.type === "user"
                            ? "bg-green-600 text-white rounded-br-none"
                            : msg.type === "error"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-900 rounded-bl-none"
                            }`}>
                            {msg.image && (
                                <img src={msg.image} alt="Uploaded" className="rounded-lg mb-2 w-48 h-48 object-cover border" />
                            )}
                            <pre className="whitespace-pre-wrap break-words">{msg.content}</pre>
                        </div>
                    </div>
                ))}

                {/* Loader */}
                {loading && (
                    <div className="flex justify-start">
                        <div className="flex items-center gap-2 bg-gray-200 text-gray-600 p-3 rounded-lg shadow">
                            <Loader2 className="animate-spin" size={18} />
                            Processing...
                        </div>
                    </div>
                )}
            </div>

            {/* Input Section */}
            <div className="bg-white p-4 shadow-inner border-t sticky bottom-0">
                <div className="flex items-center space-x-2">
                    <textarea rows={1} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Describe your wastes..."
                        className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-500 resize-none" />
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
                    <button onClick={handleImageClick} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition" title="Upload Image">
                        <Image size={20} />
                    </button>
                    {image && (
                        <img src={URL.createObjectURL(image)} alt="Selected" className="h-10 w-10 object-cover rounded-lg border" />
                    )}
                    <button onClick={handleSend} disabled={loading || (!message.trim() && !image)}
                        className={`p-3 rounded-lg text-white transition ${loading || (!message.trim() && !image)
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                            }`}>
                        <Send size={20} />
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Chat;
