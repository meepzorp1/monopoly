"use client";

import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import Card from './Card';
import { Console } from 'console';

interface PropertyProps {
    value: {
        key: number;
        group: string;
        top?: number;
        left?: number;
        color: string;
        title: string;
        price: number;
        rent: number[];
        houseCost: number;
        hotelCost: number;
        mortgageValue: number;
        houseCount: number;
        hotel: boolean;
    }
    onClick: () => void;
    isClicked: boolean;
}

const Property:React.FC<PropertyProps> = ({ value, onClick, isClicked }) => {
    const [property, setProperty] = useState(value);
    const [showCard, setShowCard] = useState(false);
    const [hovering, setHovering] = useState(false);
    // outside of useState so that when a different property is clicked, this variable is unset
    let clicked = false;

    const handleIn = (e: React.MouseEvent<HTMLDivElement>) => {
        setHovering(true);
    }

    const handleOut = (e: React.MouseEvent<HTMLDivElement>) => {
        setHovering(false);
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        clicked = true;
        onClick();
        console.log(clicked)
    }

    let deg: number;
    switch (property.group) {
        case 'bottom':
            deg = 360;
            break;
        case 'left':
            deg = 90;
            break;
        case 'top':
            deg = 180;
            break;
        case 'right':
            deg = 270;
            break;
        default:
            deg = 360;
            break;
    }

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(`#_${value.key}`, 
            { opacity: 0 },
            { opacity: 0, duration: 2 }
        )
        .fromTo(`#_${value.key}`, 
            { css: { top: Math.random() * 800, left: Math.random() * 800, opacity: 0 }}, 
            { css: { top: property.top, left: property.left, opacity: 1 }, duration: 4 }, '-=2'
        )
        .to(`#_${value.key}`, { rotation: deg, duration: 4}, '-=5')
    }, []);

    useEffect(() => {
        const element: HTMLElement | null = document.querySelector(`#_${value.key}`);
        if (element) {
            if (hovering) {
                element.style.transform = `rotate(3deg) scale(1.1)`;
            }
            else {
                element.style.transform = `rotate(${deg}deg) scale(1)`;
            }
        }
    }, [hovering]);

    useEffect(() => {
        console.log('clicked', isClicked)
    }, [isClicked]);

  return (
    <>
    
    <div    className='property 
                    absolute 
                    w-20 h-28 
                    border-2 
                    divide-y-2 
                    divide-black 
                    border-black
                    rounded-lg' 
            id={`_${value.key}`}
            key={`${value.key}`}
            onMouseLeave={handleOut} 
            onMouseEnter={handleIn} 
            onClick={handleClick}
            style={{ 
                left: property.left? `${property.left}px`: "50px", 
                top: property.top? `${property.top}px`: "50px", 
    }}>
        <div className="property__color h-6 w-full rounded-t-lg" style={{ backgroundColor: `${property.color}` }}></div>
    
        <div className="property__title text-center font-semibold">{property.title}</div>
    </div>
    {isClicked && <Card value={property} />}
    </>
  )
}

export default Property