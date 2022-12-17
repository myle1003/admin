import logo from './logo.svg';
import './App.css';
import Delivery from './components/Delivery';
import Navbar from './components/Navbar';
import SideBarAdmin from './components/SideBarAdmin';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Staff from './components/Staff';
import Product from './components/Product';
import Stock from './components/Stock';
import Promotion from './components/Promotion';
import Management from './components/Management';
import Statistic from './components/Statistic';
import Bill from './components/Bill';
import ManageComment from './components/ManageComment';
import BlackList from './components/BlackList';

function App() {
    return ( <
        div >
        <
        Navbar / >
        <
        div className = 'row' >
        <
        SideBarAdmin / >
        <div className='col-xl-10'>
        <
        Routes >
        <
        Route path = '/Category'
        element = { < Category / > }
        / >
        <
        Route path = '/Product'
        element = { < Product / > }
        / >
        <
        Route path = '/Stock'
        element = { < Stock / > }
        / >
        <
        Route path = '/Promotion'
        element = { < Promotion / > }
        / >
        <
        Route path = '/Delivery'
        element = { < Delivery / > }
        / >
        <
        Route path = '/Management'
        element = { < Management / > }
        / >
        <
        Route path = '/Statistic'
        element = { < Statistic / > }
        / >
        <
        Route path = '/Bill'
        element = { < Bill / > }
        / >
        <
        Route path = '/ManageComment'
        element = { < ManageComment / > }
        / >
        <
        Route path = '/BlackList'
        element = { < BlackList / > }
        / >    
         <
        Route path = '/Staff'
        element = { < Staff / > }
        / > < /
        Routes >
        </div>
        <
        /div>   < /
        div >


    );
}

export default App;