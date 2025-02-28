
function About() {
   

    return (
        <>
            <div className="flex items-center justify-center  bg-black p-6">
                <div className="text-center w-full md:max-w-[50%] text-gray-300">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-xl mb-4 text-[#4FC3F7]">Get to Know Me</p>

                    <p className="mb-4">
                        Hi there! I'm Roopesh Kumar, a MERN Stack Developer specializing in MongoDB, Express.js,
                        React, and Node.js. With a passion for building scalable, high-performance web applications,
                        I help businesses create seamless digital experiences that drive growth.
                    </p>

                    <p className="mb-4">
                        From designing dynamic front-end interfaces with React to developing robust back-end solutions
                        with Node.js and Express, I bring a full-stack approach to modern web development. Whether it's
                        crafting RESTful APIs, integrating databases, or optimizing performance, I ensure that every project
                        is efficient, secure, and user-friendly.
                    </p>

                    <p className="mb-6">
                        Let's collaborate to build cutting-edge applications that elevate your business. Get in touch, and
                        let's turn your ideas into reality!
                    </p>

                    <button 
                       
                        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg transition duration-300 hover:bg-blue-600"
                    >
                        <a href="/roopesh_resume.pdf" download="roopesh_resume.pdf" className="bg-blue-500 text-white p-2 rounded">
      Download  Resume
    </a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default About;
