import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import s from "./user.module.scss"


/** Личный кабинет пользователя */
export default function UserProfile() {
    let user = useSelector((state:RootState)=>state.user)
    console.log(user)
    return <>   
    <div className={s.navigationWrapper}>
        <Link className={s.link} href="/admin">Админка</Link>
        <button className={s.link} >Выйти</button>
        <p>Имя пользователя: {user.name}</p> 
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
    </div> 
    </>
}