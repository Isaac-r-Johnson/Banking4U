import React, { useState } from 'react';
import Tooltip from './Tooltip';

const Slider = ({ data }) => {
    const [toLeft, setToLeft] = useState(0);
    const [highlightIndex, setHighlightIndex] = useState(1);
    const [toRight, setToRight] = useState(2);
    const [hover, setHover] = useState(false);

    const left = () => {
        if (toLeft-1 < 0){
            setToLeft(data.length-1);
        }
        else {
            setToLeft(toLeft-1);
        }
        if (highlightIndex-1 < 0){
            setHighlightIndex(data.length-1);
        }
        else {
            setHighlightIndex(highlightIndex-1);
        }
        if (toRight-1 < 0){
            setToRight(data.length-1);
        }
        else {
            setToRight(toRight-1);
        }

    }
    const right = () => {
        if (toLeft+1 > data.length-1){
            setToLeft(0);
        }
        else {
            setToLeft(toLeft+1);
        }
        if (highlightIndex+1 > data.length-1){
            setHighlightIndex(0);
        }
        else {
            setHighlightIndex(highlightIndex+1);
        }
        if (toRight+1 > data.length-1){
            setToRight(0);
        }
        else {
            setToRight(toRight+1);
        }
    }

    const startHover = (e) => {
        e.preventDefault();
        setHover(true);
        console.log(data[highlightIndex].name);
    }
    const endHover = (e) => {
        e.preventDefault();
        setHover(false);
    }

    return (
      <div className="slider">
        <div className='slider-arrow' onClick={left}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="slider-arrow-icon bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
             </svg>
        </div>

        <div className='avatars'>
            <div className='avatar' ><img src={data[toLeft].image} alt={data[toLeft].name}/></div>
            <Tooltip content={data[highlightIndex].name}>
                <div className='avatar selected' onMouseEnter={e => startHover(e)} onMouseLeave={e => endHover(e)}><img src={data[highlightIndex].image} alt={data[highlightIndex].name}/></div>
            </Tooltip>
            <div className='avatar'><img src={data[toRight].image} alt={data[toRight].name}/></div>
        </div>

        <div className='slider-arrow' onClick={right}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="slider-arrow-icon bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
        </div>
      </div>
    );
};

export default Slider;