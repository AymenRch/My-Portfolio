import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaMailBulk, FaPhone, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight: "2rem"}} />
                    <div>
                        <p>03 Sidi Achour Annaba.</p>
                        <p>Algerie.</p>
                    </div>
                </div>
                <div className="email">
                    <h4>
                        <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                        07.93.32.57.28
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                        aymenrch37@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>This is me Aymen Rachedi. Full Stack Web & Mobile Developper. I enjoy discussing new projects.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaInstagram size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer