import img1 from 'images/instructor/1.png';
import img2 from 'images/instructor/2.png';
import img3 from 'images/instructor/3.png';
import img4 from 'images/instructor/4.png';
import img5 from 'images/instructor/5.png';
import img6 from 'images/instructor/6.png';
import React, { useEffect, useState } from 'react';
// import shortid from 'shortid';
import Person from './Person';

const shortid = () => Math.ceil(Math.random() * 9999);

interface PersonProperty {
  id: number | string;
  name: string;
  position: string;
  image: string;
  links: PersonSocialProperty;
}

interface PersonSocialProperty {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedIn: string;
}

const data: PersonProperty[] = [
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

const Persons: React.FC<{ isHome: boolean }> = ({ isHome }) => {
  const [persons, setPersons] = useState<PersonProperty[]>([] as any);

  useEffect(() => {
    if (isHome) {
      setPersons(data.slice(0, 4));
    } else {
      setPersons(data);
    }
  }, [isHome]);

  return (
    <div className='flex flex-wrap'>
      {persons.map((person: PersonProperty) => (
        <div
          className={`w-full sm:w-1/2 ${isHome ? '  md:w-1/4' : 'md:w-1/3'} `}
          key={person.id}
        >
          <Person
            name={person.name}
            image={person.image}
            position={person.position}
            facebook={person?.links?.facebook}
            twitter={person?.links?.twitter}
            instagram={person?.links?.instagram}
            linkedIn={person?.links?.linkedIn}
          />
        </div>
      ))}
    </div>
  );
};

export default Persons;
