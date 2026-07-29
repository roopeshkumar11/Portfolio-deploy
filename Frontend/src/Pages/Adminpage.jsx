// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../Component/Navbar.jsx";
// import Footer from "../Component/Footer.jsx";
// import CardMessage from "../Component/Card_message";
// import { Link } from "react-router-dom";


// function Adminpage() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/getalldmessage");
//         setMessages(response.data);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };

//     fetchMessages();
//   }, []);

//   return (
//     <>
      
//       <div className="bg-black text-gray-300 min-h-screen">
//         <h1 className="text-4xl font-bold text-center ">Admin</h1>

//         <div className="flex flex-col items-center gap-4 px-4">
//           {messages.length > 0 ? (
//             messages.map((msg, index) => (
//               <div
//                 key={msg.id || index}
//                 className="w-full md:w-[80%] max-h-full border rounded-lg p-4"
//               >
//                 <CardMessage
//                   name={msg.Name}
//                   email={msg.Email}
//                   service={msg.service}
//                   message={msg.Message}
//                 />
//                 <div className="mt-4 flex gap-4">
//                   <button  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                     Reply Message
//                   </button>
//                   <Link   to={"/del/"+msg._id}  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
//                     Delete Message
//                   </Link>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No messages found</p>
//           )}
//         </div>
//       </div>
    
//     </>
//   );
// }

// export default Adminpage;



import { useEffect, useState } from "react";
import axios from "axios";
import CardMessage from "../Component/Card_message";
import { Link, useNavigate } from "react-router-dom";

function Adminpage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("https://portfoliobackend-92m1.onrender.com/api/getalldmessage", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-obsidian text-gray-300 pt-32 pb-20 px-6 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-cosmic-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-cosmic-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 relative space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink">
            CONTROL_ROOM //
          </h1>
          <p className="text-xs font-mono text-gray-500 mt-2 uppercase tracking-widest">
            Inbound Transmission Ledger
          </p>
        </div>

        {/* Message Feeds */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cosmic-cyan"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
                >
                  <CardMessage
                    name={msg.Name}
                    email={msg.Email}
                    service={msg.service}
                    message={msg.Message}
                  />

                  {/* Actions Bar */}
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5 font-mono text-xs uppercase tracking-wider">
                    <Link
                      to={"/replymessage/" + msg._id}
                      className="px-5 py-2.5 bg-gradient-to-r from-cosmic-purple to-cosmic-purple/80 hover:from-cosmic-purple/80 hover:to-cosmic-purple text-white font-bold rounded-xl shadow hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition duration-300"
                    >
                      Reply Transmission
                    </Link>

                    <Link
                      to={"/del/" + msg._id}
                      className="px-5 py-2.5 bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 font-bold rounded-xl transition duration-300 ml-auto"
                    >
                      Delete Log
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="glassmorphism p-12 rounded-2xl border border-white/5 text-center">
                <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                  No incoming signals detected.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Adminpage;

