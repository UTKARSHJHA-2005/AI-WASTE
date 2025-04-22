// Login Page
import { useState } from "react"
import { motion } from "framer-motion" // Animation
import { Sprout, Mail, Lock, ArrowRight, Leaf, Cloud, Wind } from "lucide-react" // Icons
import { Link } from "react-router-dom" // Link

const LoginPage = () => {
  const [email, setEmail] = useState("") // Email State
  const [password, setPassword] = useState("") // Password State
  const [rememberMe, setRememberMe] = useState(false) // Remember Me State

  // Animation variants
  const pageAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const buttonAnimation = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  }

  const leafAnimation = {
    initial: { rotate: 0, y: 0 },
    animate: {
      rotate: [0, 5, 0, -5, 0],
      y: [0, -5, 0, -3, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "easeInOut"
      }
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login with:", { email, password, rememberMe })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div className="absolute top-20 right-20 text-green-200 opacity-50" variants={leafAnimation} initial="initial" animate="animate">
        <Leaf size={40} />
      </motion.div>
      <motion.div className="absolute bottom-20 left-20 text-green-200 opacity-40" initial={{ x: 0 }}
        animate={{
          x: [0, 10, 0, -10, 0],
          transition: { repeat: Infinity, duration: 7, ease: "easeInOut" }
        }}>
        <Wind size={48} />
      </motion.div>
      <motion.div className="absolute top-1/3 left-1/5 text-blue-200 opacity-30" initial={{ y: 0 }} animate={{ y: [-10, 10, -10], transition: { repeat: Infinity, duration: 8, ease: "easeInOut" } }}>
        <Cloud size={40} />
      </motion.div>
      <motion.div className="sm:mx-auto sm:w-full sm:max-w-md" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <Link to="/">
          <motion.div className="flex justify-center" whileHover={{ scale: 1.05 }}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
              <Sprout className="text-white" size={28} />
            </div>
          </motion.div>
        </Link>
        <motion.h2 className="mt-6 text-center text-3xl font-extrabold text-green-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          Welcome Back
        </motion.h2>
        <motion.p className="mt-2 text-center text-sm text-green-700" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          New to our eco community?
          <Link to="/signup" className="font-medium text-green-600 hover:text-green-500 underline">
            Join us today
          </Link>
        </motion.p>
      </motion.div>
      <motion.div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" variants={pageAnimation} initial="hidden" animate="visible">
        <motion.div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-green-100" variants={itemAnimation}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div variants={itemAnimation}>
              <label htmlFor="email" className="block text-sm font-medium text-green-800">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="you@example.com"/>
              </div>
            </motion.div>
            <motion.div variants={itemAnimation}>
              <label htmlFor="password" className="block text-sm font-medium text-green-800">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-green-400" />
                </div>
                <input id="password" name="password" type="password" autoComplete="current-password" required value={password}
                OnChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-green-200 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="••••••••"/>
              </div>
            </motion.div>
            <motion.div className="flex items-center justify-between" variants={itemAnimation}>
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" checked={rememberMe} OnChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"/>
                <label htmlFor="remember-me" className="ml-2 block text-sm text-green-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-green-500 underline">
                  Forgot your password?
                </a>
              </div>
            </motion.div>
            <motion.div variants={itemAnimation}>
              <motion.button type="submit" 
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              variants={buttonAnimation} initial="rest" whileHover="hover" whileTap={{ scale: 0.98 }}>
                <span>Return to Nature</span>
                <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 3 }} transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}>
                  <ArrowRight size={16} />
                </motion.span>
              </motion.button>
            </motion.div>
          </form>
          <motion.div className="mt-6" variants={itemAnimation}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-green-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-green-600">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm mx-auto">
              {[
                {
                  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
                  alt: "Google",
                },
                {
                  src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png",
                  alt: "Facebook",
                },
                {
                  src: "https://e7.pngegg.com/pngimages/847/601/png-clipart-apple-store-logo-ipad-apple-logo-computer-heart-thumbnail.png",
                  alt: "Apple",
                },
              ].map((icon, index) => (
                <motion.div key={index} className="flex items-center cursor-pointer justify-center p-3 bg-white shadow-md rounded-lg"
                  whileHover={{ y: -2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.95 }}>
                  <img src={icon.src} alt={icon.alt} className="h-8 w-8 object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoginPage