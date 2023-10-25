import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary  ">
            <div className="container">
              
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/allstud">All Student</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link text-white"  to="/addstud">Add New Student</NavLink>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>


    )
}
