"use client"

import { setEmail, setName, setPassword, sendUserData } from "@/redux/loginSlice"
import { RootState } from "@/redux/store"
import { useAppDispatch } from "@/redux/types"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

// Форма логинизации уже существующего пользователя

export default function LoginUserForm() {
    let {name, password, email, loggedIn, message} = useSelector((state:RootState)=> state.login)
    const dispatch = useAppDispatch()

    let loginInputHandler = (evt: { target: { value: string, name: string } }) => {
        console.log(name, password, email);
        
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
        dispatch(sendUserData())
    }

    let router = useRouter()
  

    
    return <>
    <h3 className="h3">Авторизация</h3>
    <form className="">
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Name
                <input name="name" type="text" value={name} className="form-control" onChange={loginInputHandler} placeholder="Your Name"/>
            </label>
        </div>

        <div className="form-group">
            <label htmlFor="formGroupExampleInput">E-mail
                <input name="email" type="email" value={email} className="form-control" onChange={loginInputHandler} placeholder="Email"/>
            </label>
        </div>

        <div className="form-group mb-4">
            <label htmlFor="formGroupExampleInput2">Password
                <input name="password" type="password" value={password} className="form-control" onChange={loginInputHandler} placeholder="Password"/>
            </label>
        </div>

        <button type="button" onClick={submitHandler} className="btn btn-primary">Send</button>
    </form>


    {loggedIn == true? router.push('/user') : <p>{message !== ''? message: "нет такого пользователя"}</p>}
    </>
} 