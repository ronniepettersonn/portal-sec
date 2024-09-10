import { ReactNode, useState } from "react"
import Noise from '../assets/bg-noise.png'

interface AccordionProps {
    title: string
    step: string
    buttons?: ReactNode
    description: ReactNode
}

export function Accordion({ title, step, buttons, description }: AccordionProps) {
    const [aberto, setAberto] = useState(false)

    function handleOpen() {
        setAberto(!aberto)
    }
    return (

        <div className="max-w-[1100px] flex justify-center flex-col ml-auto mr-auto " >
            <div className="flex flex-col w-full mb-8 py-8 px-12 rounded-[20px] text-white " style={{ background: `url(${Noise}), linear-gradient(180deg, rgba(24,24,24,0.85), rgba(24,24,24,0.85)`, backgroundRepeat: 'repeat', backgroundSize: '154px' }} >
                <div className="flex w-full justify-between items-center my-[15px]" onClick={handleOpen}>
                    <div className="flex items-center ">
                        <div className="flex w-[55px] h-[55px] justify-center items-center rounded-full border-[2px] border-white mr-[15px]">
                            <div>{step}</div>
                        </div>
                        <p className="text-[22px] font-normal">{title}</p>
                    </div>

                    <div className={`bg-gradient-to-r from-[#ff857e] to-[#c79cff] rounded-full p-[10px] h-fit flex justify-center items-center ${aberto ? 'rotate-180 duration-700' : 'duration-700'}`}>
                        <img src="https://uploads-ssl.webflow.com/62e2e350201fb77d6f1c8c9c/62e581daa91d99b34b8a12aa_arrow.svg" loading="lazy" alt="Arrow
                                " className="rotate-90 max-w-[100%]" />
                    </div>
                </div>


                <div className={`max-w-[722px] transition-all  overflow-hidden ${aberto ? ' w-[100%] max-h-screen duration-500' : 'max-h-0 duration-500'}`}>
                    <p className="text-[21px] text-[#b9b9b9]">{description}</p>

                    <div className="flex gap-5 mt-12 mb-[10px]">
                        {buttons}
                        {/* <Button title="Get Directions" size="SMALL" />
                        <Button title="View Past Services" size="SMALL" outline /> */}
                    </div>

                </div>
            </div>
        </div>

    )
}