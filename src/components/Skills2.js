import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./Photo";
import './Skills.css';



function Skills2 (props){
  return(
    <Gallery photos={photos} direction={"column"} columns={5} />

  );
};

export default Skills2;