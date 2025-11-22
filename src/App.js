import Card from "./components/Card";
import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ReactDOM from "react-dom/client"
import { useState } from "react";
import Landing from "./pages/Landing"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App()
{
     const [users, setUser] = useState([
        {
          username: "anbu",
          password: "1234"
        },
        {
          username: "jaga",
          password: "999"
        }
      ]);
    return(
         <div>
    <BrowserRouter >
        <Routes>
            <Route path="/" element={<Login users={users} setUser={setUser}/>}></Route>
            <Route path= "/signup" element={<SignUp users={users} setUser={setUser}/>}></Route>
            <Route path="/landing" element={<Landing/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
    )

}
export default App
