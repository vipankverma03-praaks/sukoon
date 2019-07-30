import React from "react";
import styled from "styled-components";

const Title = (props) =>{

 const Wrapper = styled.div`
    
 `

    const SubheadTop = styled.div`
    border-left: 3px solid #ffc300;
    color: #12443d;
    padding-left: 8px;
`

    const HeadingWrapper = styled.h2`
    
`;
    const HeadingLight = styled.span`
     display: ${props => props.display || 'inline-block'};
`;


    return(
        <Wrapper className={props.wrapperClass}>
            <SubheadTop>{props.subHeading || 'Explore'}</SubheadTop>
            <HeadingWrapper className="text-sukoon inline text-4xl w-full">
                <HeadingLight className="font-light mr-2" display={props.display}>{props.titleLight || ''}</HeadingLight>
                {props.titleBold}
            </HeadingWrapper>
        </Wrapper>
    )
};

export default Title;