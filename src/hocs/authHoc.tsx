// import { AppProps } from "next/app";
import { useRouter } from "next/navigation";
import { ReactComponentElement, ReactNode } from "react";

// пока непонятно понадобятся ли нам хоки, но на всякий случай 

function  adminPermission (children: ({ children, }: { children: ReactNode; }) => JSX.Element)  {
    const isAdmin: boolean = false;

    //  тут будет какая-то логика

    // const router = useRouter()
    if (isAdmin) {
        return <>
        {children}
        </>
    }
    else {
        // router.push('/')
    } 
  
        
}

// export default adminPermission