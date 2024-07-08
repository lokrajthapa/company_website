import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
           
        </div>
        <div className='about-right'>
            <h3>ABOUT COMPANY</h3>
            <h2>CodelabsITsolution For Better future </h2>
            <p>At CodelabsITSolution, we pride ourselves on being at the forefront of innovative IT services, providing customized solutions to meet the diverse needs of our clients. With a team of highly skilled professionals, we offer a comprehensive range of services, including software development, network security, cloud computing, and IT consulting. Our commitment to quality and customer satisfaction ensures that we deliver efficient, reliable, and scalable technology solutions that drive business success.   </p>
            <p>At the core of our operations is a customer-centric approach that values collaboration and transparency. We work closely with our clients to understand their unique challenges and goals, ensuring that every project is aligned with their strategic vision. Our dedication to excellence is reflected in our long-standing client relationships and a proven track record of successful project delivery. At CodelabsITsolution, we are not just a service provider; we are a trusted partner committed to driving innovation and fostering growth through cutting-edge technology.</p>
          

        </div>
    </div>
  )
}

export default About