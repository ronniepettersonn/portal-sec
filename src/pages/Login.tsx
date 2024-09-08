//import LogoWhite from '../assets/logo-white.png'
import Noise from '../assets/bg-noise.png'

export function Login() {
    document.title = 'Portal IEC | Login'
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
                                Entre com sua conta
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
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Lembrar-me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-[#c79cff] hover:underline dark:text-primary-500">Esqueceu a senha?</a>
                                </div>
                                <button type="submit" className="w-full text-[#1e1e1e] bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  bg-gradient-to-r from-[rgb(255,133,126)] to-[rgb(199,156,255)] dark:focus:ring-primary-800 hover:transform hover:scale-[0.98] hover:transition-all">Entrar</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Ainda não tem uma conta? <a href="#" className="font-medium text-[#c79cff] hover:underline dark:text-primary-500">Criar conta</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}