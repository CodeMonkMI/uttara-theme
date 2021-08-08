import React from 'react';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    alert('Thank you');
  };

  return (
    <div className={style.root}>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.nameWrapper}>
          <div className={style.group}>
            <input
              type='text'
              className={style.input}
              placeholder='First Name'
            />
          </div>
          <div className={style.group}>
            <input
              type='text'
              className={style.input}
              placeholder='Last Name'
            />
          </div>
        </div>

        <div className={style.group}>
          <input type='email' className={style.input} placeholder='Email' />
        </div>

        <div className={style.group}>
          <textarea
            cols='30'
            rows='10'
            className={style.input}
            placeholder='Message'
          ></textarea>
        </div>
        <button type='submit' className={style.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
