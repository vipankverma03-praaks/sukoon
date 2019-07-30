import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import styled from "styled-components";
import image from "../../static/service_bg.jpg";

const BannerWrapper = styled.div`
&::before {
    content: '';
    display: block;
position: absolute;
z-index: -2;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-image: url(${image}) ;
background-size:cover;
background-position:top center;
}
&::after {
    content: '';
    display: block;
position: absolute;
z-index: -1;
opacity: 0.75;
left: 0;
right: 0;
top: 0; 
bottom: 0;
background-color:#bbcdcf;
}
`;

function Services() {
    return (
        <Layout>
            <SEO
                title="About"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <BannerWrapper className="flex flex-wrap p-5 banner_section relative">
                <h1 className="w-full text-4xl leading-loose text-sukoon"><span>Don't Just Stay,</span><br />Live Here</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa inventore ipsum!</p>
            </BannerWrapper>

        <div className="px-5 my-5">
            <Title titleLight="In Patient" titleBold="Care Services" display="block"/>
            <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                <ul className="patient_services_nav flex overflow-x-scroll">
                    <li className="mr-3 mt-3">
                        <button class="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Acute Psychiatry Care Intensive Care Unit</button>
                    </li>
                    <li className="mr-3 mt-3">
                    <button
                            className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Acute
                            Alcohol, Drug, And Habit De-addiction Programs
                        </button>
                    </li>
                </ul>
                <div className="service_content h-40 my-4 overflow-y-scroll overflow-x-hidden text-justify">
                <h2 className="text-2xl text-left text-sukoon leading-none">Acute Psychiatry Services</h2>
                <p>Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than 42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by Hennepin County funds and state grants, provides these services to any person in need.</p>
                <br/>
                <h4 className="text-2xl text-sukoon font-semibold">Service</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente veritatis.</p>
                <br/>
                <h4 className="text-2xl text-sukoon font-semibold">Our Treatment Team</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente veritatis.</p>
                <br/>
                <h4 className="text-2xl text-sukoon font-semibold">Treatment Goal</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente veritatis.</p>
                </div>
            </div>
        </div>


        </Layout>
    );
}

export default Services;
