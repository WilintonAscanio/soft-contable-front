import './admin.scss'
import { AiOutlinePlus } from 'react-icons/ai'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { getData } from '../../services/getData';
import { useState } from 'react';

const columns = [
  {
    id: 'id',
    label: 'Id',
    minWidth: 10,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'description', label: 'Descripción', minWidth: 100 },
  { id: 'createdAt', label: 'Creado', minWidth: 100 },
];

function createData(name, description, id, createdAt) {
  return { name, description, id, createdAt };
}


export default function StickyHeadTable() {
  const [data, setData] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getData().then((response) => {
      console.log(response);
      setData(response.data)
    })



  }, [])

  const rows = data?.map(e =>
    createData(`${e.nombre}`, `${e.descripcion}`, `${e.idPerfil}`, `${e.createdAt}`)
  )
    ;
  console.log(rows);




  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className='admin'>
      <Fab color="primary" aria-label="add" size='small' sx={{ alignSelf: 'end' }} onClick={() => navigate('/addAdmin')}>
        <AddIcon />
      </Fab>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper >
  );
}