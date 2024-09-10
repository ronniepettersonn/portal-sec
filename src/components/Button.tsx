type ButtonProps = {
    title: string
    outline?: boolean
    size?: 'NORMAL' | 'SMALL'
}

export function Button({ title, outline, size = 'NORMAL' }: ButtonProps) {
    return (
        <>
            {
                outline && size === 'SMALL' &&
                <button type='button' className='hover:bg-white hover:text-[#1e1e1d] hover:scale-95 hover:transition-all py-[7px] px-[25px] text-white border-[1px] border-white rounded-full' >{title}</button>
            }

            {
                outline && size === 'NORMAL' &&
                <button type='button' className='hover:bg-white hover:text-[#1e1e1d] hover:scale-95 hover:transition-all py-[13px] px-[36px] text-white border-[2px] border-white rounded-full' >{title}</button>
            }

            {
                size === 'NORMAL' && !outline &&
                <button type="button" className="bg-gradient-to-r from-[#ff857e] to-[#c79cff] text-[#1e1e1e] rounded-full py-[13px] px-[36px] hover:scale-95 hover:transition-all">
                    {title}
                </button>
            }

            {
                size === 'SMALL' && !outline &&
                <button type="button" className="bg-gradient-to-r from-[#ff857e] to-[#c79cff] text-[#1e1e1e] rounded-full py-[7px] px-[25px] hover:scale-95 hover:transition-all">
                    {title}
                </button>
            }

            {/* <button type='button' className='hover:bg-white hover:text-[#1e1e1d] hover:scale-95 hover:transition-all py-[13px] px-[36px] text-white border-[2px] border-white rounded-full' >{title}</button> */}
        </>
    )
}