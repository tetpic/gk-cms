import Link from "next/link";
import RegisterNewUser from "./userRegistration";

export default function UserRegisterPage() {
    return <>
    <Link href="/user">&#8592; Назад</Link>
    <RegisterNewUser/>
    </>
}