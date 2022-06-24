import React from 'react'
import { Icon } from '@iconify/react';
function Social() {
    return (
        <>
            <section class="text-gray-600 border h-28  rounded-lg body-font  m-4 ">
                <div class="container">
                    <div class="flex flex-wrap">
                        <div class="p-4 w-12/12">
                            <div class="flex rounded-lg h-full px-4 flex-col">
                                <div class="flex items-center mb-3">
                                    <h2 class="text-blue-500 text-lg title-font font-bold">Social </h2>
                                </div>
                                <div className='flex flex-row flex-wrap justify-center items-center'>
                                    <a target="_blank" href="https://www.linkedin.com/in/ujjawal-rachhoya-054297211" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                    <Icon icon="simple-icons:linkedin" width="30" height="30" />
                                    </a>
                                    <a target="_blank" href="https://github.com/noobtuber20103152" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                    <Icon icon="simple-icons:github" width="30" height="30" />
                                    </a>
                                    <a target="_blank" href="https://leetcode.com/ujjawalrachhoya100/" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                    <Icon icon="simple-icons:leetcode" width="30" height="30" />
                                    </a>

                                    <a target="_blank" href="https://auth.geeksforgeeks.org/user/ujjawalrachhoya100/practice/" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                    <Icon icon="simple-icons:geeksforgeeks" width="30" height="30" />
                                    </a>
                                    <a target="_blank" href="https://codeforces.com/profile/Noob_tuber" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                    <Icon icon="simple-icons:codeforces" width="30" height="30" />
                                    </a>
                                    <a target="_blank" href="https://www.codechef.com/users/ujjawal_100" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                    <Icon icon="simple-icons:codechef" width="30" height="30" />
                                    </a>
                                    <a target="" href="https://api.whatsapp.com/send?phone=8890881464" style={{ alignItems: 'center' }} className='hover:text-blue-500 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                                    <Icon icon="simple-icons:whatsapp" width="30" height="30" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Social