import { Link } from 'react-router-dom'
import Noise from '../assets/bg-noise.png'
import LogoWhite from '../assets/logo-white.png'

export function Footer() {
    return (

        <div className="absolute py-[5vh]  bottom-0 max-sm:p-6 z-10 p-10 flex justify-center w-full rounded-t-[20px] border-t border-t-[hsla(0,0%,62%,0.62)]" style={{ background: `url(${Noise}), linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)`, backgroundRepeat: 'repeat', backgroundSize: '154px' }}>
            <div className='py-8 max-w-[1100px] '>
                <div className='flex'>
                    <div className='w-[40%]'>
                        <Link to={'/'}  >
                            <div className='mb-6 flex w-full justify-start'>
                                <img src={LogoWhite} alt="" className='w-[30%]' />
                            </div>
                        </Link>

                        <p className='text-[#929aa1] mb-1'>Rua Castro Alves, 183 - Jardim Colonial - Igarapé/MG</p>
                        <p className='text-[#929aa1] mb-1'>Cultos: Sexta às 20:00 | Domingo às 10:00</p>
                    </div>

                    <div className='flex w-[60%] justify-around'>
                        <div className='flex flex-col text-white justify-start'>
                            <div className='font-semibold text-lg'>Serviços</div>
                            <Link to={'#'} className='mt-4 hover:underline'>Sunday Sermons</Link>
                            <Link to={'#'} className='mt-4 hover:underline'>Eventos</Link>
                            <Link to={'#'} className='mt-4 hover:underline'>Locais</Link>
                            <Link to={'#'} className='mt-4 hover:underline'>FAQ</Link>
                        </div>

                        <div className='flex flex-col text-white justify-start'>
                            <div className='font-semibold text-lg'>Envolva-se</div>
                            <Link to={'#'} className='mt-4 hover:underline'>Voluntário</Link>
                            <Link to={'#'} className='mt-4 hover:underline'>Grupo Familiar</Link>
                            <Link to={'#'} className='mt-4 hover:underline'>Sou novo</Link>
                            <Link to={'#'} className='mt-4 hover:underline'>Ofertas</Link>
                        </div>

                        <div className='flex flex-col text-white justify-start'>
                            <div className='font-semibold text-lg'>Sobre nós</div>
                            <Link to={'#'} className='mt-4 hover:underline'>Diretoria</Link>
                            <Link to={'#'} className='mt-4 hover:underline'>Visão</Link>
                            <Link to={'#'} className='mt-4 hover:underline'>Missão</Link>
                        </div>

                        <div className='flex flex-col text-white justify-start'>
                            <div className='font-semibold text-lg'>Redes Sociais</div>
                            <div className='mt-4 grid grid-cols-2 gap-x-[10px] gap-y-[10px] w-fit'>
                                <Link to={''} className='w-10 h-10 border px-2 flex rounded-full items-center justify-center hover:bg-gradient-to-r hover:from-[#b077fa] hover:to-[#75a1fa]'>
                                    <img src="https://cdn.prod.website-files.com/62e2e350201fb77d6f1c8c9c/62e3fc8ae0b5990b438b2197_Instagram%20Icon.svg" loading="lazy" alt="Instagram icon" className="icon footer-social-media" />
                                </Link>

                                <Link to={''} className='w-10 h-10 border px-2 flex rounded-full items-center justify-center hover:bg-gradient-to-r hover:from-[#b077fa] hover:to-[#75a1fa]'>
                                    <img src="https://cdn.prod.website-files.com/62e2e350201fb77d6f1c8c9c/62e3fc8c21fbc23cf2f4652d_Youtube%20Icon.svg" loading="lazy" alt="YouTube icon" className="icon footer-social-media" />
                                </Link>

                                <Link to={''} className='w-10 h-10 border px-2 flex rounded-full items-center justify-center hover:bg-gradient-to-r hover:from-[#b077fa] hover:to-[#75a1fa]'>
                                    <img src="https://cdn.prod.website-files.com/62e2e350201fb77d6f1c8c9c/62e3fc8c8c6e384af9c336b7_Facebook%20Icon.svg" loading="lazy" alt="Facebook icon" className="icon footer-social-media" />
                                </Link>

                                <Link to={''} className='w-10 h-10 border px-2 flex rounded-full items-center justify-center hover:bg-gradient-to-r hover:from-[#b077fa] hover:to-[#75a1fa]'>
                                    <img src="https://cdn.prod.website-files.com/62e2e350201fb77d6f1c8c9c/62e3fc8a727a2ded91d0138a_TikTok%20Icon.svg" loading="lazy" alt="Tiktok icon" className="icon footer-social-media" />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='w-full h-[1px] my-10 bg-[#e4ebf3]'></div>

                <div className='flex justify-between items-center text-white'>
                    <div className='text-sm'>© 2024 Igreja do Evangelho de Cristo. Powered by <Link to={'http://ronniepettersonn.com.br'} target='_blank' className='hover:underline'>Ronnie Pettersonn</Link>. All rights reserved</div>
                </div>
            </div>
        </div>


    )
}