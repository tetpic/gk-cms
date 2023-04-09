import MainFooter from './mainFooter'
import MainHeader from './mainHeader'
import s from './mainLayout.module.scss'

export default function  MainPageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>
    <MainHeader/>
    <div className="main-wrapper">
      {children}
    </div>
    <MainFooter/>  
    </>
  }