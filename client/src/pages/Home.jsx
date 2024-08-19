import React from 'react'
import { Link } from "react-router-dom";
import designerImage from "../assets/girl.jpg"
import friendship from "../assets/sunset.jpg";
import sky from "../assets/sky.jpg";
import baker from "../assets/baker.jpeg"
import memories from "../assets/memories.png"
import people from "../assets/people.jpg"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

function Home() {
  return (
    <>
    <div>
      <div >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100 p-6 md:p-12 min-h-[550px] home-top-color md:gap-8 lg:gap-20">
   
          <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="text-sm font-semibold text-gray-600">WEBSITES &gt; BLOGS</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 my-4">Create your Blog</h1>
              <p className="text-gray-600 mb-6">
                  Share your story with the world. Create a beautiful, personalized blog that fits your brand. Grow your
                  audience and transform your passion into beautiful story.
              </p>
              <Link to="/register" className="px-6 py-3 custom-button  text-black font-semibold rounded-lg border  hover:bg-gray-200 transition-all">
                  GET STARTED
              </Link>
          </div>

        
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img src={designerImage} alt="Blog preview" className="w-[700px]"/>
          </div>  
      </div>

      {/*  */}
      <div className="style-red text-white p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Promote your blog</h2>
          <p className="text-center mb-12">
          Immerse yourself in creativity with book reviews, poetry, and artistic musings.
          </p>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" bg-slate-300 text-black rounded-lg p-6">
              <img src={friendship} alt="SEO Promotion" className="mb-4 rounded-lg h-[350px] w-full" />
              <h3 className="text-xl font-semibold mb-2">Creative Escapes</h3>
              <p>Bring your vision to life.Immerse yourself in creativity with book reviews, poetry, and artistic musings.</p>
            </div>
            <div className="bg-slate-300 text-black rounded-lg p-6">
              <img src={sky} alt="Blog Layout" className="mb-4 rounded-lg h-[350px] w-full" />
              <h3 className="text-xl font-semibold mb-2">Mindful Moments</h3>
              <p>Share personal anecdotes and encourage readers to appreciate the little things.</p>
            </div>
          </div>
        </div>
      </div>



      <div className="relative w-full max-w-6xl mx-auto mt-20 mb-20">
      <Carousel className="rounded-lg overflow-hidden" opts={{ direction: "vertical", loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={baker}
                  width={600}
                  height={400}
                  alt="Slide 1"
                  className="w-full h-auto rounded-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Discover Your Niche</h3>
                <p className="text-muted-foreground">
                Every blog post has to start somewhere, and so does every journey. Join us as we share your first steps, the hurdles that faced, and the resources that guide you.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-medium text-gray-500 hover:text-primary/80"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={memories}
                  width={600}
                  height={400}
                  alt="Slide 2"
                  className="w-full h-auto rounded-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Hang onto your memories</h3>
                <p className="text-muted-foreground">
                Save the moments that matter, capturing the essence of life most precious experiences. Whether it’s a fleeting smile, a heartfelt conversation, or a breathtaking view, these memories deserve to be cherished and remembered forever.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-medium text-slate-500 hover:text-primary/80"
                  prefetch={false}
                >
                  Explore Now
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={people}
                  width={600}
                  height={400}
                  alt="Slide 3"
                  className="w-full h-auto rounded-lg"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Join millions of others</h3>
                <p className="text-muted-foreground">
                Whether sharing your expertise, breaking news, or whatever is on your mind, you are in good company on Blogger. Sign up to discover why millions of people have published their passions here.
                </p>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 font-medium text-slate-500 hover:text-primary/80"
                  prefetch={false}
                >
                  Get Started
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-1/2 -translate-x-1/2 top-4 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 transition-colors">
          <ChevronUpIcon className="w-6 h-6 text-primary" />
        </CarouselPrevious>
        <CarouselNext className="absolute left-1/2 -translate-x-1/2 bottom-4 z-10 bg-background/50 hover:bg-background/75 rounded-full p-2 transition-colors">
          <ChevronDownIcon className="w-6 h-6 text-primary" />
        </CarouselNext>
      </Carousel>
    </div>

    </div>
    </>
  )
}

export default Home

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}