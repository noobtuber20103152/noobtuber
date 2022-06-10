import React from 'react'
import education from "../data/education"
function Education() {
    return (
        <>
            <section class="text-gray-600 border h-auto rounded-lg body-font  m-4 ">
                <div class="container">
                    <div class="flex flex-wrap">
                        <div class="p-4 md:w-3/3">
                            <div class="flex rounded-lg h-full  flex-col">
                                <div class="flex items-center mb-3">
                                    <h2 class="text-blue-500 text-lg title-font font-bold">Education</h2>
                                </div>
                                {education.map((e) => {
                                    return <>
                                        <div className='flex flex-row flex-wrap'>
                                            <h1 className='text-xl font-bold text-black'>{e.title}</h1>
                                            <p className='text-lg my-1 text-gray-500 '>{e.course} <br />
                                                <span class="bg-yellow-100  text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">{e.year}</span></p>
                                            <br />
                                        </div>
                                    </>
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Education