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
              <Link className={'nav-link  text-dark  ' + (router=='/admin/objects'? s.active:'')} href="/admin/objects">Объекты</Link>
            </li>

            <li className="nav-item accordion bg-light rounded" key="catalogLink">
                <p className="accordion-header" id="headingOne">
                    <button className={"accordion-button text-dark collapsed  rounded " + (router.indexOf('/admin/catalog/') >= 0? s.active:'')} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Создать 
                    </button>
                </p>
                <div id="collapseOne" className="accordion-collapse collapse"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <Link className={'nav-link ' + (router=='/admin/create/product'? s.active:'')}  aria-current="page" href="/admin/create/product">Товар</Link>
                    <Link className={'nav-link ' + (router=='/admin/create/news'? s.active:'')}  aria-current="page" href="/admin/create/news">Новость</Link>
                    <Link className={'nav-link ' + (router=='/admin/create/article'? s.active:'')}  aria-current="page" href="/admin/create/article">Статья</Link>
                    <Link className={'nav-link ' + (router=='/admin/create/event'? s.active:'')}  aria-current="page" href="/admin/create/event">Событие</Link>
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