import React, { useEffect, useState } from "react";
import Card_message from "../Component/Card_message";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";




export default function Seemessagedel() {

  const navigate = useNavigate();
    const {id}=useParams();

    const [singledata,setsingledata]=useState();

    useEffect(()=>{
        const fetchdatasingle=async()=>{
          const token = localStorage.getItem("token");
            try {
    
                const response=await axios.get(`http://localhost:4000/api/singledata/${id}`,{
                  headers: { Authorization: `Bearer ${token}` },
                })
                
                setsingledata(response.data);
                console.log(response.data)
                
            } catch (error) {
                alert("fetching data error: ",error)
                
            }
        }
        fetchdatasingle();
    },[id])


    const handlesubmit=async()=>{
      const token = localStorage.getItem("token");
   
        try {
            await axios.delete(`http://localhost:4000/api/deletedata/${id}`,{
              headers: { Authorization: `Bearer ${token}` },
            })
         

            
        } catch (error) {
            alert("Error during deletetion: ",error)
        }

      
    }
  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-5">
      <div className="border rounded-lg border-gray-600 w-full md:w-[60%] p-5">
        <Card_message  
        name={singledata?.Name}
        email={singledata?.Email}
        service={singledata?.service}
        message={singledata?.Message}
    />

        <div className="flex justify-center mt-4">
          <button  onClick={handlesubmit} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
}
