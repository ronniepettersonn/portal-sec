import IconHome from '../assets/icon-home.svg'

interface TitlePageProps {
    title: string
    subtitle: string
}

export function TitlePage({ subtitle, title }: TitlePageProps) {
    return (
        <div className="px-10 pt-60 pb-40">
            <div className="flex flex-col justify-center items-center">
                <span className='flex my-2
                items-center justify-center w-14 h-14 bg-gradient-to-r from-[#ff857e] to-[#c79cff] rounded-full'>
                    <img src={IconHome} alt="" className='w-[35px]' />
                </span>
                <h1 className="text-white text-5xl font-bold mt-5 mb-[10px]">{title}</h1>
                <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff857e] to-[#c79cff] mb-3">{subtitle}</span>
            </div>
        </div>
    )
}