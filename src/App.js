import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Favstudentlist from "./Favstudentlist"
import Studentlist from "./Students"
import { useState } from "react"


function App(){

const [students,setstudents]=useState([{id:1,name:"partha"},{id:2,name:"Nivetha"},{id:3,name:"Sridhar"},{id:4,name:"Priya"},{id:5,name:"vidhya"}])
const [favstudent,setfavstudent]=useState([])



  return(
    <>
    <BrowserRouter>
    <div className=" flex gap-5 text-3xl font-bold justify-around bg-red-300 p-5 text-white">
      <Link to={"/stu"}>Student list</Link>
      <Link to={"/fav"}>Favstudentlist</Link>
      </div>
      <Routes>
        <Route path="/stu" element={<Studentlist students={students} setstudents={setstudents} favstudent={favstudent} setfavstudent={setfavstudent}></Studentlist>}></Route>
        <Route path="/fav" element={<Favstudentlist favstudent={favstudent} setfavstudent={setfavstudent} students={students}></Favstudentlist>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App