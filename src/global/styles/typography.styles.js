import styled from 'styled-components';
import { Link } from 'gatsby';

import {
  DesktopBreakpoint,
  TabletBreakpoint,
  MobileBreakpoint,
  MobileHorizontalHeaderSpacing,
} from './layout.styles';

export const Title = styled(Link)`
  font-size: 25px;
  line-height: 40px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;

  @media (max-width: ${DesktopBreakpoint}) {
    font-size: 21px;
    line-height: 25px;
  }

  @media (max-width: ${TabletBreakpoint}) {
    font-size: 21px;
    line-height: 25px;
  }

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const MobilePortfolioTitle = styled.span`
  display: inline-block;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 0.5rem;
  margin-left: ${MobileHorizontalHeaderSpacing};
`;

export const FeatureText = styled.span`
  font-family: "DINNeuzeitGroteskStd-Light", sans-serif;
  font-size: 12px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
  margin-left: 0.5rem;
`;

export const Subtitle = styled(Link)`
  font-family: "DINNeuzeitGroteskStd-Light", sans-serif;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => (props.selected ? '#FFCB00' : 'black')};
  filter: ${(props) => props.selected && 'blur(0px)'};
  text-decoration: none;
`;

export const H1 = styled.h1`
  font-family: "DINNeuzeitGroteskStd-Light", sans-serif;
  font-size: 32px;
  line-height: 36px;

  @media (max-width: ${DesktopBreakpoint}) {
    font-size: 21px;
    line-height: 25px;
  }

  @media (max-width: ${TabletBreakpoint}) {
    font-size: 21px;
    line-height: 25px;
  }

  @media (max-width: ${MobileBreakpoint}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const BodyTextWrapper = styled.div`
  font-family: "DINNeuzeitGroteskStd-Light", sans-serif;
  font-size: 14px;
  line-height: 24px;
`;
