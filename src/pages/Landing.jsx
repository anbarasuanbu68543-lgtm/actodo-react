import React from 'react'
import Header from "./../components/Header"
import Card from "./../components/Card"
import TodoContainer from '../components/TodoContainer'
import {useLocation} from "react-router-dom"
const Landing = () => {
    const data=useLocation()
    console.log(data.state.username)
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header username={data.state.username}/>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"18"} subtitle={"Bangalore"} />
          <Card bgcolor={"#FD6663"} title={"November"} subtitle={"14:03:12"} />
          <Card bgcolor={"#FCA201"} title={"Bulit Using"} subtitle={"React"} />
        </div>
        <div>
          <TodoContainer/>
        </div>
      </div>
    </div>
  )
}

export default Landing
