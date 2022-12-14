import React from "react"
import Nav from './Nav';
import styled from 'styled-components';
import { useEffect,useRef } from 'react';
const Wrapper=styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main=styled.div`
  flex-grow: 1;
  overflow: auto;
`
type Props = {
  className?: string;
  scrollTop?: number;
}
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {return;}
      console.log(props.scrollTop);
      mainRef.current.scrollTop = props.scrollTop!;
      console.log(mainRef.current.scrollTop);
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className} data-x={'frank'}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0
};
export default Layout