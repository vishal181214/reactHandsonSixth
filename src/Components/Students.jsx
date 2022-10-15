import { Link } from 'react-router-dom'
import React from 'react'


export const Students = (props) => {

    return (<div className='main-nav'>
        <div className='menu-link'>
            <ul>
                <li><Link to='/' style={{ textDecoration: 'none' }} className="menuColor">Home</Link></li>
                <li><Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor">Students</Link></li>
                <li><Link to='/Contact' style={{ textDecoration: 'none' }} className="menuColor">Contact Us</Link></li>
            </ul>
        </div>
        <div className='contentDiv'>
            <div className='head'>
                <h1>Students Details</h1>
                <button className='btn'><Link to='/AddStudent/addnew' style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>Add new Student</Link></button>
            </div>
            <div>
                <table className='tableData' style={{ borderRadius: "30px", borderSpacing: "0px" }}>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    {
                        props.list.map((item, index) =>
                            <tr key={`${index}`}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td><Link to={`/Edit/${index}`} style={{ textDecoration: 'none', color: '#16182e' }}><span onClick={() => { props.setEditId(index) }}>Edit</span></Link></td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    </div>
    )
}

