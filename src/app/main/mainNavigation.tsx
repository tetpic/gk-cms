import Link from "next/link";
import s from "./mainLayout.module.scss"
import { concatClasses } from "@/helpers/utils";


export default function MainNavigation() {
    return <>
        <nav className={s.mainNavigation}>
            <Link className={s.navLink} href="/user">Пользователь</Link>
            <Link className={concatClasses([s.navLink, s.disabled])} href="/user">Товары</Link>
            <Link className={concatClasses([s.navLink, s.disabled])} href="/user">Магазины</Link>
        </nav>
    </>
}