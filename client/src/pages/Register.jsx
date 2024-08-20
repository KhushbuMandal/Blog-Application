
import * as React from "react"
import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

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

export function Register() {

  const [user , setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  const handleInput = (event) => {
    console.log(event);
    let name = event.target.name;
    let value = event.target.value;

    setUser({
      ...user,
      [name ]: value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://localhost:3000/api/user/register` , {
        method:"POST",
        headers :{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });
  
      console.log(response)

      if (response.ok){

        setUser({
          username : "",
          email : "",
          phone : "",
          password : "",
        })
        alert("Registration Sucessfull !!!");
        navigate("/login");
      }  
    } catch (error) {
      console.log("Registration Error" , error);
    }
  }



  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <Card className="w-[350px] card-color" >
            <CardHeader>
              <CardTitle className="text-white">Create your account</CardTitle>
              <CardDescription>Start your blogging journey with us.</CardDescription>
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
                    <Label htmlFor="password" className="text-white">Password</Label>
                    <Input 
                    id="password" 
                    type="password" 
                    name="password"
                    placeholder="Enter your password..." className="bg-black text-white "
                    value={user.password}
                    onChange={handleInput}
                    required/>
                  </div>
                </div>
              
              </CardContent>
              
            <CardFooter className="flex justify-between">
              <Button type="submit" className="bg-black">Register</Button>
            </CardFooter>
            </form>
            
          </Card>
          <div className="text-center text-sm text-muted-foreground mt-4 text-white">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline text-gray-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

