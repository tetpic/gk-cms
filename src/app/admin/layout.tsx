import AdminNavigation from './adminNavigation';
import Image from 'next/image';
import goriLogo from '../../../public/gorilka-logo.png';
import s from './admin.module.scss';
import Link from 'next/link';



export default function AdminMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <>
        <div className={s.header}>
          <Image src={goriLogo} alt="gorika logo" width={60} />
          <h4 className="h5 text-light">Gori-Ka АДминка</h4>
          <Link className="text-light  ms-auto" aria-current="page" href="/">
            Главная
          </Link>
        </div>
        <div className="row justify-content-center">
          <AdminNavigation />
          <section className="col-8">{children}</section>
        </div>
      </>
    ); 
}
