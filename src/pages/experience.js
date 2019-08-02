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
                <Title subHeading="Tour" titleLight="Experience " titleBold="Sukoon" />
                <h3>Let's Take a Tour   </h3>
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                </div>
            </div>
            <div className="facilities px-5 my-5">
            <details className= "mb-3"> 
                <summary className="border-gray-700"><h2 className="text-2xl text-left text-sukoon leading-none">Suite Room</h2></summary>
              <div className="">
                  <span>Rooms</span>
                  <h3>Suite Room</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                  <ul className="flex overflow-x-scroll w-full">
                      <li className="mr-3 mt-3">Wifi</li>
                      <li className="mr-3 mt-3">Kitchen</li>
                      <li className="mr-3 mt-3">Single</li>
                      <li className="mr-3 mt-3">Bed</li>
                      <li className="mr-3 mt-3">TV</li>   
                      <li className="mr-3 mt-3">AC</li>
                  </ul>
                </div>
              </div>
              </details>
            </div>
            <div className="facilities px-5 my-5">
            <span>Rooms</span>
            <details className= "mb-3"> 
                <summary className="border-gray-700"><h2 className="text-2xl text-left text-sukoon leading-none">Lounge</h2></summary>
              <div className="">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              </details>
              <button className="Enquiry"></button>
            </div>
            <div className="hightlightSection">
                <div className="">
                    <span>Nurse To Patient Ratio</span>
                    <h2>1:1 (One Person One Nurse)</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                </div>
            </div>

            <div className="px-5 my-5">
                <span>ClinicaL Programs</span>
                <div className="">
                    <h2 className="text-2xl text-left text-sukoon leading-none">Fitness Therapy</h2>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt exercitationem omnis.</p>
                </div>
            </div>
            <div className="hightlightSection">
                <div className="">
                    <span>Patient Care</span>
                    <h2>Doctor Visit Twice Daily</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                </div>
            </div>
            <div class="" style="position:relative">
                <div class="">
                <div style="width:100%; height:225px;background:yellow;"></div>
                    <p style="background:red; padding:10px;margin:-25px 15px 0px 15px;height:110px;">jhsdvjhsd jhsdjhsdhs jhsh sjh s chsc jhs jhs sjhc hs </p>
                </div>
                <div class="">
                <div style="width:100%; height:225px;background:blue"></div>
                    <p style="background:green; padding:10px;margin:-25px 15px 0px 15px;height:110px;">jhsdvjhsd jhsdjhsdhs jhsh sjh s chsc jhs jhs sjhc hs </p>
                </div>
            </div>


        </Layout>
    );
}

export default Services;
