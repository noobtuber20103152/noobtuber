import React from 'react'
import Badge from '../badge/Badge'
function Projectcomponent(props) {
    return (
        <>
            <div className='flex flex-col my-3 px-5 -z-0 bg-white/60 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-3 border'>
                <h1 className='text-lg text-black font-semibold mb'>{props.title}</h1>
                <p>{props.desc}</p>
                <div className='flex flex-row'>
                    <a href={props.link} target="_blank" style={{ alignItems: 'center' }} className='hover:text-blue-100 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                        <img src="https://cuvette.tech/app/static/media/codeIcon.572d9906.svg" alt="" />
                    </a>
                    {props.live && <a href={props.liveLink} target="_blank" style={{ alignItems: 'center' }} className='hover:text-blue-100 h-11 w-11 hover:bg-blue-100  flex justify-center  rounded-full '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" fill="black" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z" />
                        </svg>
                    </a>}
                </div>

                <div className="flex flex-wrap flex-row">
                    {props.next && <Badge name="Next JS" />}
                    {props.node && <Badge name="NodeJs" />}
                    {props.react && <Badge name="React.js" />}
                    {props.mongo && <Badge name="MongoDB" />}
                    {props.express && <Badge name="Express Js" />}
                    {props.javascript && <Badge name="JavaScript" />}
                    {props.bootstrap && <Badge name="Bootstrap" />}
                    {props.tailwind && <Badge name="Tailwind CSS" />}
                    {props.socket && <Badge name="socket.io" />}
                    {props.html && <Badge name="HTML5" />}
                    {props.css && <Badge name="CSS" />}

                </div>
            </div>

        </>
    )
}

export default Projectcomponent