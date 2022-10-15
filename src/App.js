import React, {useState} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Home} from './Components/Home'
import {Students} from './Components/Students'
import {Contact} from './Components/Contact'
import {Edit} from './Components/Edit'
import {AddStudent} from './Components/AddStudent'
import './App.css'

function App() {
  let [name,setName] = useState('');
  let [age, setAge] = useState('');
  let [course, setCourse] = useState('');
  let [batch, setBatch] = useState('');
  let [edId,setEditId] = useState(0);
  let id = 3;
  let [list, setList] = useState([{id:0,name:'Jhon',age:22,course:'C',batch:'May'},
  {id:1,name:'Happy',age:12,course:'CPP',batch:'June'},
  {id:2,name:'Jhon',age:32,course:'Web',batch:'May'},
  {id:3,name:'Jhon',age:25,course:'Java',batch:'April'}]);

  const updateName = (e,i) =>{
    setName(e.target.value);
    let upList = [...list];
    let currList = upList[i];
    currList = {id:id+1, name:e.target.value, age:currList.age, course:currList.course, batch:currList.batch};
    upList[i] = currList;
    setList(upList);
  }

  const updateAge = (e,i) =>{
    setAge(e.target.value);
    let upList = [...list];
    let currList = upList[i];
    currList = {id:id+1, name:currList.name, age:e.target.value, course:currList.course, batch:currList.batch};
    upList[i] = currList;
    setList(upList);
  }

  const updateCourse = (e,i) =>{
    setCourse(e.target.value);
    let upList = [...list];
    let currList = upList[i];
    currList = {id:id+1, name:currList.name, age:currList.age, course:e.target.value, batch:currList.batch};
    upList[i] = currList;
    setList(upList);
  }

  const updateBatch = (e,i) =>{
    setBatch(e.target.value);
    let upList = [...list];
    let currList = upList[i];
    currList = {id:id+1, name:currList.name, age:currList.age, course:currList.course, batch:e.target.value};
    upList[i] = currList;
    setList(upList);
  }
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Students' element={<Students list={list} setEditId={setEditId}/>}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Edit/:id' element={<Edit edId={edId} list={list} updateName={updateName} updateAge={updateAge} updateCourse={updateCourse} updateBatch={updateBatch}/>}></Route>
          <Route path='/AddStudent/addnew' element={<AddStudent list={list} id={id} name={name} age={age} course={course} batch={batch} setName={setName} setAge={setAge} setCourse={setCourse} setBatch={setBatch} setList={setList}/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
