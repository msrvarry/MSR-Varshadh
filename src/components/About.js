import AboutImg from '../assests/about.png'
export default function About(){
    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>My name is MSR Varshadh and I am an undergrad at Shiv Nadar University, Chennai </p>
                <p className='pb-5'>I am proficient in skills like HTML, CSS and JavaScript.</p>
                {/* <p className='pb-5'>In backend I know Node.js, Express.js, MongoDB and MySQL.</p> */}
            </div>
                
        </div>
    </section>
}