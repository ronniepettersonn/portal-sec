import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoWhite from '../assets/logo-white.png'

export function Header() {
    const navigate = useNavigate()

    const location = useLocation()

    console.log(location.pathname, 'nome da pagina')

    function handleGoOferta() {
        navigate('/oferta')
    }

    return (
        <div className="backdrop-blur-[15px] fixed z-50 w-[100vw] px-[1.8rem] py-[2.5rem]  bg-[rgba(30,30,30,0.8)] border-b-[0.75px] border-b-white">
            <div className="flex items-center justify-center mr-auto ml-auto max-w-[1100px]">
                <div className="flex justify-between items-center flex-1">
                    <Link to={''} className="-order-1">
                        <img src={LogoWhite} alt="" className="max-h-[31px] hover:scale-95 duration-300 ease-in-out cursor-pointer" />
                    </Link>

                    <nav className="flex justify-between items-center relative float-right gap-[10px]">
                        <Link to={'/sounovo'} className={`${location.pathname === '/sounovo' ? 'border border-white' : 'border-transparent'} hover:border hover:border-white border  hover:px-4 hover:py-[5px] max-w-[1100px] rounded-full py-[5px] px-4 text-white uppercase relative inline-block align-top decoration-0 text-left mx-auto`}>Sou novo</Link>
                        <Link to={'/servicos'} className={`${location.pathname === '/servicos' ? 'border border-white' : 'border-transparent'} hover:border border  hover:border-white hover:px-4 hover:py-[5px] max-w-[1100px] rounded-full py-[5px] px-4 text-white uppercase relative inline-block align-top decoration-0 text-left mx-auto`}>serviços</Link>
                        <Link to={'/grupofamiliar'} className={`${location.pathname === '/grupofamiliar' ? 'border border-white' : 'border-transparent'} hover:border border  hover:border-white hover:px-4 hover:py-[5px] max-w-[1100px] rounded-full py-[5px] px-4 text-white uppercase relative inline-block align-top decoration-0 text-left mx-auto`}>grupo familiar</Link>
                        <Link to={'/sobrenos'} className={`${location.pathname === '/sobrenos' ? 'border border-white' : 'border-transparent'} hover:border border  hover:border-white hover:px-4 hover:py-[5px] max-w-[1100px] rounded-full py-[5px] px-4 text-white uppercase relative inline-block align-top decoration-0 text-left mx-auto`}>sobre nós</Link>
                    </nav>

                    <div>
                        <button onClick={handleGoOferta} className="hover:scale-95 transition-all text-[#1e1e1e] bg-gradient-to-r rounded-full py-[7px] px-[25px] from-[#c79cff] to-[#9fbfff]">Oferta</button>
                    </div>

                </div>
            </div>
        </div>
    )
}