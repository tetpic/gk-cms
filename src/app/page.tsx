import checkAdmin from "@/helpers/checkAdmin";
import Link from "next/link";
import LoginUserForm from "./login";

export default function Home() {
  // let isAdmin = checkAdmin()

  return (
    <>
      <LoginUserForm/>
      <Link className={'nav-link '} href="/admin">Админка</Link>
    </>
  )
}


