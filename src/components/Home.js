import avatar from '../img/avatar.jpg'
import facebookIcon from '../img/facebook.svg'
import linkedinIcon from '../img/linkedin.svg'
import instagramIcon from '../img/instagram.svg'
import gmailIcon from '../img/gmail.svg'
import rockhill from '../img/rockhill.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { isTSMethodSignature } from '@babel/types'

const Home = () => {

    const [repo, setRepo] = useState([])

    useEffect(async () => {
        const res = await axios.get("https://api.github.com/users/x5427876/repos");
        setRepo(res.data);
    }, [])

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
                {repo.map((item) => {
                    return (
                        <div className='lg:col-span-1 lg:row-span-1  col-span-2 row-span-1 bg-gray-900 rounded-3xl m-6'>
                            <p className='text-white font-bold text-3xl ml-12 mt-8'><a href={item.svn_url} >{item.name}</a></p>
                            <p className='text-white font-bold text-1xl ml-12 my-6 grid grid-cols-4'>
                                <div className='lg:col-span-1 col-span-2 flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                                    </svg>
                                    <a class='text-white font-bold text-lg'>{item.pushed_at.substring(0, 10)}</a>
                                </div>
                                <div className='lg:col-span-1 col-span-2 flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:ml-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <a className='text-white font-bold text-lg'>{item.stargazers_count}</a>
                                </div>
                                <div className='lg:col-span-1  col-span-2 flex items-center justify-start mt-4 lg:mt-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:ml-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                    <a className='text-white font-bold text-lg'>{item.watchers_count}</a>
                                </div>
                                <a className='font-bold text-xl text-green-500 lg:col-span-1 col-span-2 mt-4 lg:mt-0'>{item.language ? item.language : 'text'}</a>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home