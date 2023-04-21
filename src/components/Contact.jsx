import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ 
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const hanndleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm ({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ryan Baxter",
          from_email: form.email,
          to_email: "rybaxter@umich.edu",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again later.");
          console.log(error);
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        {/* header of the contact form */}
        <p className={styles.sectionSubText}>
          Get in Touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact
        </h3>

        {/* contact form input fields */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          {/* Name input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name" 
              value={form.name} 
              onChange={hanndleChange} 
              placeholder="What's your name?" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium">
            </input>
          </label>

          {/* Email input */}
          <label className="flex flex-col">
            <span classNAme="text-white font-medium mb-4">Your Email</span>
            <input 
              type="text"
              name="email" 
              value={form.email} 
              onChange={hanndleChange} 
              placeholder="What's your email?" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium">
            </input>
          </label>

          {/* Message input */}
          <label className="flex flex-col">
            <span classNAme="text-white font-medium mb-4">Your Message</span>
            <input 
              type="text"
              name="message" 
              value={form.message} 
              onChange={hanndleChange} 
              placeholder="What would you like to say?" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium">
            </input>
          </label>

          {/* button to submit */}
          <button type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");