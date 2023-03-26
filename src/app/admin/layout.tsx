"use client"
import { useRouter } from "next/navigation"
import AdminNavigation from "./adminNavigation"
import checkAdmin from "@/helpers/checkAdmin"
import { useEffect } from "react"




export default function AdminMainLayout
({
    children,
  }: {
    children: React.ReactNode
}) 
{   
  if(checkAdmin()) {  
    useEffect(() => {

      require('bootstrap/dist/js/bootstrap') 
  }, [])  
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


  