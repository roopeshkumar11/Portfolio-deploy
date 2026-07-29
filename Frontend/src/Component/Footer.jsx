


import { useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

function Footer() {
  const [formdata, setFormData] = useState({
    Name: "",
    Email: "",
    Service: "",
    Message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://portfoliofrontend-0dr6.onrender.com/api/sendmessage",
        formdata
      );
      if (response.data && response.data.message) {
        alert(response.data.message);
      } else {
        alert("Message sent successfully!");
      }
      setFormData({ Name: "", Email: "", Service: "", Message: "" }); // Reset form
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative text-gray-300 pt-20 pb-10 px-6 border-t border-white/5">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Section */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl font-bold font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink">
              GET IN TOUCH //
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
              Have an idea, want to build a scaling platform, or looking for a full-stack engineer? 
              Shoot me a message, and let's craft something amazing together.
            </p>

            <div className="space-y-4 pt-4 font-mono text-sm">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cosmic-cyan transition duration-300">
                  <FaEnvelope className="text-cosmic-cyan" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase">Email</p>
                  <a href="mailto:roopeshkumar0008@gmail.com" className="text-gray-300 hover:text-white transition">
                    roopeshkumar0008@gmail.com
                  </a>
                </div>
              </div>



              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cosmic-pink transition duration-300">
                  <FaMapMarkerAlt className="text-cosmic-pink" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase">Location</p>
                  <span className="text-gray-300">Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="glassmorphism p-8 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="Name" className="block text-xs uppercase tracking-wider font-mono text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      value={formdata.Name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cosmic-purple transition duration-300 text-sm"
                      placeholder="Roopesh Kumar"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="Email" className="block text-xs uppercase tracking-wider font-mono text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      value={formdata.Email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cosmic-cyan transition duration-300 text-sm"
                      placeholder="roopesh@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="Service" className="block text-xs uppercase tracking-wider font-mono text-gray-400">
                    Requested Service / Subject
                  </label>
                  <input
                    type="text"
                    id="Service"
                    name="Service"
                    value={formdata.Service}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cosmic-pink transition duration-300 text-sm"
                    placeholder="Full-stack Web App Development"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="Message" className="block text-xs uppercase tracking-wider font-mono text-gray-400">
                    Project Details
                  </label>
                  <textarea
                    id="Message"
                    name="Message"
                    value={formdata.Message}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cosmic-purple transition duration-300 text-sm"
                    rows="4"
                    placeholder="Tell me about your project, timeline, and scope..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-mono uppercase tracking-widest text-xs py-4 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition duration-500 hover:scale-[1.01] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING SIGNAL..." : "TRANSMIT MESSAGE //"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <hr className="border-t border-white/10 my-12" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-xs tracking-widest font-mono text-gray-500">
          <p>© {new Date().getFullYear()} ROOPESH KUMAR. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/roopeshkumar11/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/roopeshkumar11/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

