import Link from "next/link";

/** Личный кабинет пользователя */
export default function UserProfile() {
    return <>
    Тут будет рендер личного кабинета пользователя, + возможно навигация по ЛК
     <Link className={'nav-link '} href="/admin">Админка</Link>
     
     </>
}