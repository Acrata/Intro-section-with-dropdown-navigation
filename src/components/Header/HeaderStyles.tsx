
import styled from 'styled-components/macro'

const HeaderContainer = styled.header`
  --margin-top-header: calc(var(--margin-sm) * 3);
  display: flex;
  align-items: center;
  margin-inline: var(--margin);
  margin-block-end: var(--margin-sm);
  padding-block-start: var(--margin-top-header);
  position: relative;
  button[name='menu'] {
    appearance: none;
    background-color: transparent;
    border: none;
    margin-inline-start: auto;
    cursor: pointer;
  }
  &.menu-active:after {
    content: "";
    position: absolute;
    left: calc(var(--margin) * -1);
    top: 0;
    width:100vw;
    height: 100vh;
    background-color:rgba(23,23,23,.9);
    z-index:-1;
    pointer-events: none;
  }
  .icon-up, .icon-down {
    display: none;
  }

  @media only screen and (min-width: 1200px){
    --margin-top-header: var(--margin);
    max-width:1640px;
    margin: 0 auto;
    z-index:10;
    button[name='menu'], button[name='close'] {
      display: none;
    }
    svg {
      transform: scale(1.1);
    }
  }
`
export default HeaderContainer
