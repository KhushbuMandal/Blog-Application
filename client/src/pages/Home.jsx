import React from 'react'
import Navbar from '../_components/Navbar'
import { Button } from "@/components/ui/button"


function Home() {
  return (
    <>
    <Button className="bg-red-500">Click me</Button>
    <Navbar/>
    <h1>Home</h1>
    </>
  )
}

export default Home