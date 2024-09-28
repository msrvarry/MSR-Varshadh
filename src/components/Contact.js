import Resume_Img from '../assests/Resume_Img.jpg'
export default function Contact(){
    return <section id='contact' className='flex flex-col bg-primary px-5 py-32'>
        <div className='py-5 flex flex-col items-center text-white'>
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you would like to discuss more, please contact me:</p>  
            <p className='py-2'><span className='font-bold'>Email: </span>msrvarshadh2004@gmail.com</p>
            <p className='py-2'><span className='font-bold'>Phone: </span>+91 7358450222</p>

        </div>
    </section>
}