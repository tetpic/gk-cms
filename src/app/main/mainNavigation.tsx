"use client"
import Link from "next/link";
import s from "./mainLayout.module.scss"
import { concatClasses } from "@/helpers/utils";
import { usePathname, useRouter } from "next/navigation";


export default function MainNavigation() {
    let path = usePathname()
    return <>
        <nav className={s.mainNavigation}>
            <Link className={concatClasses([s.navLink, path == "/user/*"? s.disabled: ''])} href="/user">Пользователь</Link>
            <Link className={concatClasses([s.navLink, s.disabled])} href="/products">Товары</Link>
            <Link className={concatClasses([s.navLink, s.disabled])} href="/mall">Магазины</Link>
            <Link className={concatClasses([s.navLink, path == "/"? s.disabled: ''])} href="/">На главную</Link>
        </nav>
    </>
}