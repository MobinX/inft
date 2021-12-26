import Head from "next/head";
import Image from "next/image";
import headerImg from "./assets/header-img.jpg";
import abstractWave from "./assets/abstractWave.jpg";
import whiteEgg from "./assets/whiteegg.jpg";
import pinkEgg from "./assets/pinkEgg.jpg";

import { Avatar, name } from "react-lorem-ipsum";
import { Animate } from "../components/Animate";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = ({ children, className }) => {
  return (
    <div className="relative min-h-screen min-w-full  bg-gray-800  ">
      <div className="bg-circles top-1/4 left-1/4"></div>
      <div className="bg-circles w-5 h-5 top-1/2 left-1/4"></div>
      <div className="bg-circles w-6 h-6 top-1/3 right-1/2"></div>
      <main
        className={`absolute inset-0 min-h-screen min-w-full bg-white-1 blur-xl  ${className}`}
      >
        {children}
      </main>
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Main className="col min-h-screen min-w-full p-0">
      {/* navbar */}
      <div className="">
        {/* app_name */}
        <div className="">DOMPIT</div>
        {/* actions */}
        <div className="">
          <p>About us</p>
          <p>Services</p>
          <p>Package</p>
          <p>Help</p>
          <p>Ico</p>
        </div>
      </div>

      {/* header */}
      <div className="">
        <h1 className="">Solution for your Payment Apps</h1>
        <p>
          Dompit is dinancial application that can help you to manage your
          finances. with your dompit you can schedule regular payment and all
          branactions will be recorded in detail.
        </p>
        <div className="">Download Now</div>
        <Image src="" alt="Product desc"/>
        <p className="">Supported by</p>
        {/* brandicons */}
        <div className="">
          <Image src="" alt="GPAy" />
          <Image src="" alt="PAypal" />
          <Image src="" alt="visa" />
          <Image src="" alt="mastercard" />
          <Image src="" alt="mentro" />
          <Image src="" alt="apple pay" />
        </div>
      </div>

      {/* features */}
      <div className="">
        {/* col1 */}
        <div className="">
          <h1 className="">Our Features</h1>
          <p className="">
            {" "}
            we havew 4 main features or randomised words which dont lock even
            slightly focused
          </p>
          <Image src="" alt="Luxury computer pic" />
        </div>
        {/* col3 - cards */}
        <div className="">
          <div className="">
            <Image src="" alt="icon" />
            <h1 className="">Schedulling</h1>
            <p className="">
              This system highly help you to schedule your all payment that
              checkout time to time.Dont be panicked for payment anymore
            </p>
          </div>
        </div>
        {/* app desc */}
        <div className="">
          <Image src="" alt="App page" />
          <div className="">
            <h1 className="">Pay Smartly on your Phone</h1>
            <p className="">
              Get immidiatly the Dompet Application for your Phone at
            </p>
            {/* col2 */}
            <div className="">
              <Image src="" alt="Get on AppSotre" />
              <Image src="" alt="Get on play shore" />
            </div>
          </div>
        </div>
      </div>
      {/* reviews */}
      <div className="">
        <div className="">
          <h1 className="">What People Say</h1>
          <p> we have 3 main features</p>
        </div>
        <div className="">
        <Image src="" alt="avatar"/>
        <div className="">
          <h1 className="">MC. Ronaldo</h1>
          <p className="">Ecommerce Expert at <a className="no-underline">commecrme.com</a></p>
          <p className="">Just a amaizing app. It helps me maintaining my payments efficiently .Now I can save more time before and thus it also help me to save more money and get profited </p>
        </div>
        </div>
      </div>
    </Main>
  );
}
