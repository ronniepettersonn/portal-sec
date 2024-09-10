import { CardGrupoFamiliar } from "../components/CardGrupoFamiliar";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { TitlePage } from "../components/TitlePage";
import Noise from '../assets/bg-noise.png'
import { BannerVoluntario } from "../components/BannerVoluntario";

export function GrupoFamiliar() {
    return (
        <div className="">
            <Header />

            <div className="">

                <TitlePage title="Grupo Familiar" subtitle="Encontre uma comunidade em nossa igreja." />
                <CardGrupoFamiliar />
                <CardGrupoFamiliar />
                <CardGrupoFamiliar />

                <div className="py-8 px-12 border-t-[0.5px] border-[#929aa1] rounded-[20px] max-w-[1100px] mr-auto ml-auto" style={{ background: `url(${Noise}), linear-gradient(180deg, rgba(24,24,24,0.85), rgba(24,24,24,0.85)`, backgroundRepeat: 'repeat', backgroundSize: '154px', backgroundColor: 'rgba(19,19,10,0.9)' }}>
                    <div className="mb-[15px]">
                        <div className="flex w-full justify-between items-center">
                            <h2 className="mt-5 text-4xl text-white font-bold">Entre em um Grupo Familiar</h2>

                            {/* <div>

                            </div> */}
                        </div>

                        <form action="" className="my-[25px]">
                            <div className="grid grid-cols-2 gap-[3vw]" style={{ gridRowGap: '0vh' }}>
                                <div className="flex min-h-[20px] min-w-[50px] flex-col mb-2 items-start flex-1" >
                                    <label htmlFor="First-Name" className="text-[17px] text-[#bebebe] mb-2">First Name</label>
                                    <input className="dark:focus:ring-white placeholder:text-white dark:focus:border-white focus:outline-none mb-4 h-[38px] py-6 px-4 border border-[rgba(225,229,231,0.45)] bg-[#1e1e1e] rounded-[5px] text-white w-full" maxLength={256} name="First-Name" data-name="First Name" placeholder="First name" type="text" id="First-Name" />
                                </div>
                                <div className="flex min-h-[20px] min-w-[50px] flex-col mb-2 items-start flex-1" >
                                    <label htmlFor="Last-Name" className="text-[17px] text-[#bebebe] mb-2">Last Name</label>
                                    <input className="placeholder:text-white dark:focus:ring-white dark:focus:border-white focus:outline-none mb-4 h-[38px] py-6 px-4 border border-[rgba(225,229,231,0.45)] bg-[#1e1e1e] rounded-[5px] text-white w-full" maxLength={256} name="Last-Name" data-name="Last Name" placeholder="Last name" type="text" id="Last-Name" />
                                </div>
                                <div className="flex min-h-[20px] min-w-[50px] flex-col mb-2 items-start flex-1" >
                                    <label htmlFor="Phone-Number" className="text-[17px] text-[#bebebe] mb-2">Phone Number</label>
                                    <input className="placeholder:text-white dark:focus:ring-white dark:focus:border-white focus:outline-none mb-4 h-[38px] py-6 px-4 border border-[rgba(225,229,231,0.45)] bg-[#1e1e1e] rounded-[5px] text-white w-full" maxLength={256} name="Phone-Number" data-name="Phone Number" placeholder="Phone Number" type="text" id="Phone-Number" />
                                </div>
                                <div className="flex min-h-[20px] min-w-[50px] flex-col mb-2 items-start flex-1" >
                                    <label htmlFor="Email" className="text-[17px] text-[#bebebe] mb-2">Email</label>
                                    <input className="placeholder:text-white dark:focus:ring-white dark:focus:border-white focus:outline-none mb-4 h-[38px] py-6 px-4 border border-[rgba(225,229,231,0.45)] bg-[#1e1e1e] rounded-[5px] text-white w-full" maxLength={256} name="Email" data-name="Email" placeholder="Email" type="email" id="Email" />
                                </div>
                            </div>

                            <div className="flex flex-col min-h-[20px] min-w-[50px] mb-2 items-start flex-1" style={{ opacity: "1" }}>
                                <label htmlFor="Connect-Group" className="text-[#bebebe] text-[17px] mb-2">What connect group would you like to join?</label>
                                <select data-name="Connect Group" name="Connect-Group" id="Connect-Group" className="w-full h-12 mb-4 text-[#4c5548] bg-white py-2">
                                    <option value="Christina's - Thursdays at 7:00PM">Christina's - Thursdays at 7:00PM</option>
                                    <option value="Maria's - Wednesday at 6:30PM">Maria's - Wednesday at 6:30PM</option>
                                    <option value="Mohamed's - Wednesday at 7:00PM">Mohamed's - Wednesday at 7:00PM</option>
                                </select>
                            </div>

                            <button type="button" className="bg-gradient-to-r from-[#ff857e] to-[#c79cff] text-[#1e1e1e] rounded-full py-[13px] px-[36px] hover:scale-95 hover:transition-all">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

                <BannerVoluntario />
            </div>

            <Footer />
        </div>

    )
}