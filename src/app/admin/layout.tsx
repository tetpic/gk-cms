"use client"
import s from './admin.module.scss'

import Link from "next/link"
import { usePathname } from "next/navigation"
// import { useRouter } from "next/router"
import AdminNavigation from "./page"


export default function AdminMainLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const router = usePathname()
    return (
      <div className='row'>      
        <ul className="nav flex-column col-3">
          <li className="nav-item">
            <Link className={'nav-link ' + (router=='/admin'? s.active : '')} aria-current="page" href="/admin">Главная</Link>
          </li>
          <li className="nav-item">
            <Link className={'nav-link ' + (router=='/admin/catalog'? s.active:'')}  aria-current="page" href="/admin/catalog">Каталог</Link>
          </li>
          <li className="nav-item">
            <Link className={'nav-link ' + (router=='/admin/products'? s.active:'')} href="/admin/products">Товары</Link>
          </li>
          <li className="nav-item">
            <Link className={'nav-link disabled ' + (router=='/admin/categories'? s.active:'')} href="/admin/categories">Категории</Link>
          </li>
          <li className="nav-item">
            <Link className={'nav-link disabled ' + (router=='/admin/seo'? s.active:'')} href="/admin/seo" tabIndex={-1}>SEO</Link>
          </li>
        </ul>
        <section className='col-9'>
          {children}
        </section>
      </div>
    )
  }
  