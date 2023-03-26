import Link from "next/link";
import { usePathname } from "next/navigation";
import s from './admin.module.scss'


export default function  AdminNavigation() {
    const router = usePathname()
    
    return  <>
   
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
   
    </> 
}