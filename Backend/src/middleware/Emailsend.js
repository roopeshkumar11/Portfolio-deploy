import { transporter } from "./Email.js";

export const Sendmessage = async (Email, adminmessage) => {
    try {
        const info = await transporter.sendMail({
            from: '"Roopesh Developer" <roopeshkumarbxr2017@gmail.com>', 
            to: Email, 
            subject: "Hello ✔", 
            text: "Hello world?", 
            html: `<p>${adminmessage}</p>`, 
        });

        console.log("Email sent successfully:", info);
        return { success: true, message: "Email sent successfully!" }; // ✅ Return result

    } catch (error) {
        console.error("Error sending message:", error); // ✅ Log the actual error
        return { success: false, message: "Failed to send email." }; // ✅ Return failure response
    }
};
