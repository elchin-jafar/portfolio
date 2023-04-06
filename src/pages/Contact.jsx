import { useRef } from "react";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import classes from "./Contact.module.css";

function Contact() {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [messageApi, contextHolder] = message.useMessage();

  const sendEmail = (e) => {
    e.preventDefault();

    if(nameRef.current.value.trim() === "" && emailRef.current.value.trim() === "" && messageRef.current.value.trim() === "") {
      console.log('bruh!!');
      messageApi.open({
        type: 'error',
        content: 'Please fill in all fields to submit the form',
      })
      return;
    }
    emailjs.sendForm('service_w5gtdzk', 'template_ep28gp2', form.current, 'zPR9eR7dAaFKp0_D7')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          messageApi.open({
            type: 'success',
            content: 'Your email has been sent! Thank you for contacting us!'
          });
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className={classes.contact}>
      {contextHolder}
      <Header>contact</Header>
      <p className={classes["info-paragraph"]}>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div className={classes.form}>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input ref={nameRef} type="text" id="name" placeholder="Enter Your Name" name="from_name" />
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" id="email" placeholder="Enter Your Email" name="user_email" />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            ref={messageRef}
            cols="30"
            rows="10"
            placeholder="Enter Your Message"
            name="message"
          ></textarea>
          <Button mid>submit</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
