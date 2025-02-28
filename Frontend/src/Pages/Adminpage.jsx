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
import { Link ,useNavigate} from "react-router-dom";

function Adminpage() {
  const [messages, setMessages] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("token"); // Get token from localStorage

      if(!token){
        navigate("/login")
      }
     

      try {
        const response = await axios.get("http://localhost:4000/api/getalldmessage", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Admin Dashboard</h1>

      <div className="flex flex-col items-center gap-4 px-4">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg._id} className="w-full md:w-[80%] border rounded-lg p-4">
              <CardMessage
                name={msg.Name}
                email={msg.Email}
                service={msg.service}
                message={msg.Message}
              />
              <div className="mt-4">
                <Link to={"/replymessage/"+msg._id} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Reply Message
                </Link>

                <Link   to={"/del/"+msg._id}  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                   Delete Message
                  </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No messages found</p>
        )}
      </div>
    </div>
  );
}

export default Adminpage;
