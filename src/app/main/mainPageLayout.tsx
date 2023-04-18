import MainFooter from './mainFooter'
import MainHeader from './mainHeader'
import s from '../page.module.scss'

export default function  MainPageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>
    <MainHeader/>
    <div className={s.mainWrapper}>
      {children}
    </div>
    <MainFooter/>  
    </>
  }