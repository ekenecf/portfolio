import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="contactMe">
      <form action="https://formspree.io/f/xpzbdboq" method="post">
        <label htmlFor="name">
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required="required"
            maxLength="30"
          />
        </label>
        <label htmlFor="mail">
          <input
            name="email"
            type="email"
            placeholder="  Your email"
            required="required"
          />
        </label>
        <label htmlFor="msg">
          <textarea
            name="message"
            placeholder="   Write your message here"
            maxLength="700"
            required="required"
          />
        </label>
        <button type="submit">Get in touch</button>
      </form>
    </div>
  );
}

export default Form;
