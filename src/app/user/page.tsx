"use client"

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import UserProfile from "./userProfile";
import { useAppDispatch } from "@/redux/types";
import { getUser, checkMyself } from "@/redux/userSlice";
import { useEffect } from "react";
import { Roles } from "../api/user/userTypes";

export default function User () {
    let dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(checkMyself())
    }, [])   


    let role:unknown = useSelector((state:RootState)=> state.user.role)

    if(role === 'root' || role === 'admin') {
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