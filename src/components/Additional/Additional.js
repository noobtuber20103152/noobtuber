import React from 'react'
import Badge from '../badge/Badge'
import additional from "../data/additional"
function Additional() {
    return (
        <>
            <section class="text-gray-600 border h-auto rounded-lg body-font  m-4 ">
                <div class="container">
                    <div class="flex flex-wrap">
                        <div class="p-4 md:w-3/3">
                            <div class="flex rounded-lg h-full  flex-col">
                                <div class="flex items-center mb-3">
                                    <h2 class="text-blue-500 text-lg title-font font-bold">Additional skills </h2>

                                </div>
                                <div className='flex flex-row flex-wrap'>
                                    {additional.map((e) => {
                                        return <>
                                            <Badge name={e} />
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
export default Additional;