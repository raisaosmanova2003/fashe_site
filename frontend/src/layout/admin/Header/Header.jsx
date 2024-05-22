import React from 'react'
import { Link } from "react-router-dom";
import "../../site/Header/Header.css"
import Products from '../../../pages/admin/Products/Products'
import Add from "../../../pages/admin/Add/Add"
import Home from "../../../pages/site/Home/Home"

const Header = () => {
  return (
    <header>
    <div className="header">
     <div className="header_logo">
       <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png" alt="" />
     </div>
     <div className="header_nav">
       <nav>
         <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/admin/add'>Add</Link></li>
           <li><Link to='/admin'>Products</Link></li>
           <li><Link >Blog</Link></li>
           <li><Link>About</Link></li>
           <li><Link>Contact</Link></li>
           <li><Link>Sale</Link></li>
         </ul>
       </nav>
     </div>
     <div className="header_right">
       <ul>
         <li><i class="fa-regular fa-user"></i></li>
         <li><i class="fa-solid fa-bag-shopping"></i></li>
       </ul>
     </div>
    </div>

 </header>
  )
}

export default Header
