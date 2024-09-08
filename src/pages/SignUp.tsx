//import LogoWhite from '../assets/logo-white.png'
import { Link } from 'react-router-dom'
import Noise from '../assets/bg-noise.png'
import Google from '../assets/google.svg'


export function SignUp() {
    document.title = 'Portal IEC | Registrar'


    return (
        <div className="h-screen flex flex-col items-center bg-[#1e1e1e] text-white overflow-hidden">
            <section className="w-full">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="h-16 mr-2" src={LogoWhite} alt="logo" />
                    </a> */}
                    <div className="w-full rounded-[20px] shadow border-t border-t-[hsla(0,0%,58.7%,0.43)] md:mt-0 sm:max-w-md xl:p-0" style={{ background: `url(${Noise}), linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)`, backgroundRepeat: 'repeat', backgroundSize: '154px' }}>
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Crie sua conta
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu e-mail</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#1e1e1e] dark:border-[rgba(255,255,231,0.45)] dark:placeholder-[#bebebe] dark:text-white dark:focus:ring-white dark:focus:border-white focus:outline-none" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#1e1e1e] dark:border-[rgba(255,255,231,0.45)] dark:placeholder-[#bebebe] dark:text-white dark:focus:ring-white dark:focus:border-white focus:outline-none" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme a senha</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#1e1e1e] dark:border-[rgba(255,255,231,0.45)] dark:placeholder-[#bebebe] dark:text-white dark:focus:ring-white dark:focus:border-white focus:outline-none" />
                                </div>

                                <div className='flex justify-between items-center gap-6'>
                                    <hr className='border w-full border-[#4c4c4c]'></hr>
                                    <div >ou</div>
                                    <hr className='border w-full border-[#4c4c4c]'></hr>
                                </div>
                                <div className='sm:flex w-full justify-between gap-4'>
                                    <div className='flex-1'>
                                        <button className='w-full text-sm bg-transparen hover:bg-white hover:text-[#1e1e1e] p-2.5 rounded-lg border border-[rgba(255,255,231,0.45)] flex justify-center gap-2 items-center'>
                                            <img src={Google} className='w-5'></img>
                                            Entrar com Google
                                        </button>
                                    </div>
                                    <div className='flex-1 max-sm:mt-4'>
                                        <button className='w-full text-sm bg-transparent hover:bg-white hover:text-[#1e1e1e] p-2.5 rounded-lg border border-[rgba(255,255,231,0.45)] flex justify-center gap-2 items-center fill-white hover:fill-[#1e1e1e]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-5' viewBox="0 0 50 50" >
                                                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                                            </svg>
                                            Entrar com Apple
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5 relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#c79cff] checked:border-[#c79cff]" id="remember" />
                                            <span className="absolute text-[#1e1e1e] opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Eu aceito os</label>

                                            <Link to="#" className="text-sm ml-1 font-medium text-[#c79cff] hover:underline dark:text-primary-500">Termos e Condições</Link>
                                        </div>
                                    </div>

                                </div>
                                <button type="submit" className="w-full text-[#1e1e1e] bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-gradient-to-r from-[rgb(255,133,126)] to-[rgb(199,156,255)] dark:focus:ring-primary-800 hover:transform hover:scale-[0.98] hover:transition-all">Criar conta</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Já tem uma conta? <Link to="/login" className="font-medium text-[#c79cff] hover:underline dark:text-primary-500">Faça o login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}