"use client"

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import UserProfile from "./userProfile";
import { useAppDispatch } from "@/redux/types";
import { getUser, checkMyself } from "@/redux/userSlice";
import { useEffect } from "react";
import { Roles } from "../api/user/userTypes";
import UserPageLayout from "./layout";

export default function User () {
    let dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(checkMyself())
    }, [dispatch])   


    let role = useSelector((state:RootState)=> state.user.role)

    if(role === Roles.root || role === Roles.admin) {
        return (            
            <UserProfile/>   
        )
    } 
    else {
        return (
        <>
            <div>{`К сожалению, наш дорогой гость, мы ничего о вас не знаем :(  поэтому можем вам предложить `} <br/> </div>
            <Link href="/user/login">Войти <br/></Link>
            <Link href="/user/register">Зарегистрироваться<br/></Link>
            или <br/>
            <Link href="/">Продолжить смотреть нашу прекрасную пустую главную страницу</Link>
        </>
        )
      
    }
}