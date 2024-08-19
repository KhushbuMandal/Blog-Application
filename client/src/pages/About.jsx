import React from 'react'
import { Link } from "react-router-dom";
import cafe from "../assets/cafe.webp"



function About() {
  return (
    <>
    <div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-black p-6 md:p-12 min-h-[550px]  md:gap-8 lg:gap-20">

          {/* <div className="relative  mt-20 mb-20">
          <Carousel className="rounded-lg overflow-hidden" opts={{ direction: "vertical", loop: true }}>
            <CarouselContent >
            <CarouselItem >

            </CarouselItem > 
            </CarouselContent>
          </Carousel> */}

              
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img src={cafe} alt="Blog preview" className="w-[700px]"/>
          </div>  
            
            
   
          <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="text-sm font-semibold text-gray-600">WEBSITES &gt; BLOGS</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white my-4">About Us</h1>
              <p className="text-gray-600 mb-6">
              At our website, we believe that every story deserves to be told. Our journey began with a simple idea: to create a space where thoughts, ideas, and experiences could be shared with the world. Whether you’re a seasoned blogger or just starting out, our mission is to inspire, educate, and connect with readers from all walks of life.
              </p>
              
          </div>

        
           
      </div>


      {/*  */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What make us different !!!</h2>
      <h3 className='text-center mb-20  text-gray-600 m-12'>What began as a small blog has grown into a vibrant community of writers and readers who share a love for storytelling. Our team is dedicated to bringing you high-quality content that is both informative and engaging.Our mission is to empower individuals to share their stories and make their voices heard. We believe that everyone has something valuable to contribute, and we strive to provide a platform where diverse perspectives can flourish.</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Expert Customer Care</h2>
      <p className="text-center mb-20 m-12 text-gray-600">
      Need some help with your blog? Reach out to our Customer Support Team via email or live chat. They can help you find the perfect blog post layout, help you find your RSS feed, or help you tackle any other blog-related challenge.    
      </p>
      <p className="text-center mb-20 m-12">
      <Link to="/contact" className="px-6 py-3 custom-button  text-black font-semibold rounded-lg border  hover:bg-gray-200 transition-all">
                  Contact Us
      </Link>
      </p>
    </div>
    </>
  )
}

export default About

