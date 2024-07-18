import React from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
// import PhoneOutlined from '@ant-design/icons';
// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const Screen = () => {
  return (
    <div className="">
      <p className="bgbox">
      <h5 className="p1">
        Welcome
      </h5>
      <h1 className="p2">
        Best Learning<br />
        Opportunities
      </h1>
      <h4 className="p3">
        Our goal is to make online<br />
        education work for everyone
      </h4>
      <p className="pb1">
        <Button sx={{
          backgroundColor: 'rgb(150, 187, 124)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgb(130, 167, 104)',
          },
          fontFamily: 'Arial'
          
        }} variant="contained"
          size="larg" >JOIN US </Button>
        {" "}
        <Button sx={{
          backgroundColor: 'rgb(255, 242, 243)',
          color: 'rgb(150, 187, 124)',
          borderColor: 'rgb(150, 187, 124)'
        }}
          variant="outlined" >Learn More</Button>
      </p>
      <p >
        <img src="/image/hero-cover-1.png" alt="hero" className="pic1 "></img>
      </p>
      </p>
      {/* ----------------------------------------------------------------------------------------------------------------------- */}


    </div>

  )
}
export default Screen;