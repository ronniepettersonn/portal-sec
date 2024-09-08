import Logo from './assets/Logo-Element-Branca.png'
import Noise from './assets/bg-noise.png'
import Blur1 from './assets/blur-1.png'
import Blur2 from './assets/blur-2.png'
import Img1 from './assets/img-1.jpg'
import Img2 from './assets/img-2.jpg'

export function App() {

  return (
    <div className="h-screen flex flex-col items-center bg-[#1e1e1e] text-white">
      <div>
        <img src={Blur1} alt="" className='absolute left-0 top-[10%] right-auto bottom-auto max-w-full' />
        <img src={Blur2} alt="" className='absolute left-auto top-0 right-0 bottom-auto' />
      </div>
      <div className=" py-4 flex justify-center w-full px-10">
        <div className="flex justify-between max-md:justify-center items-center max-w-[1150px] w-full">
          <div>
            <img src={Logo} alt="Logo" className='h-16' />
          </div>
          <div className='text-zinc-400 gap-6 flex max-md:hidden'>
            <span>Palavra</span> <span>/</span>  <span>Edificação</span>   <span>/</span>   <span>Crescimento</span>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex h-full max-w-[1150px] w-full px-10 items-center z-10">

        <div className='text-5xl leading-[1.2em] font-bold md:max-w-[400px]'>
          Em breve o novo portal <br />
          da <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#fffb9c] to-[#ffb69f]' /* style={{ background: `linear-gradient(90deg, #fffb9c, #ffb69f` }} */>IEC</span>  para sua <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#c79cff] to-[#9fbfff]' >edificação</span>
        </div>

        <div className='relative w-[40%] h-[50vh] max-md:hidden'>


          <img src={Img1} alt="" className='rounded-[10px] w-[65%] min-w-[250px] absolute left-auto top-0 right-[20%] bottom-0' />

          <img src={Img2} alt="" className='rounded-[10px] w-[65%] min-w-[250px] absolute left-auto top-auto right-[-20%] bottom-0' />


        </div>
      </div>


      <div className="max-sm:p-6 z-10 p-10 flex justify-center w-full rounded-t-[20px] border-t border-t-[hsla(0,0%,62%,0.62)]" style={{ background: `url(${Noise}), linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55)` }}>
        <div className="flex justify-between items-center max-w-[1150px] w-full max-sm:hidden">
          <div className=''>
            Todos os direitos reservados.
          </div>
          <div className=' gap-4 flex '>
            <a href='https://www.instagram.com/igrejaiec/' target='_blank' className='hover:underline'>Instagram</a> <span>/</span>  <a href='https://www.youtube.com/@iecigarape' target='_blank' className='hover:underline'>Youtube</a>   <span>/</span>   <a href='https://podcasters.spotify.com/pod/show/iec' target='_blank' className='hover:underline'>Podcast</a>
          </div>

        </div>

        <div className="flex flex-col gap-2 justify-between items-center max-w-[1150px] w-full sm:hidden">
          <div className=' gap-4 flex '>
            <a href='https://www.instagram.com/igrejaiec/' target='_blank' className='hover:underline'>Instagram</a> <span>/</span>  <a href='https://www.youtube.com/@iecigarape' target='_blank' className='hover:underline'>Youtube</a>   <span>/</span>   <a href='https://podcasters.spotify.com/pod/show/iec' target='_blank' className='hover:underline'>Podcast</a>
          </div>
          <div className='text-zinc-600'>
            Todos os direitos reservados.
          </div>


        </div>
      </div>
    </div>
  )
}


