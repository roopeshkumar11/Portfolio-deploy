import { Sendmessage } from "../middleware/Emailsend.js";

export const Adminmessage = async (req, res) => {
    const { Email, adminmessage } = req.body;

    if (!Email || !adminmessage) {
        console.log("adminmessage:", adminmessage);
        console.log("Email:", Email);
        return res.status(400).json({ success: false, message: "Email and message are required" });
    }

    try {
        const result = await Sendmessage(Email, adminmessage); // ✅ Await the function

        if (result.success) {
            return res.status(200).json({ success: true, message: "Email sent successfully!" });
        } else {
            return res.status(500).json({ success: false, message: "Failed to send email" });
        }
    } catch (error) {
        console.error("Error in Adminmessage:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
