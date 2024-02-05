import React from "react";
import Tests from "./components/Tests";
import LargeCard from "./components/LargeCard";
import Contact from "./Contact.js";
import WhySkinLine from "./WhySkinLine.js";

function Main(props) {
  return (
    <>

      <LargeCard load={props.load}/>
      <Tests load={props.load}/>
      <WhySkinLine/>
      <Contact/>
    </>
  );
}

export default Main;
