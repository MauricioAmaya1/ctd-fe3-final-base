import React, { useContext } from 'react'
import { Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const { state, dispatch } = useContext(GlobalContext)

  return (
    <>
    
    <nav style={{
      backgroundColor: "black",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      padding: "10px",
      alignItems: "center"

    }}>
      <Typography variant='h4' color="primary"> Clinica React </Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }} >
        <Button variant="contained" color="primary"> <Link to={"/"} > Home </Link> </Button>
        <Button variant="contained" color="primary" > <Link to={"/contact"} > Contact </Link></Button>
        <Button variant="contained" color="primary" > <Link to={"/favorites"} > Favorites </Link> </Button>
        <Button variant="contained" color="secondary"  
        onClick={() => dispatch(state === '' ? { type: 'dark' } : { type: 'light' })}> Change theme</Button>
      </div>
    </nav>
    </>
  )
}

export default Navbar