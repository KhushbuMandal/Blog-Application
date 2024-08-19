
import * as React from "react"
import { Link } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export function Contact() {

  const [user , setUser] = useState({
    username: "",
    email: "",
    message: "",
  });


  const handleInput = (event) => {
    console.log(event);
    let name = event.target.name;
    let value = event.target.value;

    setUser({
      ...user,
      [name ]: value,
    })
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log(user);
  }



  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <Card className="w-[350px] card-color" >
            <CardHeader>
              <CardTitle className="text-white">Get in Touch with Us</CardTitle>
              <CardDescription>Have any question or want to contact us.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
            <CardContent>
              
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input 
                    id="name" 
                    type="text"
                    name="username"
                    placeholder="Enter your name..." 
                    className="bg-black text-white" 
                    value={user.username}
                    onChange={handleInput}
                    required/>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input 
                    id="email" 
                    type="email" 
                    name="email"
                    placeholder="Enter your email..." className="bg-black text-white" 
                    value={user.email}
                    onChange={handleInput}
                    required/>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea 
                    id="message" 
                    type="text" 
                    name="message"
                    placeholder="Enter your message..." className="bg-black text-white rounded-md"
                    value={user.message}
                    onChange={handleInput}
                    required
                    rows={6}></Textarea>
                  </div>
                </div>
              
              </CardContent>
              
            <CardFooter className="flex justify-between">
              <Button type="submit" className="bg-black">Send</Button>
            </CardFooter>
            </form>
            
          </Card>
          
        </div>
      </div>
    </>
  )
}

