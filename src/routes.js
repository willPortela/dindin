import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import Register from './pages/Register';


function MainRoutes () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/registrar" element={<Register/>}/>
            </Routes>
        </>
    )
}

export default MainRoutes;