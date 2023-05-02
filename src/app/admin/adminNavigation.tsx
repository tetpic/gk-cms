"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from './admin.module.scss'
import { useEffect } from "react";
// import {collapse} from 'bootstrap/js/dist/collapse'


export default function  AdminNavigation() {

  const router = usePathname()
  useEffect(()=>{       
    require('bootstrap/dist/js/bootstrap');
  }, [router] )
  
    return  <>
        <ul className={"nav flex-column col-3 " + s.nav}>
            <li className="nav-item bg-light rounded" key="mainLink">
                <Link className={'nav-link  text-dark rounded ' + (router=='/admin'? s.active : '')} aria-current="page" href="/admin">Поиск везде</Link>
            </li>

            <li className="nav-item bg-light rounded" key="productsLink">
              <Link className={'nav-link  text-dark  ' + (router=='/admin/products'? s.active:'')} href="/admin/products">Товары</Link>
            </li>

            <li className="nav-item accordion bg-light rounded" key="catalogLink">
                <p className="accordion-header" id="headingOne">
                    <button className={"accordion-button text-dark collapsed  rounded " + (router.indexOf('/admin/catalog/') >= 0? s.active:'')} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Каталог
                    </button>
                </p>
                <div id="collapseOne" className="accordion-collapse collapse"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <Link className={'nav-link ' + (router=='/admin/catalog/products'? s.active:'')}  aria-current="page" href="/admin/catalog/products">Товары</Link>
                    <Link className={'nav-link ' + (router=='/admin/catalog/news'? s.active:'')}  aria-current="page" href="/admin/catalog/news">Новости</Link>
                    <Link className={'nav-link ' + (router=='/admin/catalog/articles'? s.active:'')}  aria-current="page" href="/admin/catalog/articles">Статьи</Link>
                  </div>
                </div>
            </li>

            <li className="nav-item bg-light rounded" key="usersLink">
              <Link className={'nav-link  text-dark  ' + (router=='/admin/users'? s.active:'')} href="/admin/users">Пользователи</Link>
            </li>

            <li className="nav-item bg-light rounded" key="categoriesLink">
              <Link className={'nav-link disabled  text-dark rounded ' + (router=='/admin/categories'? s.active:'')} href="/admin/categories">Категории</Link>
            </li>
            
            <li className="nav-item bg-light rounded" key="seoLink">
              <Link className={'nav-link disabled  text-dark rounded ' + (router=='/admin/seo'? s.active:'')} href="/admin/seo" tabIndex={-1}>SEO</Link>
            </li>
    </ul>
   
    </> 
}