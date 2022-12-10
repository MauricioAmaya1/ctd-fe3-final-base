import React from "react";
import CardUser from "../Components/CardUser";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  let favoritos = JSON.parse(localStorage.getItem('favs'))

  console.log(favoritos)


  return (
    <>  {
        <div className="card-grid" style={{ marginTop: "20px", marginBottom: "20px" }} >
          { favoritos && favoritos.map(e =>
            <CardUser key={e.id}  id={e.id}  name={e.name}  username={e.username} />
          )}

      </div>

      }
      
    </>
  );
};

export default Favs;
