import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Accordion } from "../components/Accordion";


export function SouNovo() {

    return (
        <>
            <Header />
            <div className="h-full flex-1">


                <div className="overflow-hidden pt-52 pb-28">
                    <div className="max-w-[1100px] ml-auto mr-auto flex w-auto items-center justify-center">
                        <div className="text-center">
                            <div className="mt-10">
                                <h1 className="text-white mb-[10px] text-[45px] font-bold">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff857e] to-[#c79cff]">Novo na igreja?</span>
                                </h1>
                                <div className="">
                                    <p className="text-[21px] text-[#b9b9b9] font-normal">Welcome! These are the next steps for you.</p>

                                    <div className="w-12 h-12 bg-transparent"></div>
                                </div>
                            </div>

                            <div className="flex justify-around items-center">
                                <Button title="Questions" outline />
                                <Button title="Contact us" outline />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" relative">
                    <img src="https://uploads-ssl.webflow.com/62e2e350201fb77d6f1c8c9c/633da9e7a9d6ff66c1f90349_Background%20Shape%202.png" loading="lazy" alt="" className="absolute left-0 top-[50%] right-auto bottom-auto rotate-180 " />
                    <img src="https://uploads-ssl.webflow.com/62e2e350201fb77d6f1c8c9c/633da9e7a9d6ff66c1f90349_Background%20Shape%202.png" loading="lazy" alt="" className="absolute left-auto top-[250%] right-0 bottom-auto" />
                </div>

                <section className="py-20 p-10 z-10 relative">

                    <Accordion
                        title="Conheça a programação da IEC"
                        step="1"
                        buttons={
                            <>
                                <Button title="Get Directions" size="SMALL" />
                                <Button title="View Past Services" size="SMALL" outline />
                            </>
                        }
                        description={
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                                <br /><br /> Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                            </>
                        }
                    />

                    <Accordion title="Entre em um Grupo Familiar" step="2" buttons={
                        <>
                            <Button title="Entrar" size="SMALL" />
                            <Button title="Saiba mais" size="SMALL" outline />
                        </>
                    }
                        description={
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.
                            </>
                        }
                    />

                    <Accordion title="Descubra oportunidades para servir" step="3" buttons={
                        <>
                            <Button title="Bem-vindo como Voluntário" size="SMALL" outline />
                        </>
                    }

                        description={
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                            </>
                        }
                    />
                </section>





            </div>
            <Footer />
        </>
    )
}