import React from 'react'
import Github from '../Github/Github'
import Leetcode from '../Leetcode/Leetcode'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
function Graph() {
    let component = [<Github />, <Leetcode />]
    return (
        <>
            <section class="text-gray-600 border h-auto rounded-lg body-font  m-4 ">
                <Slide>
                    {component.map((e) => (
                        e
                    ))}
                </Slide>
            </section>


        </>
    )
}

export default Graph