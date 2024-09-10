import Noise from '../assets/bg-noise.png'

export function CardGrupoFamiliar() {
    return (
        <div className='box-border'>
            <div className="px-10">
                <div className="flex w-auto max-w-[1100px] mx-auto">
                    <div className="w-full ">
                        <div className="">
                            <div className="border-t-[0.5px] border-[hsla(0,0%,68%,0.51)]  backdrop-blur-[15px] flex relative mb-12 p-8 z-[1] justify-between items-center rounded-[20px] " style={{ background: `url(${Noise}), linear-gradient(180deg, rgba(24,24,24,0.85), rgba(24,24,24,0.85)`, backgroundRepeat: 'repeat', backgroundSize: '154px' }}>
                                <div className='flex min-w-[300px]'>
                                    <img src="https://cdn.prod.website-files.com/62e31b3beb160f359542609e/62e9678793a4877ee2620031_Christina.png" alt="" className='w-[100px] rounded-full border border-[hsla(0,0,100%,0.81)]' />

                                    <div className='flex flex-col justify-around ml-[25px]'>
                                        <p className='text-white text-[22px] mb-[10px]'>Eva Mendes</p>
                                        <button type='button' className='hover:bg-white hover:text-[#1e1e1d] py-[7px] px-[25px] text-white border border-white rounded-full' >Participar</button>
                                    </div>
                                </div>

                                <div className='w-[500px]'>
                                    <div className='flex gap-4 items-center'>
                                        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gradient-to-tr from-[#ff857e] to-[#c79cff]">
                                            <img src="https://cdn.prod.website-files.com/62e2e350201fb77d6f1c8c9c/62e6e3b47fe9121916390725_location.svg" loading="lazy" alt="" className="w-5 h-5" />
                                        </div>
                                        <p className="text-[23px] text-white">70 W Bay Street Suite 100 Toronto ON, M3J 2H5</p>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gradient-to-tr from-[#ff857e] to-[#c79cff]">
                                            <img src="https://cdn.prod.website-files.com/62e2e350201fb77d6f1c8c9c/62e96db3fd8eec2fe47e96f0_date.svg" loading="lazy" alt="" className="w-5 h-5" />
                                        </div>
                                        <p className="text-[23px] text-white">Tuesday, 7:00PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}