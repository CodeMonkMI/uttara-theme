import React from 'react';

const ContactForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    alert('Thank you');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='sm:flex box-border'>
          <div className='w-full sm:w-1/2  sm:mr-3 box-border mb-5'>
            <input
              type='text'
              className='input-control'
              placeholder='First Name'
            />
          </div>
          <div className='w-full sm:w-1/2 sm:ml-3 box-border mb-5'>
            <input
              type='text'
              className='input-control'
              placeholder='Last Name'
            />
          </div>
        </div>

        <div className='w-full'>
          <input type='email' className='input-control' placeholder='Email' />
        </div>

        <div className='w-full mt-3 mb-4'>
          <textarea
            cols='30'
            rows='10'
            className='input-control'
            placeholder='Message'
          ></textarea>
        </div>
        <button
          type='submit'
          className='text-white py-3 px-4 text-base bg-blue-500 rounded-md ml-1 transition-all duration-500 ease-in-out'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
