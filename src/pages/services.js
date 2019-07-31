import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";

import Para from "../elements/Para"
import styled from "styled-components";
import image from "../../static/service_bg.jpg";

import Slider from "react-slick";
import Physician from "../images/physician_retail_web_2019-07-29/physician_retail_web@3x.jpg"

// Import slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const CarouselParenWrapper = styled.div`
  text-align: center;
  
  h2{
  display: none;
   font-size: 12px;
  }
  p{
  display: none;
  font-size: 11px;
  }
`;

const CarouselImgWrapper = styled.div`
  width: 33vw;
  height: 29vw;
  position: relative;
  
  > img{
    opacity: 0.71;
    margin: 10px 0;
    object-fit: cover;
    height: 100%;
  }
`;

const Ovarlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.31);
`;


const MeetExpertsCarousel = () =>{
    const settings = {
        slidesToScroll: 5,
        arrow:true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "1rem",
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return(
        <div>
            <Slider {...settings}>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
                <CarouselParenWrapper>
                    <CarouselImgWrapper className="CarouselImgWrapper">
                        <Ovarlay className="ovarlay"/>
                        <img src={Physician} className="w-auto opacity-1" alt="Physician" />
                    </CarouselImgWrapper>
                    <h2 className="mt-2 text-sukoon text-sm font-bold">Sandra G. Boodman</h2>
                    <p className="text-gray-700 text-xs">Lorem Ipsum dummy text</p>
                </CarouselParenWrapper>
            </Slider>
        </div>
    )
};

const MeetExperts = (props) => {
    return (
        <section id="meet-experts" className="p-6 relative">
            <Title titleLight="Meet" titleBold="Experts"/>
            <Para width="100%" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s" />
            <MeetExpertsCarousel />
        </section>
    )
};

const ServiceType = styled.div`
  height: 90vw;
`


function Services() {
    return (
        <Layout>
            <SEO
                title="About"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <BannerWrapper className="flex flex-wrap p-5 banner_section relative">
                <h1 className="w-full text-4xl leading-loose text-sukoon"><span>Don't Just Stay,</span><br/>Live Here
                </h1>
                <Para width="100%" className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa
                    inventore ipsum!</Para>
            </BannerWrapper>
            <section id="in-patient-services" className="px-5 my-5">
                <Title titleLight="In Patient" titleBold="Care Services" display="block"/>
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                    <ul className="patient_services_nav flex overflow-x-scroll">
                        <li className="mr-3 mt-3">
                            <button
                                class="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Acute
                                Psychiatry Care Intensive Care Unit
                            </button>
                        </li>
                        <li className="mr-3 mt-3">
                            <button
                                className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Acute
                                Alcohol, Drug, And Habit De-addiction Programs
                            </button>
                        </li>
                    </ul>
                    <ServiceType className="service_content my-4 overflow-y-scroll overflow-x-hidden text-justify">
                        <h2 className="text-2xl text-left text-sukoon leading-none">Acute Psychiatry Services</h2>
                        <Para>Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                            crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than
                            42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services
                            staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by
                            Hennepin County funds and state grants, provides these services to any person in need.</Para>
                        <br/>
                        <h2 className="text-2xl text-sukoon font-semibold">Service</h2>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                            veritatis.</Para>
                        <br/>
                        <h2 className="text-2xl text-sukoon font-semibold">Our Treatment Team</h2>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                            veritatis.</Para>
                        <br/>
                        <h2 className="text-2xl text-sukoon font-semibold">Treatment Goal</h2>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                            veritatis.</Para>
                    </ServiceType>
                </div>
            </section>
            <section id="out-patient-services" className="px-5 my-5">
                <Title titleLight="Out Patient" titleBold="Care Services" display="block"/>
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                    <ul className="patient_services_nav flex overflow-x-scroll">
                        <li className="mr-3 mt-3">
                            <button
                                className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Acute
                                Psychiatry Care Intensive Care Unit
                            </button>
                        </li>
                        <li className="mr-3 mt-3">
                            <button
                                className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-2 w-48 text-left">Acute
                                Alcohol, Drug, And Habit De-addiction Programs
                            </button>
                        </li>
                    </ul>
                    <ServiceType className="service_content my-4 overflow-y-scroll overflow-x-hidden text-justify">
                        <h2 className="text-2xl text-left text-sukoon leading-none">Acute Psychiatry Services</h2>
                        <Para>Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                            crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than
                            42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services
                            staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by
                            Hennepin County funds and state grants, provides these services to any person in need.</Para>
                        <br/>
                        <h2 className="text-2xl text-sukoon font-semibold">Service</h2>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                            veritatis.</Para>
                        <br/>
                        <h2 className="text-2xl text-sukoon font-semibold">Our Treatment Team</h2>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                            veritatis.</Para>
                        <br/>
                        <h2 className="text-2xl text-sukoon font-semibold">Treatment Goal</h2>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus magni sapiente
                            veritatis.</Para>
                    </ServiceType>
                </div>
            </section>
            <MeetExperts/>
        </Layout>
    );
}

export default Services;
