import { Form } from "@remix-run/react"
import clsx from "clsx"

export default function ContactForm({darkTheme=true}:Readonly<{darkTheme:boolean}>){
    return(
        <Form method="POST" className="flex flex-col gap-4">

            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className={clsx("text-white text-base font-light",darkTheme && "text-gray-800")}>Ваше ім’я</label>
                    <input type="text" className="h-12 p-2 flex justify-start items-center bg-white rounded-lg text-base leading-none text-black" required />
                </div>
                <div className="flex flex-col gap-2">
                    <label className={clsx("text-white text-base font-light",darkTheme && "text-gray-800")}>Вік дитини</label>
                    <input type="text" className="h-12 p-2 flex justify-start items-center bg-white rounded-lg text-base leading-none text-black" required />
                </div>
                <div className="flex gap-4 flex-col lg:flex-row w-full">
                    <div className="flex flex-col gap-2 flex-1">
                        <label className={clsx("text-white text-base font-light",darkTheme && "text-gray-800")}>
                            Пошта
                            <span className={clsx("text-tiny text-white/50",darkTheme && "!text-gray-500")}> Опціонально</span>
                        </label>
                        <input type="text" className="h-12 p-2 flex justify-start items-center bg-white rounded-lg text-base leading-none text-black"/>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <label className={clsx("text-white text-base font-light",darkTheme && "text-gray-800")}>Телефон</label>
                        <input type="text" className="h-12 p-2 flex justify-start items-center bg-white rounded-lg text-base leading-none text-black" required/>
                    </div>
                </div>
            </div>
            
            <p className={clsx(" font-sans text-tiny text-white/70",darkTheme && "!text-gray-500")}>Інформація про час обробки заявки і час на зворотній дзвінок</p>

            
            <button type="submit"className="btn btn-primary w-fit">Консультація</button>

        </Form>
    )
}