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
                <Title subHeading="Tour" titleLight="1500 " titleBold="Sq. Feet" />
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
            </div>
            <div className="px-5 my-5">
                OPD
                <div className="">
                    <h2 className="text-2xl text-left text-sukoon leading-none">Consulting Chambers</h2>
                    <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                        <ul className="patient_services_nav flex overflow-x-scroll">
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Consulting Chambers</button>
                            </li>
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Pharmacy</button>
                            </li>
                        </ul>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt exercitationem omnis.</p>
                </div>
            </div>
            <div className="facilities px-5 my-5">
            <details className= "mb-3">
                <summary><h2 className="text-2xl text-left text-sukoon leading-none">Fitness Studio</h2></summary>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </details>
                <details className= "mb-3">
                    <summary><h2 className="text-2xl text-left text-sukoon leading-none">Art Studio</h2></summary>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </details>
                <details className= "mb-3">
                    <summary><h2 className="text-2xl text-left text-sukoon leading-none">Terrace Garden</h2></summary>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </details>
            </div>
            <div className="px-5 my-5">
                IPD
                <div className="">
                    <h2 className="text-2xl text-left text-sukoon leading-none">Movie Lounge</h2>
                    <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                        <ul className="patient_services_nav flex overflow-x-scroll">
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Rooms</button>
                            </li>
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Intensive Care Unit</button>
                            </li>
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Movie Lounge</button>
                            </li>
                        </ul>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt exercitationem omnis.</p>
                </div>
            </div>

        </Layout>
    );
}

export default Services;
