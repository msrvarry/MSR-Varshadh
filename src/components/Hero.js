import HeroImg from '../assests/hero.png'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

export default function Hero(){
    return <section id='hero' className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl font-hero-font'>Hi,<br/> I am MSR Varshadh
              <p className='text-2xl'>I am a student studying in Shiv Nadar University - Chennai</p>
            </h1>
            <div className='flex py-10'>
                <a href='#'className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href='#' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href='#' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
                <a href='#' className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/4' src={HeroImg} />
    </section>
}