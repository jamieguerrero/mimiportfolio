import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

export const DesktopVerticalHeaderSpacing = '50px';
export const DesktopHorizontalHeaderSpacing = '50px';
export const DesktopHeaderHeight = '5rem';

export const MobileVerticalHeaderSpacing = '50px';
export const MobileHorizontalHeaderSpacing = '50px';
export const MobileHeaderHeight = '3rem';

export const MobileBreakpoint = '767px';
export const TabletBreakpoint = '1200px';
export const DesktopBreakpoint = '1200px';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DINNeuzeitGroteskStd-Light';
    font-weight: normal;
    src: url('../fonts/DINNeuzeitGroteskStd-Light.eot'), /* IE9 Compat Modes */
    url('../fonts/DINNeuzeitGroteskStd-Light.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/DINNeuzeitGroteskStd-Light.woff') format('woff'), /* Pretty Modern Browsers */
        url('../fonts/DINNeuzeitGroteskStd-Light.ttf')  format('truetype'), /* Safari, Android, iOS */
  }

  html {
    display: unset;
    font-family: 'DINNeuzeitGroteskStd-Light', sans-serif;
  }
  
  body {
    display: unset;
    margin: 0;
    background-color: ${(props) => props.backgroundcolor};
  }
`;

export const LayoutWrapper = styled.div`
  position: absolute;
  z-index: -100;
  height: 100vh;
  width: 100vw;

  @media (max-width: ${MobileBreakpoint}){
    position: relative;
    z-index: 0;
  }
`;

export const NavigationHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: ${MobileHorizontalHeaderSpacing} 0;
  background-color: ${(props) => props.backgroundcolor};
  height: auto;

  @media (max-width: ${MobileBreakpoint}) {
    grid-template-rows: 70px 1fr 1fr ${MobileHorizontalHeaderSpacing};
    grid-template-columns: ${MobileHorizontalHeaderSpacing} 1fr 1fr ${MobileHorizontalHeaderSpacing};
    padding: 0;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  pointer: cursor;
  color: black;
`;

export const SocialIcon = styled.img`
  margin-right: 0.5rem;
  @media (max-width: ${MobileBreakpoint}) {
    height: 21px;
    margin-right: 1rem;
  }
`;

export const MimiVuong = styled.div`
  position: fixed;
  top: ${DesktopVerticalHeaderSpacing};
  left: ${DesktopHorizontalHeaderSpacing};
  z-index: 100;

  @media (max-width: ${MobileBreakpoint}) {
    position: relative;
    top: 0;
    left: 0;
    grid-row: 2;
    grid-column: 2;
  }
`;

export const MenuItems = styled.div`
  position: fixed;
  top: ${DesktopVerticalHeaderSpacing};
  right: ${DesktopHorizontalHeaderSpacing};
  z-index: 100;

  @media (max-width: ${MobileBreakpoint}) {
    position: relative;
    top: 0;
    left: 0;
    grid-row: 3;
    grid-column: 2;
    margin-top: .5rem;
  }
`;
export const BottomLeftSocialIcons = styled.div`
  position: fixed;
  bottom: ${DesktopHorizontalHeaderSpacing};
  left: ${DesktopHorizontalHeaderSpacing};
  z-index: 100;

  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;

export const BottomRightSocialIcons = styled.div`
  position: fixed;
  bottom: ${DesktopHorizontalHeaderSpacing};
  right: ${DesktopHorizontalHeaderSpacing};
  z-index: 100;

  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`;

export const MobileSocialFooter = styled.div`
  margin: 6rem ${MobileHorizontalHeaderSpacing};

  @media (min-width: ${MobileBreakpoint}) {
    display: none;
  }
`;
