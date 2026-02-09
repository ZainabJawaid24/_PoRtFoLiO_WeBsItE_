import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import profile from './assets/profilepic.jpeg';
import './App.css';

function App() {
  return (
    <>
    {/* navbar section */}
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 nav-bar">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">M.Anas Memon</span>
          </a>
          <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none btn1">Contact</button>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary nav-font">
              <li>
                <a href="#home" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 nav-text" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-text">About</a>
              </li>
              <li>
                <a href="#services" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-text">Services</a>
              </li>
              <li>
                <a href="#projects" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-text">Projects</a>
              </li>
              <li>
                <a href="#testimonials" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-text">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section id='home' className="text-gray-600 body-font">
        <div className="container mx-auto max-w-7xl flex px-5 py-24 md:flex-row flex-col items-center justify-between gap-16">
          <div className="md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium hero-text text-white fade-slide">M.Anas Memon -
              <br className="hidden lg:inline-block" /><span className='text-green-900'>Growth Marketing Expert</span>
            </h1>
            <p className="mb-8 leading-relaxed fade-slide">Driving growth with paid ads, high-converting creatives & simple funnels — 100+ campaigns launched with avg 3.5x ROAS</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg btn2">Hire Me</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg btn3">Get in Touch</button>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <img className="object-cover object-center rounded profile" alt="hero" src={profile} />
          </div>
        </div>

      </section>
      <section className="text-gray-300 body-font w-full">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full zoom-fade">
              <div className="px-4 py-6 rounded-xl bg-neutral-900/60 border border-neutral-800
                       backdrop-blur-sm hover:-translate-y-1 hover:border-green-900
                       transition-all duration-300">
                <h2 className="title-font font-semibold text-3xl text-green-900">Expertise</h2>
                <p className="leading-relaxed text-gray-400">Meta Ads - Google Ads 
                  <br />- Tiktok Ads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full zoom-fade">
              <div className="px-4 py-6 rounded-xl bg-neutral-900/60 border border-neutral-800
                       backdrop-blur-sm hover:-translate-y-1 hover:border-green-900
                       transition-all duration-300">
                <h2 className="title-font font-semibold text-3xl text-green-900">Platforms</h2>
                <p className="leading-relaxed text-gray-400">Shopify -
                  <br /> Landing Pages</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full zoom-fade">
              <div className="px-4 py-6 rounded-xl bg-neutral-900/60 border border-neutral-800
                       backdrop-blur-sm hover:-translate-y-1 hover:border-green-900
                       transition-all duration-300">
                <h2 className="title-font font-semibold text-3xl text-green-900">Goals</h2>
                <p className="leading-relaxed text-gray-400">ROAS - Leads 
                  <br />- Growth</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full zoom-fade">
              <div className="px-4 py-6 rounded-xl bg-neutral-900/60 border border-neutral-800
                       backdrop-blur-sm hover:-translate-y-1 hover:border-green-900
                       transition-all duration-300">
                <h2 className="title-font font-semibold text-3xl text-green-900">Location</h2>
                <p className="leading-relaxed text-gray-400">Pakistan -
                  <br /> Remote</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* about section */}
<section id='about' className="text-gray-600 body-font">
  <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-900 zoom-fade">About Me</h1>
      <p className="leading-relaxed text-base text-gray-400 zoom-fade">
        I’m a Growth Marketing Expert specializing in data-driven paid advertising. I help brands scale profitably through Meta Ads, Google Ads, and Snapchat Ads by focusing on performance, conversions, and sustainable growth.
         </p>
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12 zoom-fade">
      <h2 className="title-font font-semibold text-green-900 tracking-wider text-2xl mb-3">SKILLS</h2>
      <nav className="flex flex-wrap list-none -mb-1">
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-400">Meta Ads</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-400">Google Ads</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-400">Tiktok Ads</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-400">ROAS</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-400">Leads</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-400">Growth</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-400">Shopify</a>
        </li>
        <li className="lg:w-1/3 mb-1 w-1/2">
          <a className="text-gray-400">Landing Page</a>
        </li>
      </nav>
    </div>
  </div>
</section>

{/* services sections */}
<section id='services' className="text-gray-600 body-font">
   <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-900 zoom-fade text-center services">Services</h1>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-black pointer-events-none"></div>
      </div>
      <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-900 text-gray-400 relative z-10 title-font font-medium text-sm">1</div>
      <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="shrink-0 w-24 h-24 bg-black text-green-900 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div className="grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-green-900 mb-1 text-xl">Website Development</h2>
          <p className="leading-relaxed"> Stunning, high-performance websites tailored to your needs.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-black pointer-events-none"></div>
      </div>
      <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-900 text-gray-400 relative z-10 title-font font-medium text-sm">2</div>
      <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="shrink-0 w-24 h-24 bg-black text-green-900 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-green-900 mb-1 text-xl"> Social Media Management</h2>
          <p className="leading-relaxed">Grow your audience with engaging content and strategic management.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-black pointer-events-none"></div>
      </div>
      <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-900 text-gray-400 relative z-10 title-font font-medium text-sm">3</div>
      <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="shrink-0 w-24 h-24 bg-black text-green-900 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div className="grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-green-900 mb-1 text-xl">Social Media Marketing</h2>
          <p className="leading-relaxed">Targeted campaigns to increase reach, engagement, and sales.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-black pointer-events-none"></div>
      </div>
      <div className="shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-900 text-gray-400 relative z-10 title-font font-medium text-sm">4</div>
      <div className="grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="shrink-0 w-24 h-24 bg-black text-green-900 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-green-900 mb-1 text-xl">Digital Marketing</h2>
          <p className="leading-relaxed">Proven strategies to enhance visibility and drive revenue.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default App
