import {Link} from 'react-router-dom'
import React from 'react'

export const Home =()=>{
        return(
            <div className='main-nav'>
            <div className='menu-link'>
            <ul>
                <li><Link to='/' style={{ textDecoration: 'none' }} className="menuColor">Home</Link></li>
                <li><Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor">Students</Link></li>
                <li><Link to='/Contact' style={{ textDecoration: 'none' }} className="menuColor">Contact Us</Link></li>
            </ul>
            </div>
            <div className='contentDiv'>
                <h2>Home Page</h2>
            </div>
            </div>
        ) 
}

// export default Home;