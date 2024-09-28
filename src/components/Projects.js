import MouseImg from '../assests/Virtual_Mouse.jpg'
import SmartStickVid from '../assests/Smart_Stick_Vid.mp4'
import QRCode from '../assests/QR_Code.png'

export default function Projects(){
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">   
                <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                <p>These are some of the projects I have built using Python, IoT and much more. Check them out</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                    <img className='h-[200px]' src={MouseImg}/>
                    <div className='project-desc bottom-0'>
                        <p className='text-center py-5 px-5'>A virtual mouse cursor using Python and OpenCV</p>
                    </div>
                </div>
                <div className='relative'>
                    <video className='h-[200px]' src={SmartStickVid} controls/>
                    <div className='project-desc bottom-0'>
                        <p className='text-center py-5 px-5'>A smart stick for blind people using Arduino and IoT</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px]' src={QRCode}/>
                    <div className='project-desc bottom-0'>
                        <p className='text-center py-5 px-5'>A QR COde based attendance system using Python</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}