import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #12443e;
  padding: ${props => props.border ? '2px' : ''};
  background: ${props => props.border ? 'white' : '#12443e'};
  
  button{
  padding: 5px 10px;
  }
`;
const Button = (props) =>{

  return(
    <Wrapper border={props.border} className={`${props.wrapperClass || ''} w-fit`}>
      <button
        className={`${props.buttonClass || ''} block relative font-gilroyMedium outline-none text-sm items-center bg-sukoon text-white`}>
        {props.children}
      </button>
    </Wrapper>
  )
};

export default Button;