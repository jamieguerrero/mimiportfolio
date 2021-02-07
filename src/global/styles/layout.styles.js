import styled from 'styled-components';
import { Link } from 'gatsby';

export const DesktopVerticalHeaderSpacing = '50px';
export const DesktopHorizontalHeaderSpacing = '50px';
export const DesktopHeaderHeight = '7rem';

export const MobileVerticalHeaderSpacing = '20px';
export const MobileHorizontalHeaderSpacing = '20px';
export const MobileHeaderHeight = '4rem';

export const LayoutWrapper = styled.div`
  position: absolute;
  z-index: -100;
  background-color: ${(props) => props.backgroundcolor};
  height: 100vh;
  width: 100vw;
`;

export const NavigationHeader = styled.div`
  display: grid;
  height: ${DesktopHeaderHeight};
  margin: ${MobileHorizontalHeaderSpacing} 0;

  @media (min-width: 768px) {
    display: none;
    grid-template-rows: 1fr 1fr; 
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  pointer: cursor;
  color: black;
`;

export const TopLeft = styled.div`
  position: fixed;
  top: ${DesktopVerticalHeaderSpacing};
  left: ${DesktopHorizontalHeaderSpacing};
  z-index: 100;

  @media (max-width: 767px) {
    display: none;
    top: ${MobileVerticalHeaderSpacing};
    left: ${MobileHorizontalHeaderSpacing};
  }
`;

export const TopRight = styled.div`
  position: fixed;
  top: ${DesktopVerticalHeaderSpacing};
  right: ${DesktopHorizontalHeaderSpacing};
  z-index: 100;

  @media (max-width: 767px) {
    display: none;
    top: ${MobileVerticalHeaderSpacing};
    right: ${MobileHorizontalHeaderSpacing};
  }
`;
export const BottomLeft = styled.div`
  position: fixed;
  bottom: ${DesktopHorizontalHeaderSpacing};
  left: ${DesktopHorizontalHeaderSpacing};
  z-index: 100;

  @media (max-width: 767px) {
    display: none;
    bottom: ${MobileHorizontalHeaderSpacing};
    left: ${MobileHorizontalHeaderSpacing};
  }
`;

export const BottomRight = styled.div`
  position: fixed;
  bottom: ${DesktopHorizontalHeaderSpacing};
  right: ${DesktopHorizontalHeaderSpacing};
  z-index: 100;

  @media (max-width: 767px) {
    display: none;
    bottom: ${MobileHorizontalHeaderSpacing};
    right: ${MobileHorizontalHeaderSpacing};
  }
`;
