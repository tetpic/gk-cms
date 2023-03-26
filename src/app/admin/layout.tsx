"use client"
import { useRouter } from "next/navigation"
import AdminNavigation from "./adminNavigation"
import checkAdmin from "@/helpers/checkAdmin"




export default function AdminMainLayout
({
    children,
  }: {
    children: React.ReactNode
}) 
{   
  if(checkAdmin()) {    
      return (
        <div className='row'>     
        <AdminNavigation/>
        <section className='col-9'>
          {children}
        </section>
      </div> 
    )
  } else {
      const router = useRouter()
      router.push('/')
    }
       
}


  