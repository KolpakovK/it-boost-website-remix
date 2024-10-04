import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, useActionData } from "@remix-run/react";
import { GraphQLClient, gql } from 'graphql-request'
import { useState, useEffect } from "react";
import { format, intervalToDuration } from "date-fns";
import { clsx } from 'clsx';
import { useLocation } from "react-router-dom";

export const meta: MetaFunction = () => {
    return [
        { title: "IT BOOST" },
        { name: "description", content: "Захоплююча онлайн-школа, де діти віком від 8 до 14 років отримують потужний старт у світі інформаційних технологій." },
        { name: "keywords", content: "IT,Python,діти,розробка,ігри,дизайн,програмування,Україна,школа,навчання,дистанційно,дешево,безпечно,курси,створення ігор" },
    ];
};

import { LucidePhoneCall, ArrowUpRight, TimerReset, BanknoteIcon, Users2, AppWindow, Code2, UserRoundSearch, GraduationCap, ShieldCheck } from "lucide-react";

import Timer from "~/components/Timer";
import ContactForm from "~/components/ContactForm";
import Navigation from "~/components/Navigation";
import FAQs from "~/components/FAQ";



export async function action({request}:ActionFunctionArgs) {
    const data = await request.formData();


    const response = await fetch(`${process.env.SERVER_URL}web-site/call_back_create/`,{
        method: "POST",
        headers:{
            "X-API-KEY" : `1ewr5gwergsdf53g4w1ergwdfs65g4`,
        },
        body: data
    }).then( res => res.json() ).then( (data_res:any) => {

        return data_res;
    }).catch( error => {
        return null;
    });

    return response;
}

export async function loader() {

    const graphQLClient = new GraphQLClient(process.env.CAISY_GQL_ENDPOINT as any, {
        headers: {
          "x-caisy-apikey": process.env.CAISY_API_KEY as any,
        },
    })

    const query  = `
        query MyQuery {
            HomePage {
                about_us {
                cards {
                    ... on SimpleCardOne {
                    color
                    description
                    icon
                    iconColor
                    title
                    }
                }
                content {
                    ... on DescriptionComponent {
                    text
                    }
                }
                img {
                    src
                }
                subtitle
                title
                }
                contacts {
                description
                mail
                mobile
                title
                }
                courses {
                action {
                    href
                    icon
                    label
                    type
                }
                courses_list {
                    ... on CoursesComponent {
                    description {
                        ... on DescriptionComponent {
                        text
                        }
                    }
                    duration
                    modules {
                        ... on ModuleComponent {
                        duration
                        short_description
                        title
                        }
                    }
                    short_description
                    subtitle
                    title
                    paymentOption1Title
                    paymentOption1Description
                    paymentOption1Price
                    paymentOption2Title
                    paymentOption2Description
                    paymentOption2Price
                    }
                }
                description {
                    ... on DescriptionComponent {
                    text
                    }
                }
                img {
                    src
                }
                subtitle
                title
                }
                cta {
                description
                subtitle
                title
                }
                faq {
                questions {
                    ... on FaqItem {
                    description
                    question
                    }
                }
                title
                }
                hero {
                action {
                    href
                    icon
                    label
                    type
                }
                description
                id
                title {
                    ... on HeroTitleComponent {
                    colored
                    image {
                        src
                    }
                    text
                    }
                }
                }
                offers {
                date
                description
                }
                results {
                action {
                    href
                    icon
                    label
                    type
                }
                cards {
                    ... on SimpleCardTwo {
                    description
                    title
                    }
                }
                description
                subtitle
                title
                }
                service {
                cards {
                    ... on SimpleCardOne {
                    color
                    description
                    icon
                    iconColor
                    title
                    }
                }
                subtitle
                title
                }
                values {
                cards {
                    ... on SimpleCardOne {
                    color
                    description
                    icon
                    iconColor
                    title
                    }
                }
                img {
                    src
                }
                subtitle
                title
                }
            }
        }
    `
    const data:any = await graphQLClient.request(query)

    return data.HomePage
}


const _icons:any = {
    "ArrowUpRight":(<ArrowUpRight size={20}/>),
    "BanknoteIcon":(<BanknoteIcon size={40}/>),
    "Users2":(<Users2 size={40}/>),
    "AppWindow":(<AppWindow size={40}/>),
    "Code2":(<Code2 size={40}/>),
    "UserRoundSearch": (<UserRoundSearch size={40}/>),
    "GraduationCap": (<GraduationCap size={40}/>),
    "ShieldCheck": (<ShieldCheck size={40}/>),
}

const _colors = {
    bg:[
        "bg-green-100",
        "bg-violet-100",
        "bg-orange-100",
        "bg-yellow-100",
    ],
    text:[
        "text-green-700",
        "text-violet-700",
        "text-orange-700",
        "text-yellow-700",
    ],
    border:[
        "border border-green-700",
        "border border-violet-700",
        "border border-orange-700",
        "border border-yellow-700",
    ],
}

export default function Index() {
    const location = useLocation();
    const _loader_data:any = useLoaderData();
    const [isLoading,setIsLoading] = useState(true)

    useEffect( () => {
        setIsLoading(false)
        console.log(_loader_data)
    }, [_loader_data])

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div className="flex flex-col">
            {isLoading && (<div>LOADING</div>)}

            {!isLoading && (
            <div>
                <Navigation/>

                {/* HERO */}
                <div className="flex justify-center relative" id="home">

                    <img src="/LinesGreen.svg" className="-z-10 absolute top-0 left-0 w-full"/>

                    <div className="container py-32 lg:py-40 flex flex-col gap-6 lg:gap-8">

                        
                        
                        <div className="flex flex-col gap-0 lg:gap-4">
                            {_loader_data.hero.title.map( (item:any,index:number) => (
                                <div key={index} className="flex lg:justify-center items-center gap-4">
                                    <p className={clsx(" text-xl lg:text-4xl font-display leading-tight lg:leading-none uppercase",item.colored ? "text-violet-500" : "text-gray-900")}>
                                        {item.text}
                                        
                                    </p>
                                    {item.image && (
                                        <img className="w-20 h-8 lg:h-20 lg:w-40 rounded-full object-cover inline-block hover:scale-110 hover:rotate-12 duration-200" src={item.image.src} alt="Hero image"/>
                                    )}
                                </div>
                            ) )}
                        </div>

                        <div className="flex lg:justify-center">
                            <p className="text-base lg:text-lg w-2/3 lg:w-full max-w-screen-sm text-gray-600 lg:text-center">
                                {_loader_data.hero.description}
                            </p>
                        </div>

                        <div className="flex lg:justify-center">
                            <a href={_loader_data.hero.action.href} className="btn btn-primary">{_loader_data.hero.action.label}{_icons[_loader_data.hero.action.icon]}</a>
                        </div>

                    </div>
                </div>


                {/* OFFERS */}
                {_loader_data.offers && (
                <div className="flex justify-center -mt-20 pb-20">
                    <div className="container flex justify-center">
                        <div className="w-full max-w-screen-sm p-4 lg:px-8 lg:py-6 bg-yellow-100 rounded-2xl rotate-[-5deg] flex flex-col gap-4">
                            <p className="text-base lg:text-lg font-display text-gray-900">{_loader_data.offers.description}</p>

                            <div className="flex items-center justify-between">
                                <p className=" text-gray-600 font-bold">До кінця пропозиції</p>

                                <div className="py-3 px-6 rounded-full flex items-center gap-2 bg-white">
                                    <TimerReset className=" text-yellow-600" size={20}/>
                                    <Timer date={_loader_data.offers.date}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}


                {/* ABOUT US */}
                <div className="flex justify-center" id="about">
                    <div className="container flex flex-col-reverse lg:grid grid-cols-8 gap-12 lg:gap-6 pb-32">
                        <div className="flex flex-col gap-6 lg:gap-12 col-span-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-violet-500 text-base lg:text-[20px] font-bold leading-tight">{_loader_data.about_us.subtitle}</p>
                                <p className="text-gray-900 text-lg lg:text-3xl font-display leading-tight">{_loader_data.about_us.title}</p>
                            </div>

                            <div className="flex flex-col gap-4 lg:gap-6">
                                {_loader_data.about_us.content.map( (text:any,index:number) => (
                                    <p key={index} className="w-full text-base text-gray-600 leading-snug">
                                        {text.text}
                                    </p>
                                ) )}
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-0">
                                {_loader_data.about_us.cards.map( (card:any,index:number) => (
                                    <div key={index} className={clsx("p-6 rounded-2xl flex flex-col gap-4", _colors.bg[index])}>
                                        <div className={_colors.text[index]}>
                                            {_icons[card.icon]}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <p className="text-lg text-gray-900 font-bold">{card.title}</p>
                                            <p className="text-gray-600">{card.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>

                        <div className="h-full min-h-[450px] col-start-6 col-span-3">
                            <img src={_loader_data.about_us.img.src} alt="About us image" className="w-full h-full object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div>


                {/* COURSES */}
                <div className="flex justify-center relative" id="courses">

                    <img src="/LinesYellow.svg" className="-z-10 absolute top-0 left-0 w-full"/>

                    <div className="container py-20 lg:p-12 bg-violet-100 flex flex-col gap-12 lg:rounded-3xl">
                        <div className="flex gap-6 items-center">
                            <div className="flex-1 flex flex-col gap-6 lg:gap-12">
                                <div className="flex flex-col gap-1">
                                    <p className="text-violet-500 text-base lg:text-[20px] font-bold leading-tight">{_loader_data.courses.courses_list.length>1 ? _loader_data.courses.subtitle : _loader_data.courses.courses_list[0].subtitle}</p>
                                    <p className="text-gray-900 text-lg lg:text-3xl font-display leading-tight">{_loader_data.courses.courses_list.length>1 ? _loader_data.courses.title : _loader_data.courses.courses_list[0].title}</p>
                                </div>

                                <div className="flex flex-col gap-4 lg:gap-8 lg:w-3/4">
                                    {_loader_data.courses.courses_list.length>1 ? (
                                        <div className="flex flex-col gap-6">
                                            { _loader_data.courses.description.map( (desc:any,index:number) => (
                                                <p key={index} className="w-full text-base text-gray-600 leading-snug">{desc.text}</p>
                                            ) )}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col gap-6">
                                            { _loader_data.courses.courses_list[0].description.map( (desc:any,index:number) => (
                                                <p key={index} className="w-full text-base text-gray-600 leading-snug">{desc.text}</p>
                                            ) )}
                                        </div>
                                    )}

                                    <a href={_loader_data.courses.action.href} className="btn btn-primary w-fit">{_loader_data.courses.action.label}{_icons[_loader_data.courses.action.icon]}</a>
                                </div>
                            </div>

                            <div className="flex-1 min-h-[250px] h-full hidden lg:block">
                                <img src={_loader_data.courses.img.src} alt="Course image" className="w-full max-h-[450px] object-cover rounded-xl"/>
                            </div>
                        </div>

                        {_loader_data.courses.courses_list.length>1 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                                { _loader_data.courses.courses_list.map( (course:any,index:number) => (
                                    <div key={index} className="p-4 rounded-md bg-white flex flex-col gap-2">
                                        <p className="p-3 rounded-full border-violet-500 text-violet-500 text-sm font-bold">{course.duration}</p>
                                        <p className="text-base font-bold text-gray-900">{course.title}</p>
                                        <p className="text-base lg:text-tiny text-gray-500">{course.short_description}</p>
                                    </div>
                                ) )}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4 lg:gap-8">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                                    { _loader_data.courses.courses_list[0].modules.map( (module:any,index:number) => (
                                        <div key={index} className="p-4 rounded-xl bg-white flex flex-col gap-2">
                                            <p className="px-3 py-1 rounded-full border w-fit border-violet-500 text-violet-500 text-tiny font-bold">{module.duration}</p>
                                            <p className="text-base font-bold text-gray-900">{module.title}</p>
                                            <p className="text-base lg:text-tiny text-gray-500">{module.short_description}</p>
                                        </div>
                                    ) )}
                                </div>

                                <div className="flex flex-col lg:flex-row gap-6">
                                    <div className="px-6 py-8 rounded-xl bg-violet-500 flex flex-col gap-2 w-full hover:scale-105 duration-150">
                                        <p className="text-lg font-medium text-white">{_loader_data.courses.courses_list[0].paymentOption1Title}</p>
                                        <p className="text-base text-white/75">{_loader_data.courses.courses_list[0].paymentOption1Description}</p>
                                        <p className="text-xl font-bold text-white">{_loader_data.courses.courses_list[0].paymentOption1Price} <span className=" text-tiny text-white/50">гривень за місяць</span></p>
                                    </div>

                                    <div className="px-6 py-8 rounded-xl bg-violet-200 flex flex-col gap-2 w-full hover:scale-105 duration-150">
                                        <p className="text-lg font-medium text-gray-900">{_loader_data.courses.courses_list[0].paymentOption2Title}</p>
                                        <p className="text-base  text-gray-500">{_loader_data.courses.courses_list[0].paymentOption2Description}</p>
                                        <p className="text-xl font-bold text-gray-800">{_loader_data.courses.courses_list[0].paymentOption2Price} <span className=" text-tiny text-gray-600">гривень за місяць</span></p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>


                {/* RESULTS */}
                <div className="flex justify-center">
                    <div className="container flex flex-col gap-8 lg:gap-16 py-32 lg:py-40">

                        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6">

                            <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-4">
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-base lg:text-lg text-violet-500">{_loader_data.results.subtitle}</p>
                                    <p className="font-display text-lg lg:text-2xl text-black">{_loader_data.results.title}</p>
                                </div>

                                <p className="text-base text-gray-600 text-left flex flex-col">
                                    {_loader_data.results.description}
                                </p>
                            </div>

                            <div className="col-span-1 lg:col-span-4 flex lg:justify-end items-end">
                                <a href={_loader_data.results.action.href} className="btn btn-primary w-fit">
                                    {_loader_data.results.action.label}
                                    {_icons[_loader_data.results.action.icon]}
                                </a>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                            {_loader_data.results.cards.map( (card:any,index:number) => (
                                <div key={index} className="p-4 flex flex-col gap-2 bg-gray-100 rounded-2xl">
                                    <p className=" text-tiny text-gray-700">{index+1}</p>
                                    <p className={clsx("text-base lg:text-lg font-bold",_colors.text[index])}>{card.title}</p>
                                    <p className="text-base text-gray-500">{card.description}</p>
                                </div>
                            ) )}
                        </div>

                    </div>
                </div>

                
                {/* WHY IT */}
                <div className="flex justify-center" id="benefits">
                    <div className="container flex flex-col gap-8 lg:gap-16 pb-32 lg:pb-40">

                        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6">

                            <div className="flex flex-col gap-1 lg:col-span-4">

                                <p className="font-bold text-base lg:text-lg text-violet-500 font-sans">{_loader_data.service.subtitle}</p>
                                <p className="font-display text-lg lg:text-2xl text-black">{_loader_data.service.title}</p>
                                
                            </div>

                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

                            {_loader_data.service.cards.map( (card:any,index:number) => (
                                <div key={index} className={clsx("p-4 lg:p-12 flex flex-col gap-4 rounded-3xl relative",index==0 && "row-span-2", _colors.bg[index])}>
                                    <p className={clsx("px-3 w-fit py-1 rounded-full text-base z-10",_colors.border[index],_colors.text[index])}>{card.description}</p>
                                    <p className={clsx("text-base lg:text-lg font-bold font-sans z-10",_colors.text[index])}>{card.title}</p>

                                    {index==0 && (
                                        <img src="DecorationStarts.svg" alt="decoration" className=" absolute left-6 bottom-6 h-1/4 hidden lg:block"/>
                                    )}
                                </div>
                            ) )}

                        </div>

                    </div>
                </div>
                

                {/* CTA */}
                <div className="flex justify-center">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 rounded-xl lg:rounded-3xl bg-black p-6 lg:p-12 overflow-hidden relative">

                            <img src="/LinesWhite.svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen pointer-events-none"/>

                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-[1.25rem] text-violet-300 font-sans">{_loader_data.cta.subtitle}</p>
                                    <p className="font-display text-lg lg:text-2xl text-white">{_loader_data.cta.title}</p>
                                </div>
                                <p className="font-sans text-base lg:text-lg text-white text-left flex flex-col">
                                    {_loader_data.cta.description}
                                </p>
                            </div>

                            <ContactForm darkTheme={false}/>

                        </div>
                    </div>
                </div>

                
                {/* FAQ */}
                <div className="flex justify-center">
                    <div className="container flex flex-col gap-8 lg:gap-16 py-32 lg:py-40">
                        <p className="font-display text-lg lg:text-2xl text-black">{_loader_data.faq.title}</p>

                        <FAQs questions={_loader_data.faq.questions}/>
                    </div>
                </div>


                {/* ABOUT US */}
                <div className="flex justify-center">
                    <div className="container flex flex-col-reverse lg:grid grid-cols-8 gap-12 lg:gap-6 pb-32">
                        <div className="flex flex-col gap-6 lg:gap-12 col-span-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-violet-500 text-base lg:text-[20px] font-bold leading-tight">{_loader_data.values.subtitle}</p>
                                <p className="text-gray-900 text-lg lg:text-3xl font-display leading-tight">{_loader_data.values.title}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-0">
                                {_loader_data.values.cards.map( (card:any,index:number) => (
                                    <div key={index} className={clsx("p-6 rounded-2xl flex flex-col gap-4", _colors.bg[index])}>
                                        <div className={_colors.text[index]}>
                                            {_icons[card.icon]}
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <p className="text-lg text-gray-900 font-bold">{card.title}</p>
                                            <p className="text-gray-600">{card.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>

                        <div className="h-full min-h-[450px] col-start-6 col-span-3">
                            <img src={_loader_data.values.img.src} alt="About us image" className="w-full h-full object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div>
                

                {/* CONTACTS */}
                <div className="flex justify-center pb-8 lg:pb-24" id="contacts">
                    <div className="container">
                        <div className="box-border p-4 lg:p-16 rounded-xl lg:rounded-3xl bg-violet-100 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">

                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-[1.25rem] text-violet-500 font-sans">{_loader_data.contacts.subtitle}</p>
                                    <p className="font-display text-lg lg:text-2xl text-black">{_loader_data.contacts.title}</p>
                                </div>

                                
                                <p className="text-base lg:text-lg text-black/70">
                                    {_loader_data.contacts.description}
                                </p>


                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pt-3 lg:pt-8">
                                    <div className="flex flex-col gap-1">
                                        <p className=" text-tiny text-gray-600 leading-none">Мобільній</p>
                                        <a href={`tel:${_loader_data.contacts.mobile}`} className=" text-[20px] font-bold text-black leading-none">{_loader_data.contacts.mobile}</a>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className=" text-tiny text-gray-600 leading-none">Пошта</p>
                                        <a href={`mailto:${_loader_data.contacts.mail}`} className=" text-[20px] font-bold text-black leading-none">{_loader_data.contacts.mail}</a>
                                    </div>
                                </div>
                            </div>

                            <ContactForm darkTheme={true}/>

                        </div>
                    </div>
                </div>
                

                <div className="flex justify-center pb-12">
                    <div className="container flex gap-2 flex-wrap items-center">

                        <a href="/privacy-policy" className=" text-violet-500 underline hover:text-violet-300 duration-150">Політика конфіденційності</a>
                        <a href="/terms-of-use" className=" text-violet-500 underline hover:text-violet-300 duration-150">Договір на надання послуг</a>

                    </div>
                </div>

            </div>
            )}
        </div>
    );
}
