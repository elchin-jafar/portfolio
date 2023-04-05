import { useRef } from "react";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import classes from "./Contact.module.css";

function Contact() {
  const form = useRef();
  const [messageApi, contextHolder] = message.useMessage();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w5gtdzk', 'template_ep28gp2', form.current, 'zPR9eR7dAaFKp0_D7')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          messageApi.open({
            type: 'success',
            content: 'Message Sent, Thanks!!'
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
          <input type="text" id="name" placeholder="Enter Your Name" name="from_name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Your Email" name="user_email" />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
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
