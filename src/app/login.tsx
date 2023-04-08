"use client"

import { setEmail, setName, setPassword, sendUserData } from "@/redux/loginSlice"
import { RootState } from "@/redux/store"
import { useAppDispatch } from "@/redux/types"
import { useSelector } from "react-redux"

export default function LoginUserForm() {
    let {name, password, email, isCreated, id} = useSelector((state:RootState)=> state.login)
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
  

    
    return <>
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

    {/* TODO: если пользователь создался, редиректим на страницу личного кабинета, где и будет переход в админку */}

    {isCreated == true? <p>{name + id + email + password}</p> : <p>Not Created</p>}
    </>
} 