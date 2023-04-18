import { concatClasses } from "@/helpers/utils"
import MainFooter from "../main/mainFooter"
import MainHeader from "../main/mainHeader"
//последовательность подключения стилей влияет на то, какие из них будут главнее
import l from "../page.module.scss"
import s from "./user.module.scss"

export default function  UserPageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <>
    <MainHeader/>
    <div className={concatClasses([s.wrapper, l.mainWrapper])}>
      {children}
    </div>
    <MainFooter/>  
    </>
  } 