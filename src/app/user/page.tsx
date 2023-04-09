"use client"

import { useSelector } from "react-redux";
import LoginUserForm from "./login/userLogin";
import { RootState } from "@/redux/store";
import Link from "next/link";
import UserProfile from "./userProfile";
import RegisterNewUser from "./register/userRegistration";
import { useAppDispatch } from "@/redux/types";
import { getUser } from "@/redux/userSlice";

export default function User () {
    let {loggedIn} = useSelector((state:RootState)=> state.login)

    let dispatch = useAppDispatch()



    if(loggedIn) {
        return <>
        <button onClick={()=>{dispatch(getUser())}}>Получить пользователей</button>
        <UserProfile/>
        </>
    } else {
        return <>
            <Link href="/">&#8592; Главная</Link>
            <br/><br/><br/>
            <Link href="/user/register">Регистрация</Link>
            <br/><br/><br/>
            <Link href="/user/login">Логинизация</Link>
        </>
    }
}