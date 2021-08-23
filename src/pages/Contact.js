import Breadcrumb from 'components/breadcrumb/Breadcrumb';
import ContactForm from 'components/contact/ContactForm';
import { Container } from 'components/styles/Container.styled';
import { Title } from 'components/styles/Section.styled';
import Img1 from 'images/contact-page.png';
import React from 'react';
const Contact = () => {
  return (
    <div>
      <Breadcrumb title='Contact' />
      <div className={`py-24 bg-gray-200`}>
        <Container>
          <Title align='center'>Get In Touch</Title>
          <div className='sm:flex flex-wrap items-center'>
            <div className='mb-5 sm:mb-0 sm:w-5/12 h-96 overflow-hidden'>
              <img src={Img1} alt='' className='object-contain transform' />
            </div>
            <div className='sm:w-7/12 box-border sm:px-5'>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
