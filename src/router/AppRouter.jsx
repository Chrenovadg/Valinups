import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { ValineContent } from '../ValineContent';
import { Lineups } from '../valinups/pages/Lineups';
import { Ranking } from '../valinups/pages/Ranking';


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={ <ValineContent/> } />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/register' element={ <RegisterPage/> } />
        <Route path='/lineups' element={ <Lineups/> } />
        <Route path='/ranking' element={ <Ranking/> } />

        <Route path='/' element={ <Navigate to="/home" /> } />
        <Route path='#' element={ <Navigate to="/home" /> } />
        <Route path='*' element={ <Navigate to="/home" /> } />
      </Routes>
    </>
  )
}
