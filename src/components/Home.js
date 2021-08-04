import avatar from '../img/avatar.jpg'
import facebookIcon from '../img/facebook.svg'
import linkedinIcon from '../img/linkedin.svg'
import instagramIcon from '../img/instagram.svg'
import gmailIcon from '../img/gmail.svg'
import rockhill from '../img/rockhill.jpg'

const Home = () => {
    return (
        <div className='grid grid-cols-3 auto-rows-auto2 h-screen  bg-center bg-cover' style={{ backgroundImage: `url(${rockhill})` }} >
            <div className='lg:col-span-1 col-span-3 bg-black bg-opacity-50 lg:h-screen h-screen' >
                <img src={avatar} className='rounded-full w-48 h-48 mx-auto mt-16 lg:mt-48' />
                <p className='text-center mt-10 mb-4 text-4xl text-white font-bold'>Gavin Kung</p>
                <p className='text-center mb-4 text-2xl text-white font-bold'>Junior Sofware Engineer</p>
                <div className='flex justify-center items-center mt-12'>
                    <svg className='text-white w-7' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <a className='ml-2 text-white font-bold text-2xl' href='https://github.com/x5427876'>github.com/x5427876</a>
                </div>
                <div className='flex justify-center items-center mt-2'>
                    <svg className='text-white w-7' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className='ml-2 text-white font-bold text-2xl'>Taipei, Taiwan</p>
                </div>
                <div className='flex justify-center items-center lg:mt-24 mt-12'>
                    <svg className='socialIcon'>
                        <a xlinkHref="https://www.google.com" />
                        <image className='h-10 w-10' xlinkHref={facebookIcon}></image>
                    </svg>
                    <svg className='socialIcon'>
                        <image className='h-10 w-10' xlinkHref={linkedinIcon}></image>
                    </svg>
                    <svg className='socialIcon'>
                        <image className='h-10 w-10' xlinkHref={instagramIcon}></image>
                    </svg>
                    <svg className='socialIcon' href=''>
                        <image className='h-10 w-10' xlinkHref={gmailIcon}></image>
                    </svg>
                </div>
            </div >
            <div className='lg:col-span-2 col-span-3 bg-gradient-to-r from-blue-900 to-green-900 grid grid-cols-2 lg:h-screen'>
                <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                    <p className='text-white font-bold text-3xl ml-12 mt-8'>Simple Todo List</p>
                    <p className='text-white font-bold text-2xl ml-12 my-4'>a simple tool</p>
                    <p className='text-white font-bold text-1xl ml-12 my-4'>JavaScript</p>
                </div>
                <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                    <p className='text-white font-bold text-3xl ml-12 mt-8'>Simple Todo List</p>
                    <p className='text-white font-bold text-2xl ml-12 my-4'>a simple tool</p>
                    <p className='text-white font-bold text-1xl ml-12 my-4'>JavaScript</p>
                </div>
                <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                    <p className='text-white font-bold text-3xl ml-12 mt-8'>Simple Todo List</p>
                    <p className='text-white font-bold text-2xl ml-12 my-4'>a simple tool</p>
                    <p className='text-white font-bold text-1xl ml-12 my-4'>JavaScript</p>
                </div>
                <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                    <p className='text-white font-bold text-3xl ml-12 mt-8'>Simple Todo List</p>
                    <p className='text-white font-bold text-2xl ml-12 my-4'>a simple tool</p>
                    <p className='text-white font-bold text-1xl ml-12 my-4'>JavaScript</p>
                </div>
                <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                    <p className='text-white font-bold text-3xl ml-12 mt-8'>Simple Todo List</p>
                    <p className='text-white font-bold text-2xl ml-12 my-4'>a simple tool</p>
                    <p className='text-white font-bold text-1xl ml-12 my-4'>JavaScript</p>
                </div>
                <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                    <p className='text-white font-bold text-3xl ml-12 mt-8'>Simple Todo List</p>
                    <p className='text-white font-bold text-2xl ml-12 my-4'>a simple tool</p>
                    <p className='text-white font-bold text-1xl ml-12 my-4'>JavaScript</p>
                </div>
                <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                    <p className='text-white font-bold text-3xl ml-12 mt-8'>Simple Todo List</p>
                    <p className='text-white font-bold text-2xl ml-12 my-4'>a simple tool</p>
                    <p className='text-white font-bold text-1xl ml-12 my-4'>JavaScript</p>
                </div>
                <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                    <p className='text-white font-bold text-3xl ml-12 mt-8'>Simple Todo List</p>
                    <p className='text-white font-bold text-2xl ml-12 my-4'>a simple tool</p>
                    <p className='text-white font-bold text-1xl ml-12 my-4'>JavaScript</p>
                </div>
            </div>
        </div>
    )
}

export default Home