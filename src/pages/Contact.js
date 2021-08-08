import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import ContactForm from 'components/contact/ContactForm';
import Img1 from 'images/contact-page.png';
import React from 'react';
import style from './Contact.module.css';
const Contact = () => {
  return (
    <div>
      <Breadcrumb title='Contact' />
      <div className={style.root}>
        <div className='container'>
          <h2 className={style.title}>Get In Touch</h2>
          <div className={style.wrapper}>
            <div className={style.imageWrapper}>
              <img src={Img1} alt='' />
            </div>
            <div className={style.form}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
