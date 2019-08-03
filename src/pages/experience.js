import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import styled from "styled-components";
import Image from "../../static/service_bg.jpg";
import RoomImg from "../images/exp/room.jpg";
import FloorAct from "../images/exp/party.jpg";
import Therapy from "../images/exp/BG_2.jpg";
import Highlight from "../images/exp/bg.jpg";
import FacOneBg from "../images/exp/room_dining.jpg";
import FacOneBgSec from "../images/exp/room_spa.jpg";
import HighlightSecond from "../images/exp/bg_3.jpg";
import Para from "../elements/Para";

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
background-image: url(${Image}) ;
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

const HighlightSection = styled.div`
    background: url(${Highlight});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;
const HighlightSectionSecond = styled.div`
    background: url(${HighlightSecond});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;
const FacOne = styled.div`
    height:225px;
    background:url('${FacOneBg}');
    background-position: center center;
    background-size:cover
`;
const FacSec = styled.div`
    height:225px;
    background:url('${FacOneBgSec}');
    background-position: center center;
    background-size:cover
`;


function Expreince() {
    return (
        <Layout>
            <SEO
                title="About"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <BannerWrapper className="flex flex-wrap p-5 banner_section relative">
                <h1 className="w-full text-4xl leading-loose text-sukoon"><span>Don't Just Stay,</span><br />Live Here</h1>
                <Para className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa inventore ipsum!</Para>
            </BannerWrapper>

            <div className="px-5 my-5">
                <Title subHeading="Tour" titleLight="Experience " titleBold="Sukoon" />
                <h3 className="mt-3 mb-1 text-sukoon">Let's Take a Tour   </h3>
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Para>
                </div>
            </div>
            <div className="facilities Exp px-5 my-1">
            <details className= "mb-3"> 
                <summary className="border-gray-700"><h2 className="text-xl text-left text-sukoon leading-none">Suite Room</h2></summary>
              <div className="">
                  <img className="mt-3 mb-4" src={RoomImg} alt=""/>
                  <span>Rooms</span>
                  <h3 className="mt-2 mb-1">Suite Room</h3>
                  <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                  <ul className="roomFeatures flex overflow-x-scroll w-full">
                      <li className="mr-3 mt-3 mb-3 ">Wifi</li>
                      <li className="mr-3 mt-3 mb-3">Kitchen</li>
                      <li className="mr-3 mt-3 mb-3">Single</li>
                      <li className="mr-3 mt-3 mb-3">Bed</li>
                      <li className="mr-3 mt-3 mb-3">TV</li>
                      <li className="mr-3 mt-3 mb-3">AC</li>
                  </ul>
                </div>
              </div>
              </details>
                <details className= "mb-3">
                    <summary className="border-gray-700"><h2 className="text-xl text-left text-sukoon leading-none">Deluxe Room</h2></summary>
                    <div className="">
                        <img className="mt-3 mb-4" src={RoomImg} alt=""/>
                        <span>Rooms</span>
                        <h3 className="mt-2 mb-1">Deluxe Room</h3>
                        <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                        <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                            <ul className="roomFeatures flex overflow-x-scroll w-full">
                                <li className="mr-3 mt-3 mb-3 ">Wifi</li>
                                <li className="mr-3 mt-3 mb-3">Kitchen</li>
                                <li className="mr-3 mt-3 mb-3">Single</li>
                                <li className="mr-3 mt-3 mb-3">Bed</li>
                                <li className="mr-3 mt-3 mb-3">TV</li>
                                <li className="mr-3 mt-3 mb-3">AC</li>
                            </ul>
                        </div>
                    </div>
                </details>
                <details className= "mb-3">
                    <summary className="border-gray-700"><h2 className="text-xl text-left text-sukoon leading-none">Intensive Care Unit</h2></summary>
                    <div className="">
                        <img className="mt-3 mb-4" src={RoomImg} alt=""/>
                        <span>Rooms</span>
                        <h3 className="mt-2 mb-1">Intensive Care Unit</h3>
                        <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                        <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                            <ul className="roomFeatures flex overflow-x-scroll w-full">
                                <li className="mr-3 mt-3 mb-3 ">Wifi</li>
                                <li className="mr-3 mt-3 mb-3">Kitchen</li>
                                <li className="mr-3 mt-3 mb-3">Single</li>
                                <li className="mr-3 mt-3 mb-3">Bed</li>
                                <li className="mr-3 mt-3 mb-3">TV</li>
                                <li className="mr-3 mt-3 mb-3">AC</li>
                            </ul>
                        </div>
                    </div>
                </details>
            </div>
            <div className="facilities Perfloor px-5 my-5">
            <span className="facilities Exp mb-2 block">Activity Per Floor</span>
            <details open className= "mb-3 border-white p-0">
                <summary className="border-gray-700"><h2 className="text-2xl text-left text-sukoon leading-none">Lounge</h2></summary>
              <div className="">
                  <img className="mt-3 mb-4" src={FloorAct} alt=""/>
                  <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
              </div>
              </details>
                <details className= "mb-3 border-white p-0">
                    <summary className="border-gray-700"><h2 className="text-2xl text-left text-sukoon leading-none">Nursing Station</h2></summary>
                    <div className="">
                        <img className="mt-3 mb-4" src={FloorAct} alt=""/>
                        <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Para>
                    </div>
                </details>
              <button className="globe_btn enquiry block"><a>Enquiry</a></button>
            </div>
            <HighlightSection className="highlightSection px-5 py-5 mt-5">
                <div className="highlight">
                    <span className="text-sukoon ">Nurse To Patient Ratio</span>
                    <h2 className="mb-2">1:1 (One Person One Nurse)</h2>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Para>
                </div>
            </HighlightSection>

            <div className="px-5 my-5 mt-20">
                <span>ClinicaL Programs</span>
                <div className="">
                    <h2 className="text-left text-sukoon leading-none">Fitness Therapy</h2>
                    <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                        <ul className="patient_services_nav flex overflow-x-scroll">
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Virtual Therapy</button>
                            </li>
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Immersive Therapy Programs</button>
                            </li>
                        </ul>
                    </div>
                    <img className="mt-3 mb-4" src={Therapy} alt=""/>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt exercitationem omnis.</Para>
                </div>
            </div>
            <HighlightSectionSecond className="highlightSection second px-5 py-5 mt-5 mb-24">
                <div className="highlight">
                    <span className="text-sukoon ">Patient Care</span>
                    <h2 className="mb-2">Doctor Visit Twice Daily</h2>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Para>
                </div>
            </HighlightSectionSecond>
            <div className="extra_facilities">
                <div className="facOneSec relative z-10">
                    <FacOne className="w-full"></FacOne>
                    <div className="details">
                    <h2 className="text-sukoon">Room Dining</h2>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
                    </div>
                </div>
                <div className="facSecSec relative">
                    <FacSec className="w-full"></FacSec>
                    <div className="details">
                    <h2 className="text-sukoon">Room Spa</h2>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Para>
                    </div>
                </div>
            </div>


        </Layout>
    );
}

export default Experience;
