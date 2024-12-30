import AuthoreCard from "@/components/AuthoreCard";
import Mega from "@/components/Mega"
import Feature from "@/components/Feature";
import Contact from "./Contact/page";
import React from "react";

export default function Home() {
  return (
    <div>
      <Feature/>
      <AuthoreCard />
      <Mega/>
      <Contact/>
     
    </div>  );
    
}
