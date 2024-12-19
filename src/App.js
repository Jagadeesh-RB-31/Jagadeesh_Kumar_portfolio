



import React from "react";
import "./App.css";
import { useState } from "react";

import { Typewriter } from 'react-simple-typewriter';
import emailjs from 'emailjs-com';
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // redirect to mail
    const handleMailClick = () => {
        window.location.href = "mailto:rjagu98@gmail.com";
    };

    // redirect to linkedin
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/jaga31", "_blank");
    };

    // redirect to github

    const handleGithubClick = () => {
        window.open("https://github.com/Jagadeesh-RB-31", "_blank");
    };

    

    // send details to my mail

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_twba6nk', 'template_y8izldh', {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }, 'fRzouAG6jMk_bL-HX')
            .then((response) => {
                alert('Message sent successfully! I will reach you soon !!!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            });
    };

    const handleHotpizzaClick=()=>{
        window.open("https://hot-pizza-website-jj6z.onrender.com","_blank")
    };

    const handleUntitled_ui_Click=()=>{
        window.open("https://untitled-ui-vgxc.onrender.com","_blank")
    };
    const handleTic_tac_toe_Click=()=>{
        window.open("https://tic-tac-toe-game-9rlv.onrender.com","_blank")
    };
    const handleTodoClick=()=>{
        window.open("https://to-do-list-dfga.onrender.com","_blank")
    };
    const handleQRClick=()=>{
        window.open("https://qr-generator-z1f8.onrender.com","_blank")
    };
    const handleEnquiryClick=()=>{
        window.open("https://course-form-twgr.onrender.com","_blank")
    };


    return (
        <div className="portfolio">
            
            {/* home content */}

           <div  className="home">
                <nav>
                    <div className="logo-div">
                        <p className="font-effect-shadow-multiple" style={{ color: "orangered" }}>JK</p>
                    </div>
                    <button className="hamburger" onClick={toggleMenu}>
                        &#9776;
                    </button>
                    <ul className={`list-items ${isMenuOpen ? "show" : ""}`}>
                        <li><a href="/" >HOME</a></li>
                        <li><a href="#AboutMe" >ABOUT</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#Contact">CONTACT</a></li>
                    </ul>
                </nav>


                <div className="home-content">

                    <div className="shape">
                        <img className='circle' src="/profile-images/jaga-orange.png" alt="Jagadeesh Kumar" />
                    </div>

                    <div className="name-div">
                        <p id="hello">HELLO, I'M</p>
                        <p id="jaga">JAGADEESH KUMAR R</p>
                        <div id="full">
                            <Typewriter
                                words={["FULLSTACK DEVELOPER", "FRONT-END DEVELOPER", "BACK-END DEVELOPER"]}
                                loop={Infinity}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={40}
                                delaySpeed={1500}

                            />
                        </div>

                        <div className="egar">
                            <p id="sky">
                                Eager and skilled fullstack developer with a passion for creating innovative web solutions, Proficient in both front-end and back-end development technologies.
                            </p>
                        </div>
                    </div>
                </div>

                </div>


            {/* about me section */}


            <div className="aboutcontentdiv" id="AboutMe" >



                <div className="pngdiv">
                    <img className="png" src="/profile-images/l.webp" alt="lap"></img>
                </div>

                <div className="lapboy">

                </div>

                <div className="aboutcontent">
                    <div className="me">
                        <h1>About Me</h1>
                        <p>Eager and enthusiastic fresher fullsatck developer with a strong foundation in fullstack development. Committed to continuous learning and growth, I thrive in dynamic environments where I can contribute fresh ideas and perspectives. Possessing a passion for problem-solving and creativity, I am driven to create innovative solutions that enhance user experiences and drive business success.</p>
                    </div>

                    <div className="cdetails">

                        <div className="bangalore">
                            <div id="bandiv1" >
                                <p id="aboutname"><i id="ffa" className="fa-solid fa-user"></i> NAME</p>
                                <p>Jagadeesh Kumar R</p>
                            </div>
                            <div id="bandiv1" className="bandiv2">
                                <p id="aboutname"><i id="ffa" className="fa-solid fa-location-dot"></i> LOCATION</p>
                                <p>Bangalore</p>
                            </div>
                        </div>
                        <div className="bangalore" id="bangalore">
                            <div id="bandiv1" >
                                <p id="aboutname"><i id="ffa" className="fa-solid fa-envelope"></i> EMAIL</p>
                                <p id="aboutemail" onClick={handleMailClick}>rjagu98@gmail.com</p>
                            </div>
                            <div id="bandiv1" className="bandiv2">
                                <p id="aboutname"><i id="ffa" className="fa-solid fa-phone"></i> PHONE</p>
                                <p>+91 9585629557</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            {/* slills container */}


            <div id="skills" className="skills">

                <h1 id="myskills" style={{ textAlign: "center", padding: "20px" }}>My Skills</h1>

                <div className="totalsection1">
                    <section id="section1">
                        <img className="htmlimg" src="/skills-images/html-3D-image.webp" alt="html"></img>
                        <p>HTML 5</p>
                    </section>
                    <section id="section1">
                        <img src="/skills-images/css3d-image.webp" alt="css"></img>
                        <p>CSS 3</p>
                    </section>
                    <section id="section1">
                        <img src="/skills-images/bootstrap-3D-image.webp" alt="bootstap"></img>
                        <p>BOOTSTRAP</p>
                    </section>
                    <section id="section1">
                        <img src="/skills-images/javascript-3D-image.webp" alt="js"></img>
                        <p>JAVASCRIPT</p>
                    </section>

                </div>

                <div className="totalsection2">
                    <section id="section1">
                        <img src="/skills-images/react-3D-image.webp" alt="react"></img>
                        <p>REACT JS</p>
                    </section>
                    <section id="section1">
                        <img src="/skills-images/python-3D-image.webp" alt="python"></img>
                        <p>PYTHON</p>
                    </section>
                    <section id="section1">
                        <img src="/skills-images/django-3D-image.jpg" alt="django"></img>
                        <p>DJANGO</p>
                    </section>
                    <section id="section1">
                        <img src="/skills-images/sql3d-image.webp" alt="sql"></img>
                        <p>SQL</p>
                    </section>

                </div>

            </div>




            {/* projects container */}

            <div className="myproject" id="projects" >

                <div>
                    <h1 id="mytitle">My Projects</h1>
                </div>

                <div className="total-projects">

                    <div className="projectsdiv">

                        <img src="/projects-images/res.jpeg" alt="restaurant" onClick={handleHotpizzaClick}></img>
                        <p id="title">Pizza Shop Website</p>
                        <p id="project-des">The pizza shop website features a responsive design, showcasing menu items, offers, and customer-friendly sections. It provides an engaging and seamless user experience.</p>
                        <div id="soft">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                        </div>
                        <div id="livebutton">
                            <button onClick={handleHotpizzaClick}> <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</button>
                        </div>

                    </div>

                    <div className="projectsdiv">

                        <img src="/projects-images/untitled-ui.png" alt="untitled-ui" onClick={handleUntitled_ui_Click}></img>
                        <p id="title">Untitled UI <span id="uistatic">(static)</span></p>
                        <p id="project-des">"Untilled UI" is a dynamic and responsive front page design using HTML and CSS, crafted to deliver seamless usability and aesthetic appeal across devices.</p>
                        <div id="soft">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                        </div>
                        <div id="livebutton">
                            <button onClick={handleUntitled_ui_Click}> <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</button>
                        </div>

                    </div>

                    <div className="projectsdiv">

                        <img src="/projects-images/tik.png" alt="tic-tac-toe" onClick={handleTic_tac_toe_Click}></img>
                        <p id="title">Tic-Tac-Toe Game</p>
                        <p id="project-des">The Tic-Tac-Toe game offers an interactive and engaging user experience with a simple, responsive interface. It includes dynamic win/lose detection for seamless gameplay.</p>
                        <div id="soft">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                            <p>Javascript</p>
                        </div>
                        <div id="livebutton">
                            <button onClick={handleTic_tac_toe_Click}> <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</button>
                        </div>

                    </div>





                </div>

                <div className="total-projects2">

                    <div className="projectsdiv">

                        <img src="/projects-images/todo.jpg" alt="todo" onClick={handleTodoClick}></img>
                        <p id="title">To-Do List </p>
                        <p id="project-des">The to-do list application allows users to add, delete, and manage tasks effortlessly. It features a clean, user-friendly interface for efficient task management.</p>
                        <div id="soft">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                            <p>Javascript</p>
                        </div>
                        <div id="livebutton">
                            <button onClick={handleTodoClick}> <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</button>
                        </div>

                    </div>

                    <div className="projectsdiv">

                        <img src="/projects-images/qr.jpeg" alt="qr"onClick={handleQRClick}></img>
                        <p id="title">QR Generator</p>
                        <p id="project-des">The QR code generator converts user-provided links into scannable QR codes instantly. It features a responsive design for a smooth and interactive user experience.</p>
                        <div id="soft">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                            <p>React JS</p>
                        </div>
                        <div id="livebutton">
                            <button onClick={handleQRClick}> <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</button>
                        </div>

                    </div>

                    <div className="projectsdiv">

                        <img src="/projects-images/inquery.jpg" alt="form" onClick={handleEnquiryClick}></img>
                        <p id="title">Enquiry Form</p>
                        <p id="project-des">The course enquiry form captures user details like name and contact information, enabling seamless data collection. Designed with a clean interface, it ensures easy submission and secure handling of data.</p>
                        <div id="soft">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Bootstrap</p>
                            <p>React JS</p>
                        </div>
                        <div id="livebutton">
                            <button onClick={handleEnquiryClick}> <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</button>
                        </div>

                    </div>






                </div>

            </div>



            {/* contact container */}



            <div className="total_contact" id="Contact">

                <div className="connect">
                    <h1 id="connecthead">Let's Connect</h1>
                    <p id="connectcontent">Excited to connect and discuss how my skills can contribute to your team. Your message is valued and I look forward to the opportunity!</p>

                    <div className="contactdetails">
                        <div className="contactdetails1">
                            <section>
                                <p id="conname"><i className="fa-solid fa-phone"></i> PHONE</p>
                                <p>+91 9585629557</p>
                            </section>
                            <section className="section3">
                                <p id="conname"><i className="fa-solid fa-location-dot"></i> LOCATION</p>
                                <p>Bangalore</p>
                            </section>
                        </div>

                        <div className="contactdetails2">
                            <section>
                                <p id="conname"><i className="fa-solid fa-envelope"></i> EMAIL</p>
                                <p id="conemail" onClick={handleMailClick}>rjagu98@gmail.com</p>
                            </section>
                            <section id="ffc1" className="section3">
                                <p id="conname"><i className="fa-solid fa-user"></i> SOCIAL</p>
                                <div id="ffc">
                                    <p> <i id="ffs" className="fa-brands fa-square-github" onClick={handleGithubClick}></i></p>
                                    <p><i id="ffs" className="fa-brands fa-linkedin" onClick={handleLinkedInClick}></i></p>
                                </div>

                            </section>
                        </div>


                    </div>

                </div>


                <div className="connectform">

                    <h3>Lets' Talk</h3>

                    <form onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Let's talk about...."
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">Submit</button>
                    </form>


                </div>


            </div>
            <hr></hr>

            <footer>
                <h5><span>&copy;</span> Jagadeesh Kumar 2024 - 2025. All rights reserved.</h5>
                <p>website by Jagadeesh Kumar</p>
            </footer>







        </div>


    );
};

export default App;