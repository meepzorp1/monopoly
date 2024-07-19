import React, { useState } from 'react'

interface CardProps {
    value: {
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
}

const Card:React.FC<CardProps> = ({ value }) => {
    const [card, setCard] = useState(value);

  return (
    <div className="absolute w-64 h-84 border-black border-2 flex-col" style={{left: `50%`, top: `50%`, transform: 'translate(-50%, -50%)'}}>
        <div className='xxs text-center pt-4' style={{ background: `${card.color}`}}>Title deed</div>
        <div className='text-center text-xl pb-4' style={{ background: `${card.color}`}}>{value.title}</div>
        <div className='pt-4 text-center'>Rent ${value.rent[0]}</div>
        <div className='px-4 flex justify-between'>
            <div>With 1 House</div>
            <div>${value.rent[1]}</div>
        </div>
        <div className='px-4 flex justify-between'>
            <div>With 2 Houses</div>
            <div>${value.rent[2]}</div>
        </div>
        <div className='px-4 flex justify-between'>
            <div>With 3 Houses</div>
            <div>${value.rent[3]}</div>
        </div>
        <div className='px-4 flex justify-between'>
            <div>With 4 Houses</div>
            <div>${value.rent[4]}</div>
        </div>
        <div className='text-center'>With Hotel ${value.rent[5]}</div>
        <div className='text-center'>Mortgage value ${value.mortgageValue}</div>
        <div className='text-center'>House cost ${value.houseCost} each</div>
        <div className='text-center'>Hotels ${value.hotelCost}, plus 4 houses1</div>
    </div>
  )
}

export default Card