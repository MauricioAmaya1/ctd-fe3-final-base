import React, {useContext} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/global.context'

const Detail = () => {

  const { data } = useContext(GlobalContext)
  let {id} = useParams()
  let user = data.find(e => e.id == id)

  return (
    <>
    <h1>Detail Dentist id </h1>
    <TableContainer component={Paper}  style={{ padding: "10px" }}>
    <Table sx={{ minWidth: 650 }} >
      <TableHead>
        <TableRow>
        <TableCell>Id</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Telefonono</TableCell>
          <TableCell>Website</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  key={user.id}  >
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
            </TableRow>
          </>
        }
        </TableBody>
        </Table>
        </TableContainer> 
    </>
  )
}

export default Detail


