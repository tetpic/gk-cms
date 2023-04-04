import Link from "next/link";
import { usePathname } from "next/navigation";
import s from './admin.module.scss'


export default function  AdminNavigation() {
    const router = usePathname()
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
                    <button className={"accordion-button text-dark  rounded " + (router.indexOf('/admin/catalog/') >= 0? s.active:'')} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Каталог
                    </button>
                </p>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                    <Link className={'nav-link ' + (router=='/admin/catalog/products'? s.active:'')}  aria-current="page" href="/admin/catalog/products">Товары</Link>
                    <Link className={'nav-link ' + (router=='/admin/catalog/news'? s.active:'')}  aria-current="page" href="/admin/catalog/news">Новости</Link>
                    <Link className={'nav-link ' + (router=='/admin/catalog/articles'? s.active:'')}  aria-current="page" href="/admin/catalog/articles">Статьи</Link>
                  </div>
                </div>
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