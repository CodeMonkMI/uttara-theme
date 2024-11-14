import { PrimaryButton } from "components/styles/Buttons.styled";
import { SubTitle, Title } from "components/styles/Section.styled";
import style from "./Content.module.css";
const Content = () => {
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <SubTitle>About EduGood</SubTitle>
        <Title>Welcome to Our Online Learning Center</Title>
        <p className={style.text} id="aboutContentText">
          we believe everyone should have the opportunity to create progress
          through technology and develop the skills of tomorrow. paths should
          have and learning courses assessments, authored.
        </p>
        <PrimaryButton href="https://www.facebook.com/mdmonir027/" as="a">
          Read More
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Content;
