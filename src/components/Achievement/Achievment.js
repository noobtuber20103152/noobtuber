import React from 'react'
import AchiveComponent from './AchiveComponent'
import achievement from "../data/achievement"
function Achievment() {
    return (
        <>
            <section class="text-gray-600 border h-auto rounded-lg body-font  m-4 ">
                <div class="container max-w-none ">
                    <div class="flex flex-wrap">
                        <div class="p-4 md:w-3/3">
                            <div class="flex rounded-lg h-full  flex-col">
                                <div class="flex items-center mb-3">
                                    <h2 class="text-blue-500 text-lg title-font font-bold">Achievements</h2>
                                </div>
                                <div className='container p-4'>
                                    {achievement.map((e) => {
                                        return <>
                                            <AchiveComponent textblue={e.link[0]} link={e.link[0] && e.link[1]} title={e.title} />
                                        </>
                                    })}
                                    {/* <AchiveComponent title="We participated in hackmol 3.0 organised by DSC NITJ and were able to secure a position at top 10 teams among 250+ teams." />
                                    <AchiveComponent title="Selected as a frontend developer for improvement and redesign of Dr. B R Ambedkar National Institute Of Technology, Jalandhar official website." />
                                    <AchiveComponent link="https://drive.google.com/file/d/1t-OajhRiVZQE-PL6hW7mGKmVyuCjE5dW/view?usp=sharing" title="Winner of best portfolio website challenge by codepromt instagram page." /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Achievment