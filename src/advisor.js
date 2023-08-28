import './advisor.css'
const Advisor = () => {
    return (<>
        <div className="advisor">
            <h1>Mentors & Advisor</h1>
            <div className="omkar">
                <img src="https://www.sciastra.com/teams/dr_omkar.jpg" />
                <h2>Mentor & Advisor</h2>
                <p>Principal Project Scientist at Indian Institute of Technology, Madras</p>
            </div>

            <div className="vivek">
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="#8004bd" offset="0%"></stop>
                            <stop id="stop2" stop-color="#00d4ff" offset="100%"></stop>
                        </linearGradient>


                        <pattern id="image-pattern" x="0" y="0" width="1" height="1">
                            <image href="https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg" width="45" height="60" />
                        </pattern>
                        <linearGradient id="custom-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stop-color="rgba(128,4,189,1)" />
                            <stop offset="100%" stop-color="rgba(0,212,255,1)" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#custom-gradient)" d="M16.8,10C10.2,21,-14.5,21.8,-20.3,11.2C-26.1,0.6,-13.1,-21.5,-0.7,-21.9C11.7,-22.3,23.3,-1.1,16.8,10Z" width="100%" height="100%" transform="translate(48 48)" stroke-width="0" style={{ "transition": "all 0.3s ease 0s;" }}></path>
                    <path fill="url(#image-pattern)" d="M16.8,10C10.2,21,-14.5,21.8,-20.3,11.2C-26.1,0.6,-13.1,-21.5,-0.7,-21.9C11.7,-22.3,23.3,-1.1,16.8,10Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ "transition": "all 0.3s ease 0s" }}></path>
                </svg>
                <div className="vivekDetails">
                    <h2>Vivek Dwivedi</h2>
                    <p>Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER
                    </p>
                    <button className='massage'>Massege him now  <i className="fab fa-telegram fa-xl"></i></button>
                </div>
            </div>
            <div className="vivek akhil">
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stop-color="#8004bd" offset="0%"></stop>
                            <stop id="stop2" stop-color="#00d4ff" offset="100%"></stop>
                        </linearGradient>


                        <pattern id="image-pattern" x="0" y="0" width="1" height="1">
                            <image href="https://www.sciastra.com/teams/akhil_tripathi_niser.jpg" width="45" height="60" />
                        </pattern>
                        <linearGradient id="custom-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stop-color="rgba(128,4,189,1)" />
                            <stop offset="100%" stop-color="rgba(0,212,255,1)" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#custom-gradient)" d="M16.8,10C10.2,21,-14.5,21.8,-20.3,11.2C-26.1,0.6,-13.1,-21.5,-0.7,-21.9C11.7,-22.3,23.3,-1.1,16.8,10Z" width="100%" height="100%" transform="translate(48 48)" stroke-width="0" style={{ "transition": "all 0.3s ease 0s;" }}></path>
                    <path fill="url(#image-pattern)" d="M16.8,10C10.2,21,-14.5,21.8,-20.3,11.2C-26.1,0.6,-13.1,-21.5,-0.7,-21.9C11.7,-22.3,23.3,-1.1,16.8,10Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ "transition": "all 0.3s ease 0s" }}></path>
                </svg>
                <div className="vivekDetails">
                    <h2>Akhil Tripathi</h2>
                    <p>Cofounder SciAstra, Mentor, Qualified NEST, Master's Student at NISER
                    </p>
                    <button className='massage'>Massege him now  <i className="fab fa-telegram fa-xl"></i></button>
                </div>
            </div>
        </div>
    </>)
}

export default Advisor;