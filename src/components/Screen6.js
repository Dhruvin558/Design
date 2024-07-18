import React from "react";
import Button from '@mui/material/Button';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';


const Screen6 =()=>{
    return(
        <div>
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

export default Screen6