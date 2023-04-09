"use client"

import { setEmail, setName, setPassword, sendUserData } from "@/redux/loginSlice"
import { registerUser } from "@/redux/registratoinSlice"
import { RootState } from "@/redux/store"
import { useAppDispatch } from "@/redux/types"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"


/** Форма создания уже существующего пользователя  */ 
export default function RegisterNewUser() {
    let {user} = useSelector((state:RootState)=> state.register)
    let {isLoading, isRegistered} = useSelector((state:RootState)=> state.register)
    const dispatch = useAppDispatch()

    let registerInputHandler = (evt: { target: { value: string, name: string } }) => {
        console.log(user.name, user.password, user.email);
        
        let eventName =  evt.target.name
        switch (eventName) {
            case 'name':
                dispatch(setName(evt.target.value))
                break;
            case 'email':
                dispatch(setEmail(evt.target.value))
                break;
            case 'password':
                dispatch(setPassword(evt.target.value))
                break;
            default:
                alert('Something wrong')
                break;
        }              
    }

    let submitHandler=()=>{
        dispatch(registerUser())
    }

    let router = useRouter()
  

    if(!isRegistered) {
        return <>
        <h3 className="h3">Регистрация</h3>
        <form className="">
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Name
                    <input name="name" type="text" value={user.name} className="form-control" onChange={registerInputHandler} placeholder="Your Name"/>
                </label>
            </div>
    
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">E-mail
                    <input name="email" type="email" value={user.email} className="form-control" onChange={registerInputHandler} placeholder="Email"/>
                </label>
            </div>
    
            <div className="form-group mb-4">
                <label htmlFor="formGroupExampleInput2">Password
                    <input name="password" type="password" value={user.password} className="form-control" onChange={registerInputHandler} placeholder="Password"/>
                </label>
            </div>
    
            <button type="button" onClick={submitHandler} className="btn btn-primary">Send</button>
        </form>
        </>

    } else {
        {isRegistered == true? router.push("/user/login")  : <p>Not Logged In</p>} 
    }
 


} 