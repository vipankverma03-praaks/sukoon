import React, {useState} from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../elements/Heading";
import Para from "../elements/Para";

import styled from "styled-components";

import Image from "../../static/service_bg.jpg";
import Yoga from  "../images/yoga-pics/yoga.jpg";
import Rooms from "../images/rooms/rooms.jpg";
import Chambers from "../images/chambers/consulting-chambers.jpg";
import Banner from "../components/Banner";
import BannerBg from "../images/servicesBg.png";
import Details from "../elements/Details";


const TabList = styled.ul`
    
    li{
    margin-left: 2px ;
    }
    button:focus{
      outline: none;
    }
    .active{
      background: #12444a;
      color: #fff;
    }
    
    .passive{
      background: #f0f8f4;
    }
`;

const Content = (props) =>{
  return(
      <div>
          <div className="w-full">
              <img src={Yoga} alt="Sukoon yoga"/>
          </div>
          <Para wrapperClass="px-5" width="88%">Hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Para>
      </div>
  )
};

function InfrastructurePage() {
    const[overlay, setOverlay] = useState(false);

    return (
        <Layout setOverlay={setOverlay}>
            <SEO
                title="About"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <Banner backgroundImg={BannerBg}/>
            <section className="p-4">
                <Title subHeading="Tour" titleLight="1500 " titleBold="Sq. Feet" />
                <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged</Para>
                </div>
            </section>
            <section className="py-4">
                <span className="px-5 text-sukoon">OPD</span>
                <div className="">
                    <h2 className="px-5 text-2xl text-left text-sukoon leading-none">Consulting Chambers</h2>
                    <div className="px-5 flex flex-wrap overflow-x-hidden overflow-y-hidden">
                        <ul className="patient_services_nav flex overflow-x-scroll">
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 w-48 text-left">Consulting Chambers</button>
                            </li>
                            <li className="mr-3 mt-3">
                                <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 w-48 text-left">Pharmacy</button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <img src={Chambers} alt="Sukoon Consulting Chambers"/>
                    </div>
                    <Para wrapperClass="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt exercitationem omnis.</Para>
                </div>
            </section>
            <section className="py-4">
                <Details content={Content} summary="Fitness Studio"/>
                <Details content={Content} summary="Art Studio"/>
                <Details content={Content} summary="Terrace Garden"/>
            </section>
            <section className="py-4">
                <span className="text-sukoon px-5">IPD</span>
                <div className="">
                    <h2 className="text-2xl px-5 text-left text-sukoon leading-none">Movie Lounge</h2>
                    <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
                        <TabList className="patient_services_nav flex overflow-x-scroll">
                            <li className="mt-3">
                                <button className="bg-white active text-sm hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 w-fit text-left">Rooms</button>
                            </li>
                            <li className="mt-3">
                                <button className="bg-white text-sm passive hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 w-fit text-left">ICU</button>
                            </li>
                            <li className="mt-3">
                                <button className="bg-white text-sm passive hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 w-fit text-left">Lounge</button>
                            </li>
                            <li className="mt-3">
                                <button className="bg-white text-sm passive hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 w-fit text-left">Dummy</button>
                            </li>
                            <li className="mt-3">
                                <button className="bg-white text-sm passive hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 w-fit text-left">Lorem</button>
                            </li>
                            <li className="mt-3">
                                <button className="bg-white text-sm passive hover:bg-gray-100 text-gray-800 font-medium py-2 w-fit px-4 text-left">Ipsum</button>
                            </li>
                        </TabList>
                    </div>
                    <div>
                        <div className="w-full">
                            <img src={Rooms} alt="Sukoon rooms"/>
                        </div>
                        <Para wrapperClass="px-5">Hi Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Para>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default InfrastructurePage;
