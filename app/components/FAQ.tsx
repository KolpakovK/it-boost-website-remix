import { useState } from "react"
import { ChevronDown } from "lucide-react"

function FAQ({question,description}:Readonly<{question:string,description:string}>){
    const [isOpened,setIsOpened] = useState(false)
    return (
    <div className="flex flex-col gap-2 pb-2 border-b border-gray-200" onClick={ () => setIsOpened(!isOpened) }>
        <div className="flex justify-between">
            <p className="text-base lg:text-lg font-display">{question}</p>
            <ChevronDown size={20}/>
        </div>
        {isOpened && (
            <p className="p-4 rounded-xl bg-violet-100 text-base text-gray-800">{description}</p>
        )}
    </div>
    )
}

export default function FAQs({questions}:Readonly<{questions:any}>){
    return (
        <div className="flex flex-col gap-4">
            {questions.map( (question:any,index:number) => (
                <FAQ key={index} question={question.question} description={question.description}/>
            ) )}
        </div>
    )
}