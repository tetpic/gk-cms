"use client"

import { setEmail, setName, setPassword, sendUserData } from "@/redux/loginSlice"
import { RootState } from "@/redux/store"
import { useAppDispatch } from "@/redux/types"
import { useSelector } from "react-redux"


/** Форма создания уже существующего пользователя  */ 
export default function RegisterNewUser() {
    let {name, password, email, id} = useSelector((state:RootState)=> state.register.user)
    let {isLoading, isRegistered} = useSelector((state:RootState)=> state.register)
    const dispatch = useAppDispatch()

    let registerInputHandler = (evt: { target: { value: string, name: string } }) => {
        console.log(name, password, email);
        
        let eventName =  evt.target.name
        switch (eventName) {
         
        }       
    }

    let submitHandler=()=>{
        dispatch(sendUserData())
    }
  

    
    return <>
    <h3 className="h3">Регистрация</h3>
    <form className="">
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Name
                <input name="name" type="text" value={name} className="form-control" onChange={registerInputHandler} placeholder="Your Name"/>
            </label>
        </div>

        <div className="form-group">
            <label htmlFor="formGroupExampleInput">E-mail
                <input name="email" type="email" value={email} className="form-control" onChange={registerInputHandler} placeholder="Email"/>
            </label>
        </div>

        <div className="form-group mb-4">
            <label htmlFor="formGroupExampleInput2">Password
                <input name="password" type="password" value={password} className="form-control" onChange={registerInputHandler} placeholder="Password"/>
            </label>
        </div>

        <button type="button" onClick={submitHandler} className="btn btn-primary">Send</button>
    </form>


    {/* {isRegistered == true? <p>{name + id + email + password}</p> : <p>Not Logged In</p>} */}
    </>
} 