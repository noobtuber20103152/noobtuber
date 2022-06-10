import React from 'react'

function About() {
    return (
        <>
            <section class="text-gray-600 border h-auto rounded-lg body-font  m-4 ">
                <div class="container">
                    <div class="flex flex-wrap">
                        <div class="p-4 md:w-3/3">
                            <div class="flex rounded-lg h-full  flex-col">
                                <div class="flex items-center mb-3">
                                    <h2 class="text-blue-500 text-lg title-font font-bold">About </h2>
                                </div>
                                <div className='flex flex-row'>
                                    <p>I am Ujjawal Rachhoya, 3rd year student at Dr. B R Ambedkar National Institute of technology, Jalandhar pursuing B.Tech study in computer science and engineering. I enjoy creating many interactive and functional websites using react, node js and other many interesting libraries and frameworks like bootstrap , tailwind-css etc and I have 1 year of experience in web development and competitive programming. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About