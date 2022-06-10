import React from 'react'
import Badge from '../badge/Badge'
import data from "../data/skill"
function Technical() {
    return (
        <>
            <section class="text-gray-600 border h-auto rounded-lg body-font  m-4 ">
                <div class="container">
                    <div class="flex flex-wrap">
                        <div class="p-4 md:w-3/3">
                            <div class="flex rounded-lg h-full  flex-col">
                                <div class="flex items-center mb-3">
                                    <h2 class="text-blue-500 text-lg title-font font-bold">Technical skills </h2>
                                </div>
                                <div className='flex flex-row flex-wrap'>
                                    {data.map((skill) => {
                                        return <>
                                            <Badge name={skill} />
                                        </>
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Technical