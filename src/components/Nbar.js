import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';





const Navbar = () => {
  return (
    <div >
      <p className="nbarbg">
      <p className=" sp1" >
        <Link className="nf">Brandname</Link>
        <Link to="/" className="nbar">Home</Link>
        <Link to="/" className="nbar">Product</Link>
        <Link to="/" className="nbar">Pricing</Link>
        <Link to="/" className="nbar">Contact</Link>
        <Link to="/" className="bt1">Login</Link>
        <Button sx={{
          backgroundColor: 'rgb(150, 187, 124)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgb(130, 167, 104)',
          },
          fontFamily: 'Arial'

        }} variant="contained"
          size="larg"
          endIcon={<ArrowForwardIcon />}  >JOIN US </Button>
      </p>
</p>
    </div>
  )
}

export default Navbar;