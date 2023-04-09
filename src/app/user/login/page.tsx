import Link from "next/link";
import LoginUserForm from "./userLogin";

export default function LoginPage() {
    return <>
        <Link href="/user">&#8592; Назад</Link>
        <LoginUserForm />
    </>
}