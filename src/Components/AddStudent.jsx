import { Link } from 'react-router-dom'
import React from 'react'

export const AddStudent = (props) => {

    const handle = () => {
        let upList = [...props.list];
        let currList = upList[props.list.length];
        currList = { id: props.id + 1, name: props.name, age: props.age, course: props.course, batch: props.batch };
        upList[props.list.length] = currList;
        props.setList(upList);
    }
    return (
        <div className='main-nav'>
            <div className='menu-link'>
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }} className="menuColor">Home</Link></li>
                    <li><Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor">Students</Link></li>
                    <li><Link to='/Contact' style={{ textDecoration: 'none' }} className="menuColor">Contact Us</Link></li>
                </ul>
            </div>
            <div className='contentDiv'>
                <div className='inputField'>
                    <fieldset>
                        <legend>Name</legend>
                        <input type="text" placeholder="name" onChange={(e) => props.setName(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Age</legend>
                        <input type="text" placeholder="age" onChange={(e) => props.setAge(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Course</legend>
                        <input type="text" placeholder="course" onChange={(e) => props.setCourse(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Batch</legend>
                        <input type="text" placeholder="batch" onChange={(e) => props.setBatch(e.target.value)} />
                    </fieldset>
                </div>
                <div className='bttnClass'>
                    <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                    <Link to={'/Students'} style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn' onClick={handle}>Add</button></Link>
                </div>
            </div>
        </div>
    )
}

