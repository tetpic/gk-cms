'use client'

import { useAppDispatch, useAppSelector } from "@/redux/types";
import { useRouter } from "next/navigation";
import { Roles } from "../api/user/userTypes";
import { useEffect } from "react";
import { checkMyself } from "@/redux/userSlice";

export default function AdminMain() {
    
    const router = useRouter();
    
    useEffect(()=>{       
        require('bootstrap/dist/js/bootstrap');
    }, [router] )
    
    let {auth, role} = useAppSelector(state=> state.user)
  
    if (role == Roles.admin || role == Roles.root) {       

    return (
        <>
            Поиск по админке сайта и вывод результатов ниже 
        </>
    )
    } else {
        router.push('/');
    }
      
}

