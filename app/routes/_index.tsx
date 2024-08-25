import type { MetaFunction } from "@remix-run/node";
import { format, intervalToDuration } from "date-fns";
import { clsx } from 'clsx';

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

import { LucidePhoneCall, ArrowUpRight, TimerReset, BanknoteIcon } from "lucide-react";

import Timer from "~/components/Timer";


const _static_data:any = {
    navigation:{
        links:[
            {
                label:"Головна",
                href:"#",
            },
            {
                label:"Про школу",
                href:"#",
            },
            {
                label:"Курси",
                href:"#",
            },
            {
                label:"Привілегії",
                href:"#",
            },
            {
                label:"Контакти",
                href:"#",
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
    },
    hero:{
        title:[
            {
                text:"Дайте  своїй  дитині",
                colored:false,
                image:""
            },
            {
                text:"суперсилу",
                colored:false,
                image:"/HeroImage.jpg"
            },
            {
                text:"знання  В  IT!",
                colored:true,
                image:""
            }
        ],
        description:"Навчаємо дітей програмуванню та IT-грамотності в захоплюючій формі.",
        action:{
            label:"Дізнатись більше",
            icon:(<ArrowUpRight size={20}/>),
            href:"#"
        }
    },
    offers:{
        description:"Запишіться на пробний урок до [дата] та отримайте знижку [розмір знижки] на перший місяць навчання!",
        date: new Date(2024,7,30)
    },
    about_us:{
        img:"HeroImage.jpg",
        subtitle:"Хто ми?",
        title:"Трохи інформації про IT  Boost",
        content:[
            "IT Boost – це захоплююча онлайн-школа, де діти віком від 9 до 15 років отримують потужний старт у світі інформаційних технологій.",
            "Наша мета – не просто навчити програмуванню, а й розвинути IT-грамотність, яка стане ключем до успіху в цифрову епоху."
        ],
        cards:[
            {
                color:"bg-orange-100",
                icon:(<BanknoteIcon className="text-orange-500" size={40}/>),
                title:"Доступні ціни",
                description:"Ми віримо, що якісна IT-освіта має бути доступною для всіх. Наші ціни конкурентні та нижчі за середні на ринку онлайн-шкіл."
            },
            {
                color:"bg-violet-100",
                icon:(<BanknoteIcon className="text-violet-500" size={40}/>),
                title:"Невеликі групи",
                description:"Ми формуємо групи до 12 учнів, щоб кожен отримав максимум уваги та індивідуальний підхід."
            },
            {
                color:"bg-green-100",
                icon:(<BanknoteIcon className="text-green-500" size={40}/>),
                title:"Програми на будь-який рівень",
                description:"Пропонуємо курси як для початківців, які роблять перші кроки у світі програмування, так і для тих, хто вже має базові знання та хоче поглибити їх."
            },
            {
                color:"bg-yellow-100",
                icon:(<BanknoteIcon className="text-yellow-500" size={40}/>),
                title:"Практика та проекти",
                description:"Учні не просто вивчають теорію, а й працюють над реальними проектами, розвиваючи свої навички та портфоліо."
            },
        ]
    },
    courses:{
        title:"Практичні курси для вашої дитини",
        subtitle:"Наші курси",
        description:[
            "IT Boost – це захоплююча онлайн-школа, де діти віком від 9 до 15 років отримують потужний старт у світі інформаційних технологій. ",
            "Наша мета – не просто навчити програмуванню, а й розвинути IT-грамотність, яка стане ключем до успіху в цифрову епоху."
        ],
        action:{
            label:"Записатись",
            icon:(<ArrowUpRight size={20}/>),
            href:"#"
        },
        img:"HeroImage.jpg",
        courses_list:[
            {
                title:"Назва предмету",
                subtitle:"Наш курс",
                short_description:"Короткий опис етапу навчання у декілька речень.",
                duration:"2 місяці",
                description:[
                    "IT Boost – це захоплююча онлайн-школа, де діти віком від 9 до 15 років отримують потужний старт у світі інформаційних технологій. ",
                    "Наша мета – не просто навчити програмуванню, а й розвинути IT-грамотність, яка стане ключем до успіху в цифрову епоху."
                ],
                modules:[
                    {
                        duration:"2 місяці",
                        title:"Назва модулю",
                        short_description:"Короткий опис етапу навчання у декілька речень.",
                    },
                    {
                        duration:"2 місяці",
                        title:"Назва модулю",
                        short_description:"Короткий опис етапу навчання у декілька речень.",
                    },
                    {
                        duration:"2 місяці",
                        title:"Назва модулю",
                        short_description:"Короткий опис етапу навчання у декілька речень.",
                    },
                    {
                        duration:"2 місяці",
                        title:"Назва модулю",
                        short_description:"Короткий опис етапу навчання у декілька речень.",
                    },
                ]
            }
        ]
    }
}

export default function Index() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
                <div className="block-size flex justify-between items-center gap-8 py-2">
                    {/* Logo */}
                    <img src="/ITBoost_Logo.svg" alt="Logo" className="h-12 w-fit pointer-events-none select-none"/>


                    {/* Navigation */}
                    <div className="flex items-center gap-12">
                        <div className="flex gap-0 items-center">
                            {_static_data.navigation.links.map( (link:any,index:number) => (
                                <a key={index} href={link.href} className="btn btn-nav">{link.label}</a>
                            ) )}
                        </div>

                        <div className="flex items-center gap-4">
                            {_static_data.navigation.actions.map( (action:any,index:number) => (
                                <a key={index} href={action.href} className={clsx("btn",action.type)}>{action.icon}{action.label}</a>
                            ) )}
                        </div>
                    </div>
                </div>
            </div>

            {/* HERO */}
            <div className="flex justify-center">
                <div className="block-size py-40 flex flex-col gap-8">
                    
                    <div className="flex flex-col gap-4">
                        {_static_data.hero.title.map( (item:any,index:number) => (
                            <div key={index} className="flex justify-center items-center gap-4">
                                <p className={clsx("text-4xl font-display leading-none uppercase",item.colored ? "text-violet-500" : "text-gray-900")}>
                                    {item.text}
                                    
                                </p>
                                {item.image && (
                                    <img className="h-20 w-40 rounded-full object-cover inline-block hover:scale-110 hover:rotate-12 duration-200" src={item.image} alt="Hero image"/>
                                )}
                            </div>
                        ) )}
                    </div>

                    <div className="flex justify-center">
                        <p className="text-lg w-full max-w-screen-sm text-gray-600 text-center">
                            {_static_data.hero.description}
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <a href={_static_data.hero.action.href} className="btn btn-primary">{_static_data.hero.action.label}{_static_data.hero.action.icon}</a>
                    </div>

                </div>
            </div>


            {/* OFFERS */}
            {_static_data.offers && (
            <div className="flex justify-center -mt-20 pb-20">
                <div className="block-size flex justify-center">
                    <div className="w-full max-w-screen-sm px-8 py-6 bg-yellow-100 rounded-2xl rotate-[-5deg] flex flex-col gap-4">
                        <p className="text-lg font-display text-gray-900">{_static_data.offers.description}</p>

                        <div className="flex items-center justify-between">
                            <p className=" text-gray-600 font-bold">До кінця пропозиції</p>

                            <div className="py-3 px-6 rounded-full flex items-center gap-2 bg-white">
                                <TimerReset className=" text-yellow-600" size={20}/>
                                <Timer date={_static_data.offers.date}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}


            {/* ABOUT US */}
            <div className="flex justify-center">
                <div className="block-size grid grid-cols-8 gap-6 pb-32">
                    <div className="flex flex-col gap-12 col-span-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-violet-400 text-[20px] font-bold leading-tight">{_static_data.about_us.subtitle}</p>
                            <p className="text-gray-900 text-3xl font-display leading-tight">{_static_data.about_us.title}</p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {_static_data.about_us.content.map( (text:any,index:number) => (
                                <p key={index} className="w-full text-base text-gray-600 leading-snug">
                                    {text}
                                </p>
                            ) )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {_static_data.about_us.cards.map( (card:any,index:number) => (
                                <div key={index} className={clsx("p-6 rounded-2xl flex flex-col gap-4", card.color)}>
                                    {card.icon}

                                    <div className="flex flex-col gap-2">
                                        <p className="text-lg text-gray-900 font-bold">{card.title}</p>
                                        <p className="text-gray-600">{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>

                    <div className="h-full min-h-[450px] col-start-6 col-span-3">
                        <img src={_static_data.about_us.img} alt="About us image" className="w-full h-full object-cover rounded-2xl"/>
                    </div>
                </div>
            </div>


            {/* COURSES */}
            <div className="flex justify-center">
                <div className="block-size p-12 bg-violet-100 flex flex-col gap-12 rounded-3xl">
                    <div className="flex gap-6 items-center">
                        <div className="flex-1 flex flex-col gap-12">
                            <div className="flex flex-col gap-1">
                                <p className="text-violet-400 text-[20px] font-bold leading-tight">{_static_data.courses.courses_list.length>1 ? _static_data.courses.subtitle : _static_data.courses.courses_list[0].subtitle}</p>
                                <p className="text-gray-900 text-3xl font-display leading-tight">{_static_data.courses.courses_list.length>1 ? _static_data.courses.title : _static_data.courses.courses_list[0].title}</p>
                            </div>

                            <div className="flex flex-col gap-8">
                                {_static_data.courses.courses_list.length>1 ? (
                                    <div className="flex flex-col gap-6">
                                        { _static_data.courses.description.map( (desc:any,index:number) => (
                                            <p key={index} className="w-full text-base text-gray-600 leading-snug">{desc}</p>
                                        ) )}
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-6">
                                        { _static_data.courses.courses_list[0].description.map( (desc:any,index:number) => (
                                            <p key={index} className="w-full text-base text-gray-600 leading-snug">{desc}</p>
                                        ) )}
                                    </div>
                                )}

                                <a href={_static_data.courses.action.href} className="btn btn-primary w-fit">{_static_data.courses.action.label}{_static_data.courses.action.icon}</a>
                            </div>
                        </div>

                        <div className="flex-1 min-h-[250px] h-full">
                            <img src={_static_data.courses.img} alt="Course image" className="w-full max-h-[450px] object-cover rounded-xl"/>
                        </div>
                    </div>

                    {_static_data.courses.courses_list.length>1 ? (
                        <div className="grid grid-cols-4 gap-6">
                            { _static_data.courses.courses_list.map( (course:any,index:number) => (
                                <div key={index} className="p-4 rounded-md bg-white flex flex-col gap-2">
                                    <p className="p-3 rounded-full border-violet-500 text-violet-500 text-sm font-bold">{course.duration}</p>
                                    <p className="text-base text-gray-900">{course.title}</p>
                                    <p className="text-sm text-gray-500">{course.short_description}</p>
                                </div>
                            ) )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 gap-6">
                            { _static_data.courses.courses_list[0].modules.map( (module:any,index:number) => (
                                <div key={index} className="p-4 rounded-xl bg-white flex flex-col gap-2">
                                    <p className="px-3 py-1 rounded-full border w-fit border-violet-500 text-violet-500 text-tiny font-bold">{module.duration}</p>
                                    <p className="text-base text-gray-900">{module.title}</p>
                                    <p className="text-tiny text-gray-500">{module.short_description}</p>
                                </div>
                            ) )}
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
}
