import React, { useContext } from 'react'
import CardUser from '../Components/CardUser';
import { GlobalContext } from '../Components/utils/global.context'


const Home = () => {

  const { data } = useContext(GlobalContext)

  return (
    <>
    <main className="" >
      <div style={{
        width: "100%",
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "10px"
      }} >
        {
          data.map (elemento => {
              return(

                <CardUser id={elemento.id}  key={elemento.id}  name={elemento.name} username={elemento.username}  />

              )
          } )
        }
      </div>
    </main>
    </>
  )
}

export default Home