import Box from '@mui/material/Box'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import { Routes, Route, Navigate } from 'react-router-dom'
const NotAutorized = () => {
  return (
    <Box>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Box>
  )
}

export default NotAutorized