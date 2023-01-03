import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.css';
import video1 from './videos/climbvid1.mp4';
import ReactPlayer from 'react-player'
import { useRef } from 'react';

function Button() {

    function func() {
        window.open("https://github.com/orgs/DevS-FirstYearUniversity/repositories");

        return (
            null
        )
    }
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    function scrollPage1() {
        ref1.current?.scrollIntoView({ behavior: 'smooth' });

    };
    function scrollPage2() {
        ref2.current?.scrollIntoView({ behavior: 'smooth' });

    };
    return (
        <div>
            <button class="button" onClick={func}>
                <span>GitHub</span>
            </button>
            <div class="a">Dev Shamihoke</div>
            <p ref={ref1} class="placeholder1">Hey there!</p>
            <p ref={ref2} class="placeholder2">1</p>
            <p class="placeholder3">2</p>
            <p class="text1">
                Hey there! Welcome to my website.<br></br>
                If you're only here to check out my projects, feel free to click on the GitHub logo above.<br></br>
                If you'd like to know more about me, hit the scroll button down below!
            </p>
            <p class="text2">
                I'm currently studying Electrical Engineering at Victoria <br></br>
                If you'd like to check out some of my <a href="https://github.com/orgs/DevS-FirstYearUniversity/repositories">First Year Projects</a>, here you go!
            </p>
            <button id="top1" class="scroll1" onClick={scrollPage1}><span>scroll</span></button>
            <button id="top2" class="scroll1" onClick={scrollPage2}><span>scroll</span></button>
            <ReactPlayer class="vid" url={video1} width="108px" height="192px" controls playing="true" loop="true" muted="true" />
        </div>
    )
}

// const Video = () =>{
//     return(
//     <video controls width="100%" class="vid"><source src="https://www.youtube.com/watch?v=k7Q2kt_MZRk&list=RD2vggOrBRXgU&index=2&ab_channel=VibeMusic" type="video/mp4"/>Sorry, your browser doesn't support videos.</video>
//     );
// };
// export default Video;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Button />);