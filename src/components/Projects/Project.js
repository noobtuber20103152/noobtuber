import React from 'react'
import Projectcomponent from './Projectcomponent'
import project from '../data/project'
function Project() {
    return (
        <>
            <section class="text-gray-600 border bg-white  h-auto rounded-lg  body-font  m-4 ">
                <div class="container max-w-none ">
                    <div class="flex flex-wrap">
                        <div class="p-4 md:w-3/3">
                            <div class="flex rounded-lg h-full  flex-col">
                                <div class="flex items-center mb-3">
                                    <h2 class="text-blue-500 text-lg title-font font-bold">Projects</h2>
                                </div>
                                {project.map((e) => {
                                    return <>
                                        <Projectcomponent key={e.title} live={e.livelink[0]} liveLink={e.livelink[1]} tailwind={e.tailwind[0] && e.tailwind[1]} next={e.NextJS[0] && e.NextJS[1]} javascript={e.JavaScript[0] && e.JavaScript[1]} bootstrap={e.Bootstrap[0] && e.Bootstrap[1]} socket={e.Socket[0] && e.Socket[1]} html={e.HTML[0] && e.HTML[1]} css={e.CSS[0] && e.CSS[1]} node={e.NodeJS[0] && e.NodeJS[1]} express={e.ExpressJS[0] && e.ExpressJS[1]} link={e.github} mongo={e.MongoDB[0] && e.MongoDB[1]} react={e.ReactJS[0] && e.ReactJS[1]} title={e.title} desc={e.desc} />
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

export default Project