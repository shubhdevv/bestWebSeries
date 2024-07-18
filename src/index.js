import React from 'react'
import ReactDOM from 'react-dom' 
import Card from "./Card"
import "./index.css"
import Sdata from "./Sdata"


ReactDOM.render ( 
  <>
<h1 className = "heading_style">List of my Top 5 Netflix Series</h1>
    {Sdata.map((val) => {
      return (
        <Card imgsrc={val.imgscr}
  title={val.title}
  sname={val.sname}
  link ={val.link}
/>
      );
    })}
</>,
  document.getElementById('root') 
);   