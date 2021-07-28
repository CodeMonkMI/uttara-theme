import img1 from 'images/instructor/1.png';
import img2 from 'images/instructor/2.png';
import img3 from 'images/instructor/3.png';
import img4 from 'images/instructor/4.png';
import img5 from 'images/instructor/5.png';
import img6 from 'images/instructor/6.png';
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import Person from './Person';
import style from './Persons.module.css';
const data = [
  {
    id: shortid(),
    name: 'Alexandra',
    position: 'Teaches Communication',
    image: img1,
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    name: 'Amanda',
    position: 'Teaches Communication',
    image: img2,
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    name: 'Gabrielle',
    position: 'Teaches Communication',
    image: img3,
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    name: 'Angela',
    position: 'Teaches Communication',
    image: img4,
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    name: 'Hexahedral',
    position: 'Teaches Communication',
    image: img5,
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
  {
    id: shortid(),
    name: 'Amanda',
    position: 'Teaches Communication',
    image: img6,
    links: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedIn: '',
    },
  },
];

const Persons = ({ isHome }) => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    if (isHome) {
      setPersons(data.slice(0, 4));
    } else {
      setPersons(data);
    }
  }, [isHome]);

  return (
    <div className={`${style.root} ${isHome ? style.isHome : ''}`}>
      {persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          image={person.image}
          position={person.position}
          facebook={person?.links?.facebook}
          twitter={person?.links?.twitter}
          instagram={person?.links?.instagram}
          linkedIn={person?.links?.linkedIn}
        />
      ))}
    </div>
  );
};

export default Persons;
