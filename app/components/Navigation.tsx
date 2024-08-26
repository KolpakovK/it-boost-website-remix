import clsx from "clsx";
import { ArrowUpRight, LucidePhoneCall, Menu } from "lucide-react";
import { useState } from "react";

const navigation = {
    links:[
        {
            label:"Головна",
            href:"#home",
        },
        {
            label:"Про школу",
            href:"#about",
        },
        {
            label:"Курси",
            href:"#courses",
        },
        {
            label:"Привілегії",
            href:"#benefits",
        },
        {
            label:"Контакти",
            href:"#contacts",
        },
    ],
    actions:[
        {
            label:"+380 (99) 9999 999",
            icon:(<LucidePhoneCall size={20}/>),
            type:"btn-outline",
            href:"#"
        },
        {
            label:"Консультація",
            icon:(<ArrowUpRight size={20}/>),
            type:"btn-primary",
            href:"#"
        },
    ]
}


export default function Navigation(){
    const [mobileOpened,setMobileOpened] = useState(false)

    return (
        <div className={clsx("flex flex-col items-center bg-white fixed top-0 left-0 w-full z-50",mobileOpened && "h-screen")}>
            <div className="container flex justify-between items-center gap-8 py-2">
                {/* Logo */}
                <img src="/ITBoost_Logo.svg" alt="Logo" className="h-12 w-12 object-contain pointer-events-none select-none"/>


                {/* Navigation */}
                <div className="hidden lg:flex items-center gap-12">
                    <div className="flex gap-0 items-center">
                        {navigation.links.map( (link:any,index:number) => (
                            <a key={index} href={link.href} className="btn btn-nav">{link.label}</a>
                        ) )}
                    </div>

                    <div className="flex items-center gap-4">
                        {navigation.actions.map( (action:any,index:number) => (
                            <a key={index} href={action.href} className={clsx("btn",action.type)}>{action.icon}{action.label}</a>
                        ) )}
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex lg:hidden">
                    <a href="#" className="btn size-10 items-center justify-center p-0" onClick={ () => setMobileOpened(!mobileOpened)}><Menu/></a>
                </div>
            </div>

            {mobileOpened && (
                <div className="flex flex-col flex-1 gap-8 items-center overflow-y-auto py-6 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        {navigation.links.map( (link:any,index:number) => (
                            <a key={index} href={link.href} className="btn btn-nav justify-center">{link.label}</a>
                        ) )}
                    </div>
                    
                    <div className="flex flex-col gap-2 items-center w-full">
                        {navigation.actions.map( (action:any,index:number) => (
                            <a key={index} href={action.href} className={clsx("btn justify-center w-fit",action.type)}>{action.icon}{action.label}</a>
                        ) )}
                    </div>
                </div>
            )}
        </div>
    )
}