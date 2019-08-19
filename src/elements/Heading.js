import React from "react";
import styled from "styled-components";

const Title = (props) => {

    const Wrapper = styled.div`
    
    `;
    const SubheadTop = styled.div`
    border-left: 3px solid #ffc300;
    color: #12443d;
    padding-left: 8px;
    `;

    const HeadingWrapper = styled.h2`
            
    `;

    const HeadingLight = styled.span`
      line-height: 1;
      display: inline;
    `;

    return (
        <Wrapper className={`${props.wrapperClass || ''} font-gilroyRegular`}>
            <SubheadTop>{props.subHeading || 'Explore'}</SubheadTop>
            <HeadingWrapper className="text-sukoon text-2xl w-full mt-2 block">
                <HeadingLight className="font-light font-gilroyRegular mr-2"
                              display={props.display}>{props.titleLight || ''}</HeadingLight>
                <span className="font-gilroyBold">
                {props.titleBold}
                </span>

            </HeadingWrapper>
        </Wrapper>
    )
};

export default Title;