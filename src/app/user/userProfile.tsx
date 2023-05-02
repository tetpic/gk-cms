import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import s from "./user.module.scss"
import { useAppDispatch } from "@/redux/types";
import { logOut } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import { Roles } from "../api/user/userTypes";


/** Личный кабинет пользователя */
export default function UserProfile() {
   
    let dispatch = useAppDispatch()
    let user = useSelector((state:RootState)=>state.user)
    let router = useRouter()

    let logoutHandler = () => {
        console.log('click')
        dispatch(logOut())
        router.push('/')
    } 
   
    return <>   
    <div className={s.navigationWrapper}>
        {(()=> {
            if(user.role == Roles.admin || user.role == Roles.root) {
                return( <Link className={s.link} href="/admin">Админка</Link>)
            }
        })()}
        
        <button className={s.link} onClick={()=>logoutHandler()}>Выйти</button>
        <p>Имя пользователя: {user.name}</p> 
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
    </div> 
    </>
}