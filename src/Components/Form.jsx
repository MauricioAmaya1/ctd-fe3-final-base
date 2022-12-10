import React from "react";
import { TextField, Typography, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useState } from "react";


const Form = () => {

  const [enviado, setEnviado] = useState(false)

  let valoresIniciales = {
    name: "",
    email: ""
  }
  
  const { handleSubmit, handleChange, values, errors } = useFormik({ 
    initialValues:valoresIniciales,
    validationSchema: Yup.object({
      name: Yup.string().min(5, "Debes ingresar un nombre de al menos 5 digitos").required(),
      email: Yup.string().email().required("Ingresa un email valido")
    }),
    onSubmit: (data) => {
      setEnviado(prev => !prev)
    }
  })


  return (
    <div style={{ marginBottom: "380px", marginTop: "50px" }} >

        <form onSubmit={handleSubmit}  className='form-container' > 
              <Typography  variant="h5" color="primary"  align="center" > Formulario de registro  </Typography>

              <TextField type='text' label="Ingrese nombre" variant="outlined" fullWidth name="name" 
                onChange={handleChange} helperText={errors.name} value={values.name}  style={{ marginBottom: "10px",marginTop: "10px",  backgroundColor: "white", borderRadius:"10px" }}  />

              <TextField type='email' label="Ingrese emal" variant="outlined" fullWidth name="email" 
                onChange={handleChange}  helperText={errors.email} value={values.email}  style={{ marginBottom: "10px", backgroundColor: "white", borderRadius:"10px" }} />

          <Button type="submit" variant='contained' style={{ marginBottom: "10px" }}  >Enviar</Button>

          {enviado ? <Typography variant='h5' color={"primary"} align="center">Gracias {values.name}, pronto nos pondremos en contacto</Typography> : null}
        </form>
    </div>

  );
};

export default Form;
