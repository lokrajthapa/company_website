import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8242715-a312-4a47-91b0-1a5216db88cf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact' id="contact">
        <div className='contact-col'>
            <h3> Send us a messsage <img src={msg_icon} /></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum doloribus commodi adipisci autem. Sint aperiam quo recusandae in, voluptas aspernatur magni corporis, </p>
            <ul>
                <li><img src={mail_icon}  alt=''/> Contact@codelabsitsolution.com </li>
                <li><img src={phone_icon}  alt=''/>+977 9816196736</li>
                <li> <img src={location_icon} alt="" /> 77 middle area, Lakeside, <br/>  MA 01694, Nepal </li>
            </ul>

        </div>
        <div className='contact-col'>
           <form  onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required />
                <label>Phone Number </label>
                <input type='tel' name='phone' placeholder='Enter your mobile number ' required/>
                <label> write your messages here </label>
                <textarea  name='message'  rows="6" placeholder='Enter your message' required>


                </textarea>   
               <button type="submit" className='btn dark-btn'>
                   Submit now <img src={white_arrow} alt='' />
                </button> 
           </form> 
           <span> { result } </span>


        </div>

    </div>
  )
}

export default Contact