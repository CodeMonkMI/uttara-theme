import React from 'react';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    alert('Thank you');
  };

  return (
    <div>
      <form className={style.form} onSubmit={submitHandler}>
        <div className='sm:flex flex-wrap justify-between'>
          <div className='w-full sm:w-1/2 mx-3 box-border mb-5'>
            <input
              type='text'
              className='input-control'
              placeholder='First Name'
            />
          </div>
          <div className='w-full sm:w-1/2 mx-3 box-border mb-5'>
            <input
              type='text'
              className='input-control'
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
