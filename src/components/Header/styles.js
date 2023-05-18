import styled from 'styled-components'
import {ReactComponent as LogoSVG} from "./logo.svg";

export const Logo = styled(LogoSVG)`
  max-width: 760px;
  height: auto;
  transform: scale(0.26);
`

export const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position:fixed;
  width: 100vw;
  z-index: 1;
  padding: 30px;
`
