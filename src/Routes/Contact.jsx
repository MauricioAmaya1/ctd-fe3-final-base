import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div style={{ margin: "10px" }}  >
      <h2>¿Quiere saber más?</h2>
      <p>Envíenos sus preguntas y nos pondremos en contacto con usted</p>
      <Form/>
    </div>
  )
}

export default Contact