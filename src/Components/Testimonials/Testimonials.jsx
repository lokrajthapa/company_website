import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'




const Testimonials = () => {

    const slider =useRef(); 
    let tx=0;
      
    const slideforward =()=>{
        if(tx> -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}% )`;
    }

    const slideBackward =()=>{
       
        if(tx<0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}% )`;
    
    }

     

  return (
    <div className='testimonials' id='testimonials'>
          <img src={next_icon} alt="" className='back-btn'  onClick={slideBackward} />

          <img src={back_icon} alt="" className='next-btn' onClick={slideforward}/>
         
          <div className='slider'>   
             <ul ref={slider}>
                 <li>
                     <div className='slide'>
                         <div className='user-info'>
                             <img src={user_1} alt="" />   
                             <div>
                                <h3>Saurav kumal</h3>
                                <span>CEO And CTO</span>
                             </div>
                         </div>  
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam exercitationem non tenetur,
                             ducimus, beatae, mollitia ad sequi dolores iure provident nam ex voluptatum
                              ipsa! Nesciunt modi nostrum maiores tenetur facilis.
                         </p>

                    </div> 
                 </li>
                 <li>
                     <div className='slide'>
                         <div className='user-info'>
                             <img src={user_2} alt="" />   
                             <div>
                                <h3> Lokraj Thapa Magar</h3>
                                <span>Senior FullStack developer</span>
                             </div>
                         </div>  
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam exercitationem non tenetur,
                             ducimus, beatae, mollitia ad sequi dolores iure provident nam ex voluptatum
                              ipsa! Nesciunt modi nostrum maiores tenetur facilis.
                         </p>
                         
                    </div> 
                 </li>
                 <li>
                     <div className='slide'>
                         <div className='user-info'>
                             <img src={user_3} alt="" />   
                             <div>
                                <h3> Kushal Magar</h3>
                                <span>Mobile App developer</span>
                             </div>
                         </div>  
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam exercitationem non tenetur,
                             ducimus, beatae, mollitia ad sequi dolores iure provident nam ex voluptatum
                              ipsa! Nesciunt modi nostrum maiores tenetur facilis.
                         </p>
                         
                    </div> 
                 </li>
                 <li>
                     <div className='slide'>
                         <div className='user-info'>
                             <img src={user_4} alt="" />   
                             <div>
                                <h3> Saugat Pariyar</h3>
                                <span>Frontend Developer</span>
                             </div>
                         </div>  
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam exercitationem non tenetur,
                             ducimus, beatae, mollitia ad sequi dolores iure provident nam ex voluptatum
                              ipsa! Nesciunt modi nostrum maiores tenetur facilis.
                         </p>
                         
                    </div> 
                 </li>
             </ul>
          </div>  
    </div>
  )
}

export default Testimonials