import React, { useEffect, useState } from "react";
import Card_message from "../Component/Card_message";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Seemessagedel() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [singledata, setsingledata] = useState(null);
  const [deleting, setDeleting] = useState(false);

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

  const handlesubmit = async () => {
    const token = localStorage.getItem("token");
    setDeleting(true);

    try {
      await axios.delete(`https://portfoliobackend-92m1.onrender.com/api/deletedata/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Message deleted successfully!");
      navigate("/addminm");
    } catch (error) {
      console.error(error);
      alert("Error during deletion: " + error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-obsidian text-gray-300 px-6 py-20 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl p-8 glassmorphism rounded-2xl border border-red-500/20 shadow-[0_20px_50px_rgba(239,68,68,0.1)] z-10 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-mono tracking-widest text-red-500">
            DELETE_TRANSMISSION //
          </h2>
          <p className="text-xs font-mono text-gray-500 mt-2 uppercase tracking-widest">
            Confirm Destructive Operation
          </p>
        </div>

        {singledata ? (
          <Card_message
            name={singledata.Name}
            email={singledata.Email}
            service={singledata.service}
            message={singledata.Message}
          />
        ) : (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500"></div>
          </div>
        )}

        <div className="flex gap-4 pt-4 border-t border-white/5 font-mono text-xs uppercase tracking-widest">
          <button
            type="button"
            onClick={() => navigate("/addminm")}
            className="flex-grow py-3 bg-white/5 border border-white/10 text-gray-300 hover:text-white rounded-xl transition hover:bg-white/10"
          >
            Abort Operation
          </button>
          <button
            type="button"
            onClick={handlesubmit}
            disabled={deleting}
            className="flex-grow py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition disabled:opacity-50"
          >
            {deleting ? "DELETING..." : "CONFIRM DELETE //"}
          </button>
        </div>
      </div>
    </div>
  );
}

