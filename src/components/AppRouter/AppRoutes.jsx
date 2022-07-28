import { Route, Routes } from 'react-router-dom';
import MrSmiley from '../MrSmiley/MrSmiley';
import Home from '../Home/Home';
const AppRoutes = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home />} />
        <Route path='/smiley' element={MrSmiley()} />
        {/* <Route path='/services' element={Services()} />
        <Route path='/contact' element={Contact()} /> */}
    </Routes>
  )
}

export default AppRoutes;