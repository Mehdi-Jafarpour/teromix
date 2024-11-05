import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mt4nq2r', // Replace with your EmailJS service ID
        'template_ffdcrwe', // Replace with your EmailJS template ID
        form.current,
        'chWHJdJVbadL_7ekO'      // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
        }
      );

    e.target.reset();
  };
  return (
    <>
      {/* Title */}
      <h1 className="text-6xl text-color1 font-bold text-center w-full mb-10 md:mb-16 mt-16">CONTACT</h1>
      <div className="w-full min-h-screen py-10 px-4 md:px-16 flex flex-col md:flex-row items-start justify-between">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-4 md:p-8 space-y-6">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium mb-2">Name</label>
            <input
              name="user_name"
              type="text"
              id="name"
              className="p-3 border border-gray-300 rounded-md outline-none focus:border-color1 transition"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">Email</label>
            <input
              name="user_email"
              type="email"
              id="email"
              className="p-3 border border-gray-300 rounded-md outline-none focus:border-color1 transition"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              className="p-3 border border-gray-300 rounded-md outline-none focus:border-color1 transition"
              placeholder="Type your message here"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="border border-gray-600 text-black py-3 px-6  hover:bg-color2 hover:text-color1 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="w-full md:w-1/2 p-4 mt-5 md:p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <div className="text-lg text-gray-700 space-y-2">
          <p><strong>Address:</strong> 142 Grigol Lortkipanidze St., Tbilisi, Georgia</p>
          <p><strong>Phone (Georgian Speaking):</strong> +995 598 011 000</p>
          <p><strong>Phone (English Speaking):</strong> +995 591 644 666</p>
          <p><strong>Emails:</strong> info@teromix.ge, marketing@teromix.ge</p>
        </div>

        {/* Google Map Embed */}
       <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.9938006514308!2d44.89699383315426!3d41.67761119968486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440e725a731dad%3A0xd9d8a56d1dba5a60!2s142%20Grigol%20Lortkipanidze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1730813189661!5m2!1sen!2sge"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Workshop Location"
          ></iframe>
        </div>
      </div>
      
       
    </div>
    
    </>
    
  );
}

export default Contact;
