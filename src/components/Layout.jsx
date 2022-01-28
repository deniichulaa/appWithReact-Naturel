
import NavBar from'./NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {

    
    
    return(
        <div className="app">
            <NavBar/>
            <Outlet/>
            
        </div>
    )
}

export default Layout;
