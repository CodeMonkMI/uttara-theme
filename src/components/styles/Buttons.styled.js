import styled from 'styled-components';

const white = '#fff';
const blue = '#2878eb';
const black = '#120f2d';

export const Button = styled.button`
  padding: 12px 20px;
  text-decoration: none;
  display: inline-block;
  border-radius: 3px;
  transform-style: all 0.3s;
  background-color: ${white};
  transition: all 0.5s ease-in-out;
  color: ${black};

  &:hover {
    color: #2878eb;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${blue};
  color: ${white};
  &:hover {
    color: ${white};
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${white};
`;
export const OutlineButton = styled(Button)`
  background: transparent;
  box-shadow: 0 0 0 ${(props) => props.borderSize}px ${blue};
  &:hover {
    background: ${blue};
    color: ${white};
  }
`;
