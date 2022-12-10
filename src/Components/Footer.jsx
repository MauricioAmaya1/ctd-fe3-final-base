import React from 'react'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (

      <nav style={{
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      padding: "10px",
      alignItems: "center",
      marginBottom: "0",
      position:"absolute"

    }}>

      <div style={{ color: "white",  fontSize: '30px'  }} >Digital House</div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }} >
        <Facebook  style={{ color: "white",  fontSize: '35px'  }} ></Facebook>
        <Instagram  style={{ color: "white",  fontSize: '35px'  }} ></Instagram>
        <Twitter  style={{ color: "white",  fontSize: '35px'  }} ></Twitter>
      </div>
    </nav>
  )
}

export default Footer
