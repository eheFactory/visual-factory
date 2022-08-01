import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import MrSmiley from '../MrSmiley/MrSmiley';
import MsFourier from '../MsFourier/MsFourier';

const AppRoutes = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home />} />
        <Route path='/smiley' element={MrSmiley()} />
        <Route path='/fourier' element={MsFourier()} />
    </Routes>
  )
}

export default AppRoutes;