import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Replymessage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singledata, setsingledata] = useState({ Name: "", Email: "" });
  const [adminmessage, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchdatasingle = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`https://portfoliobackend-92m1.onrender.com/api/singledata/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setsingledata(response.data);
      } catch (error) {
        console.error(error);
        alert("fetching data error: " + error);
      }
    };
    fetchdatasingle();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    try {
      await axios.post("https://portfoliobackend-92m1.onrender.com/api/adminmsg/adminmessage", {
        Email: singledata.Email,
        adminmessage: adminmessage,
      });
      alert("Email sent successfully!");
      navigate("/addminm");
    } catch (error) {
      console.error("Error sending message", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-obsidian text-gray-300 px-6 py-20 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cosmic-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md p-8 glassmorphism rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-mono tracking-widest text-white">
            REPLY_TRANSMISSION //
          </h2>
          <p className="text-xs font-mono text-gray-500 mt-2 uppercase tracking-widest">
            Send Outbound Signal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500">
              Recipient Name
            </label>
            <input
              type="text"
              value={singledata.Name}
              readOnly
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:outline-none text-sm cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500">
              Recipient Email
            </label>
            <input
              type="text"
              value={singledata.Email}
              readOnly
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:outline-none text-sm cursor-not-allowed"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-500">
              Response Payload
            </label>
            <textarea
              placeholder="Type your message here..."
              value={adminmessage}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cosmic-purple transition duration-300 text-sm h-40"
              required
            />
          </div>

          <div className="flex gap-4 pt-2 font-mono text-xs uppercase tracking-widest">
            <button
              type="button"
              onClick={() => navigate("/addminm")}
              className="flex-1 py-3 bg-white/5 border border-white/10 text-gray-300 hover:text-white rounded-xl transition hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={sending}
              className="flex-1 py-3 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-bold rounded-xl shadow hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition disabled:opacity-50"
            >
              {sending ? "TRANSMITTING..." : "TRANSMIT //"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Replymessage;