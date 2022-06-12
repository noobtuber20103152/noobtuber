import { AWN } from 'awesome-notifications';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header() {
    const [copy, setcopy] = useState("");
    const onclick = () => {
        setcopy(false);
        let text = window.location.href;
        navigator.clipboard.writeText(text)
        setcopy(text)
        toast.success("Now, share the copied link to your friends 😜😜", {
            position: toast.POSITION.TOP_RIGHT
        });

    }
    return (
        <>
            <ToastContainer />
            <section class="text-gray-600 z-10 body-font rounded-lg md:sticky bg-gray-900/10 bg-opacity-20 backdrop-blur-lg  drop-shadow-lg top-1 border  m-4">
                <div class="container md:px-5 px-0 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap">
                        <div class="p-4 lg:w-12/12 md:w-full">
                            <div class="flex rounded-lg   p-0  sm:flex-row flex-col">
                                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-0">
                                    <img src="./images/img1.jpg" className='rounded-full' width={100} alt="" />
                                </div>
                                <div class="flex-grow">
                                    <h2 class=" text-xl text-blue-500 title-font font-bold">Ujjawal Rachhoya</h2>
                                    <p className='leading-relaxed text-ellipsis font-bold'>MERN stack developer</p>
                                    <p class=" hover:cursor-pointer leading-relaxed text-base">CSE Sophomore, Quick learner, Self motivated, Enthusiastic</p>
                                    <div className='flex flex-row'>
                                        <a target="_blank" href="https://drive.google.com/file/d/1bjn6RVfMfdEhfWM5Kz3PG-oFzqF-FYlq/view?usp=sharing" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                                <path fill='blue' fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                                            </svg>
                                        </a>
                                        <a onClick={onclick} href={`whatsapp://send?text=${copy}`} data-action="share/whatsapp/share" style={{ alignItems: 'center' }} className='hover:text-blue-500 hover:cursor-pointer h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="blue" />
                                            </svg>
                                        </a>
                                        <a target="_blank" href="https://noobtuber20103152.github.io/ujjawalishere/#" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-broadcast" viewBox="0 0 16 16">
                                                <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" fill="blue" />
                                            </svg>
                                        </a>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Header