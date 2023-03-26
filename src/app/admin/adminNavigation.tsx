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
              <Link className={'nav-link ' + (router=='/admin/products'? s.active:'')} href="/admin/products">Товары</Link>
            </li>

            <li className="nav-item accordion">
                <h2 className="accordion-header" id="headingOne">
                    <button className={"accordion-button " + (router.indexOf('/admin/catalog/') >= 0? s.active:'')} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Каталог
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                    <Link className={'nav-link ' + (router=='/admin/catalog/products'? s.active:'')}  aria-current="page" href="/admin/catalog/products">Товары</Link>
                    <Link className={'nav-link ' + (router=='/admin/catalog/news'? s.active:'')}  aria-current="page" href="/admin/catalog/news">Новости</Link>
                    <Link className={'nav-link ' + (router=='/admin/catalog/articles'? s.active:'')}  aria-current="page" href="/admin/catalog/articles">Статьи</Link>
                  </div>
                </div>
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

{/* <div className="accordion" id="accordionExample">
<div className="accordion-item">
 
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Accordion Item #2
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Accordion Item #3
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
  </div>
</div>
</div> */}