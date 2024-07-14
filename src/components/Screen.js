import React from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import PhoneOutlined from '@ant-design/icons';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const Screen = () => {
  return (
    <div className="bg">
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
      {/* ----------------------------------------------------------------------------------------------------------------------- */}


      <p >
        <img src="/image/fixed-width fixed-height sec-.png" alt='red line' className="s2i"></img>
      </p>
      <p className="s2p1">
        <h2>Approdable Packages</h2>
      </p>
      <p className="s2p2">
        Problems trying to resolve the conflict between<br />
        the two major realms of Classical physics:<br />
        Newtonian mechanics
      </p>



      <p className="s2p3">
        Learn More
        <p className="s2i1">
          < ArrowForwardIosIcon />
        </p>
      </p>
      <box className="box box1">
      </box>
      <p>
        <img src="image/fixed-width sec-.png" alt=" pcimg" className="s2i2" />
        <h5 className="s2p4" >Certified Teacher</h5>
        <img src="/image/fixed-width fixed-height sec-.png" alt="redline" className="s2i3" />
        <p className="s2p5">The gradual<br />accumulation of<br />information about</p>
      </p>
      <p>
        <box className="box box2">
        </box>
        <p>
          <img src="image/fixed-width sec-1.png" alt="img" className="s2i4" />
          <h5 className="s2p6">Expert instruction</h5>
          <img src="/image/fixed-width fixed-height sec-.png" alt="redline" className="s2i5" />
          <p className="s2p7">The gradual<br />accumulation of<br />information about</p>
        </p>
      </p>
      {/* ----------------------------------------------------------------------------------------------------------------------- */}

      <p>
        <img src="/image/col-md-6.png" alt="girl img" className="s3i1" />
        <img src="/image/fixed-width fixed-height sec-.png" alt="redline" className="s3i2" />
        <h2 className="s3p1">Video in Live<br />Action</h2>
        <p className="s3p2">Problems trying to resolve the conflict between<br />the two major realms of Classical physics:<br />Newtonian mechanics</p>
        <p className="s3p3">Learn More </p>
        <p className="s3arr"> > </p>
      </p>

      {/* ----------------------------------------------------------------------------------------------------------------------- */}
      <p>
        <p>

          <h6 className="s4p1">Practice Advice</h6>
          <h2 className="s4p2">Approdable Packages</h2>
          <p className="s4p3">Problems trying to resolve the conflict between<br /> the two major realms of Classical physics; Newtonian mechanics</p>
          <img src="/image/fixed-width.png" alt="img" className="s4i1" />
          <p className="s4p4">2,769 online courses
          </p>
          <img src="/image/Frame 4.png" alt="star" className="s4i6" />
          <h5 className="s4p5">Watch our Courses</h5>
          <p className="s4p6">We focus on ergonomics and<br />meeting you where you work. It's<br />only a keystroke away.</p>
          <p className="s4i9">
            <img src="/image/sales sec-.png" alt="img" className="s4i2" />
            <img src="/image/prices sec-.png" alt="img" className="s4i3" />
            <img src="/image/Frame 1 sec-.png" alt="img" className="s4i4" />
            <img src="/image/button Sm sec-.png" alt="img" className="s4i5" />
          </p>
        </p>
        <img src="/image/fixed-width 2.png" alt="img" className="s4i7" />
        <p className="s4p7">Lifetime access</p>
        <img src="/image/Frame 4.png" alt="star" className="s4i8" />
        <h5 className="s4p8">Our Experts Teacher</h5>

        <p className="s4p9">We focus on ergonomics and<br />meeting you where you work. It's<br />only a keystroke away.</p>
        <img src="/image/sales sec-.png" alt="img" className="s4i10" />
        <img src="/image/prices sec-.png" alt="img" className="s4i11" />
        <img src="/image/Frame 1 sec-.png" alt="img" className="s4i12" />

        <img src="/image/button Sm sec-.png" alt="img" className="s4i13" />
      </p>


      {/* ----------------------------------------------------------------------------------------------------------------------- */}


      <p>
        <h6 className="s5p1">Testimonials</h6>
        <h2 className="s5p2">Watch our Courses</h2>
        <p className="s5p3">Problems trying to resolve the conflict between<br />the two major realms of Classical physics: Newtonian mechanics</p>
        <img src="/image/testimonial-user-cover-1.png" alt="girl pic" className="s5i1"></img>
        <p className="s5p4">Slate helps you see how many more days<br />you need to work to reach your financial<br />goal for the month and year.</p>
        <img src="/image/stars sec-.png" alt="star" className="s5i2" />
        <h5 className="s5p5">Regina Miles</h5>
        <h6 className="s5p6">Designer</h6>
        <img src="/image/testimonial-user-cover-2.png" alt="boy pic" className="s5i3"></img>
        <p className="s5p7">Slate helps you see how many more days<br />you need to work to reach your financial<br />goal for the month and year.</p>
        <img src="/image/stars sec-.png" alt="star" className="s5i4" />
        <h5 className="s5p8">Regina Miles</h5>
        <h6 className="s5p9">Designer</h6>
      </p>
      {/* ----------------------------------------------------------------------------------------------------------------------- */}
      <p >
        <h6 className="s6p1">Team</h6>
        <h2 className="s6p2">Get Quality Education</h2>
        <p className="s6p3">Problems trying to resolve the conflict between<br />the two major realms of Classical physics: Newtonian mechanics</p>
        <img src="/image/col-md-3.png" alt='red line' className="S6i1" />
        <img src="/image/User card.png" alt='red line' className="S6i1" />
        <img src="/image/User card 5.png" alt='red line' className="S6i1" />
        <img src="/image/col-md-3 5.png" alt='red line' className="S6i1" />
      </p>
      {/* ----------------------------------------------------------------------------------------------------------------------- */}
      <p>
        <p className="s7bg">
          <h6 className="s7p1">Newsletter</h6>
          <h3 className="s8p2">Watch our Courses</h3>
          <p className="s7p3">Problems trying to resolve the conflict between</p>
          <p className="s7p4">the two major realms of Classical physics: Newtonian mechanics</p>
          <p className="s7t1">

            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{
              width: '600px', height: '55px', backgroundColor: 'rgb(249, 249, 249)'
            }}
            />
            <Button sx={{ backgroundColor: 'rgb(150, 187, 124)', color: 'white', '&:hover': { backgroundColor: 'rgb(130, 167, 104)', }, }} variant="contained" style={{ width: '110px', height: '55px' }} >
              Subscribe
            </Button>
          </p>
        </p>
        <p className="ab">
          <p className="ap1">
            <h5>Company Info </h5>
            <p className="ppp">About us  </p>
            <p className="ppp">Carrier </p>
            <p className="ppp">We are hiring   </p>
            <p className="ppp"> Blog</p>
          </p>
          <p className="ap2">
            <h5>Legal</h5>
            <p className="ppp">About us  </p>
            <p className="ppp">Carrier </p>
            <p className="ppp">We are hiring   </p>
            <p className="ppp"> Blog</p>
          </p>
          <p className="ap3">
            <h5>Features</h5>
            <p className="ppp">Business Marketing</p>
            <p className="ppp">user Analytic</p>
            <p className="ppp">Live Chat</p>
            <p className="ppp">Unlimited Support</p>
          </p>
          <p className="ap4">
            <h5>Resources</h5>
            <p className="ppp">IOS & Android</p>
            <p className="ppp">Watch a Demo</p>
            <p className="ppp">Customers</p>
            <p className="ppp">API</p>
          </p>
          <p className="ap5">
            <h5>Get In Touch</h5>
            <img src="/image/div.png" alt="phone" className="ai1" />
          </p>
          <img src="/image/div 4.png" alt="phone" className="last" />





        </p>
      </p>


    </div>

  )
}
export default Screen;