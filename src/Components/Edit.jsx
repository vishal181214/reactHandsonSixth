import { Link } from 'react-router-dom'
import React from 'react'

export const Edit = (props) => {
    const EditId = props.edId;
    return (
        <div className='main-nav'>
            <div className='menu-link'>
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }} className="menuColor">Home</Link></li>
                    <li><Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor">Students</Link></li>
                    <li><Link to='/Contact' style={{ textDecoration: 'none' }} className="menuColor">Contact Us</Link></li>
                </ul>
            </div>
            {
                props.list.slice(EditId, EditId + 1).map((item, index) => {
                    return (
                        <div className='contentDiv' key={`${index}`}>
                            <div className='inputField'>
                                <fieldset>
                                    <legend>Name</legend>
                                    <input type="text" name="name" defaultValue={item.name} onChange={(e) => props.updateName(e, EditId)} />
                                </fieldset>
                                <fieldset>
                                    <legend>Age</legend>
                                    <input type="text" name="age" defaultValue={item.age} onChange={(e) => props.updateAge(e, EditId)} />
                                </fieldset>
                                <fieldset>
                                    <legend>Course</legend>
                                    <input type="text" name="course" defaultValue={item.course} onChange={(e) => props.updateCourse(e, EditId)} />
                                </fieldset>
                                <fieldset>
                                    <legend>Batch</legend>
                                    <input type="text" name="batch" defaultValue={item.batch} onChange={(e) => props.updateBatch(e, EditId)} />
                                </fieldset>
                            </div>
                            <div className='bttnClass'>
                                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn'>Update</button></Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

