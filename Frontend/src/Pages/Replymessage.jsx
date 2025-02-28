import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Replymessage() {
    const { id } = useParams();
    const [singledata, setsingledata] = useState({ Name: '', Email: '' });
    const [adminmessage, setMessage] = useState("");

    useEffect(() => {
        const fetchdatasingle = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get(`http://localhost:4000/api/singledata/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setsingledata(response.data);
                console.log(response.data);
            } catch (error) {
                alert("fetching data error: ", error);
            }
        };
        fetchdatasingle();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/api/adminmsg/adminmessage", {
                
                Email: singledata.Email,
                adminmessage: adminmessage,
            });
            console.log("Message sent successfully", response.data);
            alert("Email sent successfully!");
        } catch (error) {
            console.error("Error sending message", error);
            alert("Failed to send email. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4 m-12">
            <input 
                type="text" 
                value={singledata.Name} 
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
                type="text" 
                value={singledata.Email} 
                readOnly
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
                placeholder="Type your message..." 
                value={adminmessage}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Send
            </button>
        </div>
    );
}

export default Replymessage;