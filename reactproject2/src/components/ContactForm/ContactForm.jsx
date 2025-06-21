import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt} from "react-icons/fa"
import { HiMail } from 'react-icons/hi'
import { useState } from "react"

const ContactForm = () => {
  const [name, setName ]=useState("surbhi");
    const [email, setEmail ]=useState("surbhi@gmail.com");
      const [text, setText ]=useState("surbhi");

  const onViceCallSubmit =()=>{
    console.log( "hello i am learning react"  )
  }

  const onSubmit =(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
      setEmail(event.target[1].value);
        setText(event.target[2].value);
      
        console.log({name,email,text});
  };
  return (
    <section className={styles.container}>
     <div className={styles.contact_form}>
      <div className={styles.top_btn}>
       <Button text ="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
         <Button onClick={onViceCallSubmit} text ="VIA CALL" icon={< FaPhoneAlt fontSize="24px"/>}/>
      </div>
        <Button
        isOutline={true}
        text ="VIA EMAIL FORM" icon={< HiMail fontSize="24px"/>}/> 
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="Name">Name</label>
          <input type="text" name="Name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
          <input type="text" name="email" />
          </div> 
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
          <textarea name="text" rows="5"/>
          </div> 
          <div style={{display:"flex",justifyContent:"end", }}>
            <Button  text ="SUBMIT BUTTON" /> 
          </div>
          <div>{name + " " + email + " " + text}</div>
          </form>  
      </div> 
     <div className={styles.contact_image}>
      <img src="/images/Service 24_7-pana 1.png" alt="img" /></div>
    </section>
  )
}

export default ContactForm
