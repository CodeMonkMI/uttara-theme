import React from 'react';
import shortid from 'shortid';
import SectionTitle from '../SectionTitle';
import './Contact.css';
const Contact = () => {
  const addressItems = [
    {
      id: shortid(),
      icon: 'fas fa-map-marker-alt',
      value: '500 Treat Ave, Suite 200 San Francisco CA 94110',
    },
    {
      id: shortid(),
      icon: 'fas fa-envelope',
      value: 'info.contact@gmail.com',
    },
    {
      id: shortid(),
      icon: 'fas fa-phone-alt',
      value: '012 345 678 9101',
    },
  ];
  const socialLinks = [
    {
      id: shortid(),
      url: '/',
      icon: 'fab fa-facebook',
    },
    {
      id: shortid(),
      url: '/',
      icon: 'fab fa-twitter',
    },
    {
      id: shortid(),
      url: '/',
      icon: 'fab fa-instagram',
    },
    {
      id: shortid(),
      url: '/',
      icon: 'fab fa-linkedin-in',
    },
  ];

  return (
    <div className='text-white'>
      <div>
        <SectionTitle title='Contact Us' />
        <div>
          {addressItems.map((item) => (
            <AddressItem
              key={item.id}
              value={item.value}
              iconClass={item.icon}
            />
          ))}
        </div>
        <ul className='flex justify-center mt-8'>
          {socialLinks.map((item) => (
            <SocialIcon key={item.id} url={item.url} iconClass={item.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const AddressItem = ({ iconClass, value }) => (
  <ul className='flex mt-5 items-start justify-center flex-wrap contact__adList'>
    <li className='w-6 overflow-hidden text-base mt-3 inline-block'>
      <i className={iconClass}></i>
    </li>
    <li className='flex-none ml-2 sm:ml-0 sm:flex-1 text-base leading-9 '>
      {value}
    </li>
  </ul>
);

const SocialIcon = ({ url, iconClass }) => (
  <li className='mr-4 text-xl last:mr-0'>
    <a
      href={url}
      className='py-2 px-3 rounded-md text-white transition-all ease-in duration-300 inline-block shadow-lg hover:bg-blue-500 hover:shadow-none '
    >
      <i className={iconClass}></i>
    </a>
  </li>
);

export default Contact;
