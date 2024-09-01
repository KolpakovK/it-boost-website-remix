import { Form } from "@remix-run/react"
import { useActionData } from "@remix-run/react"
import clsx from "clsx"

export default function ContactForm({darkTheme=true}:Readonly<{darkTheme:boolean}>){
    const _action_data:any = useActionData()

    return(
        <Form method="POST" className="flex flex-col gap-4">
            <input name="status" readOnly type="text" className="hidden" value={"new"}/>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className={clsx("text-white text-base font-light",darkTheme && "!text-gray-800")}>Ваше ім’я</label>
                    <input type="text" name="name" className="h-12 p-2 flex justify-start items-center bg-white rounded-lg text-base leading-none text-black" required />
                </div>
                <div className="flex flex-col gap-2">
                    <label className={clsx("text-white text-base font-light",darkTheme && "!text-gray-800")}>Вік дитини</label>
                    <input type="number" name="age" className="h-12 p-2 flex justify-start items-center bg-white rounded-lg text-base leading-none text-black" required />
                </div>
                <div className="flex gap-4 flex-col lg:flex-row w-full">
                    <div className="flex flex-col gap-2 flex-1">
                        <label className={clsx("text-white text-base font-light",darkTheme && "!text-gray-800")}>
                            Пошта
                            <span className={clsx("text-tiny text-white/50",darkTheme && "!text-gray-500")}> Опціонально</span>
                        </label>
                        <input name="email" type="email" className="h-12 p-2 flex justify-start items-center bg-white rounded-lg text-base leading-none text-black"/>
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <label className={clsx("text-white text-base font-light",darkTheme && "!text-gray-800")}>Телефон</label>
                        <input name="phone_num" type="text" className="h-12 p-2 flex justify-start items-center bg-white rounded-lg text-base leading-none text-black" required/>
                    </div>
                </div>
            </div>
            
            <p className={clsx(" font-sans text-tiny text-white/70",darkTheme && "!text-gray-500")}>Обробка вашої заявки може зайняти до 24 годин.</p>

            {_action_data && (
                <div className="p-4 rounded-lg bg-green-200 text-base text-green-700">Успіх</div>
            )}
            
            <button type="submit" className="btn btn-primary w-fit">Консультація</button>

            
        </Form>
    )
}