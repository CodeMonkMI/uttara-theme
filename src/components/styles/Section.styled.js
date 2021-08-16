import styled from 'styled-components';

export const Title = styled.h2`
  color: ${(props) => (props.white ? '#fff' : ' #120f2d')};
  font-size: 45px;
  margin-bottom: 55px;
  text-align: ${({ align }) => align || 'initial'};
  width: ${({ width }) => width || '100%'};

  @media screen and (max-width: 460px) {
    font-size: 32px;
    line-height: 45px;
  }

  @media screen and (max-width: 460px) {
    font-size: 32px;
    margin-bottom: 15px;
    width: 100%;
  }
`;

export const SubTitle = styled.h4`
  font-size: 20px;
  color: ${(props) => (props.white ? '#fff' : '#f14d5d')};
  margin-bottom: 10px;
  text-align: ${({ align }) => align || 'initial'};

  @media screen and (max-width: 776px) {
    font-size: 18px;
  }
`;

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 60px;
  margin-bottom: 28px;
  line-height: 65px;

  @media screen and (max-width: 1280px) {
    font-size: 50px;
  }

  @media screen and (max-width: 776px) {
    font-size: 40px;
    line-height: 55px;
    margin-bottom: 10px;
  }
`;

export const HeroSubTitle = styled.h6`
  color: white;
  font-weight: 600;
  font-size: 19px;
  margin-bottom: 28px;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media screen and (max-width: 776px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;
