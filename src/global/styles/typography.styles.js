import styled from 'styled-components';
import { Link } from 'gatsby';

export const Title = styled(Link)`
  font-size: 25px;
  line-height: 40px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;

  @media (max-width: 1440px) {
    font-size: 21px;
    line-height: 25px;
  }

  @media (max-width: 1200px) {
    font-size: 21px;
    line-height: 25px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const FeatureText = styled.span`
  font-size: 12px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
  margin-left: .5rem;
`;

export const Subtitle = styled(Link)`
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
`;

export const H1 = styled.h1`
    font-size: 32px;
    line-height: 36px;
`;

export const BodyTextWrapper = styled.div`
    font-size: 14px;
    line-height: 24px;
`;
