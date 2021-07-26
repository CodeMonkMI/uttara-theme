import React from 'react';
import shortid from 'shortid';
import style from './Contact.module.css';
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
    <div className={style.root}>
      <div className={style.wrapper}>
        <h4 className={style.title}>Contact Us</h4>
        <div className={style.details}>
          {addressItems.map((item) => (
            <AddressItem
              key={item.id}
              value={item.value}
              iconClass={item.icon}
            />
          ))}
        </div>
        <ul className={style.links}>
          {socialLinks.map((item) => (
            <SocialIcon key={item.id} url={item.url} iconClass={item.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const AddressItem = ({ iconClass, value }) => (
  <ul className={style.adList}>
    <li className={style.adIcon}>
      <i className={iconClass}></i>
    </li>
    <li className={style.adValue}>{value}</li>
  </ul>
);

const SocialIcon = ({ url, iconClass }) => (
  <li className={style.sItem}>
    <a href={url} className={style.sLink}>
      <i className={iconClass}></i>
    </a>
  </li>
);

export default Contact;
