"use client";

import React, { ReactElement, useState, useEffect, use } from 'react'
import Property from './components/Property'
import Corners from './components/Corners'

interface value {
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

const Board = () => {
    const propertys: ReactElement[] = [];
    const [clickedChild, setClickedChild] = useState(0);

    const value: value[] = [
      {
        key: 1,
        group: 'bottom',
        top: 816,
        left: 736,
        color: 'brown',
        title: 'Mediter ranean Avenue',
        price: 60,
        rent: [2, 10, 30, 90, 160, 250],
        houseCost: 50,
        hotelCost: 50,
        mortgageValue: 30,
        houseCount: 0,
        hotel: false
      },
      {
        key: 2,
        group: 'bottom',
        top: 816,
        left: 658,
        color: '#eee',
        title: 'Comm unity Chest',
        price: 0,
        rent: [0, 0, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 0,
        houseCount: 0,
        hotel: false
      },
      {
        key: 3,
        group: 'bottom',
        top: 816,
        left: 580,
        color: 'brown',
        title: 'Baltic Avenue',
        price: 60,
        rent: [4, 20, 60, 180, 320, 450],
        houseCost: 50,
        hotelCost: 50,
        mortgageValue: 30,
        houseCount: 0,
        hotel: false
      },
      {
        key: 4,
        group: 'bottom',
        top: 816,
        left: 502,
        color: '#eee',
        title: 'Income Tax',
        price: 0,
        rent: [0, 0, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 0,
        houseCount: 0,
        hotel: false
      },
      {
        key: 5,
        group: 'bottom',
        top: 816,
        left: 424,
        color: 'black',
        title: 'Reading Railroad',
        price: 200,
        rent: [25, 50, 100, 200, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 100,
        houseCount: 0,
        hotel: false
      },
      {
        key: 6,
        group: 'bottom',
        top: 816,
        left: 346,
        color: 'lightblue',
        title: 'Oriental Avenue',
        price: 100,
        rent: [6, 30, 90, 270, 400, 550],
        houseCost: 50,
        hotelCost: 50,
        mortgageValue: 50,
        houseCount: 0,
        hotel: false
      },
      {
        key: 7,
        group: 'bottom',
        top: 816,
        left: 268,
        color: 'lightblue',
        title: 'Vermont Avenue',
        price: 100,
        rent: [6, 30, 90, 270, 400, 550],
        houseCost: 50,
        hotelCost: 50,
        mortgageValue: 50,
        houseCount: 0,
        hotel: false
      },
      {
        key: 8,
        group: 'bottom',
        top: 816,
        left: 190,
        color: '#eee',
        title: 'Chance',
        price: 0,
        rent: [0, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 0,
        houseCount: 0,
        hotel: false
      },
      {
        key: 9,
        group: 'bottom',
        top: 816,
        left: 112,
        color: 'lightblue',
        title: 'Connec ticut Avenue',
        price: 120,
        rent: [8, 40, 100, 300, 450, 600],
        houseCost: 50,
        hotelCost: 50,
        mortgageValue: 60,
        houseCount: 0,
        hotel: false
      },
      {
        key: 10,
        group: 'left',
        top: 720,
        left: 14,
        color: 'purple',
        title: 'St. Charles Place',
        price: 140,
        rent: [10, 50, 150, 450, 625, 750],
        houseCost: 100,
        hotelCost: 100,
        mortgageValue: 70,
        houseCount: 0,
        hotel: false
      },
      {
        key: 11,
        group: 'left',
        top: 642,
        left: 14,
        color: '#eee',
        title: 'Electric Co.',
        price: 150,
        rent: [4, 10, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 75,
        houseCount: 0,
        hotel: false
      },
      {
        key: 12,
        group: 'left',
        top: 566,
        left: 14,
        color: 'purple',
        title: 'States Avenue',
        price: 140,
        rent: [10, 50, 150, 450, 625, 750],
        houseCost: 100,
        hotelCost: 100,
        mortgageValue: 70,
        houseCount: 0,
        hotel: false
      },
      {
        key: 13,
        group: 'left',
        top: 488,
        left: 14,
        color: 'purple',
        title: 'Virginia Avenue',
        price: 160,
        rent: [12, 60, 180, 500, 700, 900],
        houseCost: 100,
        hotelCost: 100,
        mortgageValue: 80,
        houseCount: 0,
        hotel: false
      },
      {
        key: 14,
        group: 'left',
        top: 410,
        left: 14,
        color: 'black',
        title: 'Penns ylvania Railroad',
        price: 200,
        rent: [25, 50, 100, 200, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 100,
        houseCount: 0,
        hotel: false
      },
      {
        key: 15,
        group: 'left',
        top: 332,
        left: 14,
        color: 'orange',
        title: 'St.  James Place',
        price: 180,
        rent: [14, 70, 200, 550, 750, 950],
        houseCost: 100,
        hotelCost: 100,
        mortgageValue: 90,
        houseCount: 0,
        hotel: false
      },
      {
        key: 16,
        group: 'left',
        top: 254,
        left: 14,
        color: '#eee',
        title: 'Com munity Chest',
        price: 0,
        rent: [0, 0, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 0,
        houseCount: 0,
        hotel: false
      },
      {
        key: 17,
        group: 'left',
        top: 176,
        left: 14,
        color: 'orange',
        title: 'Tenn essee Avenue',
        price: 180,
        rent: [14, 70, 200, 550, 750, 950],
        houseCost: 100,
        hotelCost: 100,
        mortgageValue: 90,
        houseCount: 0,
        hotel: false
      },
      {
        key: 18,
        group: 'left',
        top: 97,
        left: 14,
        color: 'orange',
        title: 'New York Avenue',
        price: 200,
        rent: [16, 80, 220, 600, 800, 1000],
        houseCost: 100,
        hotelCost: 100,
        mortgageValue: 100,
        houseCount: 0,
        hotel: false
      },
      {
        key: 19,
        group: 'top',
        top: -1,
        left: 112,
        color: 'red',
        title: 'Kentucky Avenue',
        price: 220,
        rent: [18, 90, 250, 700, 875, 1050],
        houseCost: 150,
        hotelCost: 150,
        mortgageValue: 110,
        houseCount: 0,
        hotel: false
      },
      {
        key: 20,
        group: 'top',
        top: -1,
        left: 190,
        color: '#eee',
        title: 'Chance',
        price: 0,
        rent: [0, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 0,
        houseCount: 0,
        hotel: false
      },
      {
        key: 21,
        group: 'top',
        top: -1,
        left: 268,
        color: 'red',
        title: 'Indiana Avenue',
        price: 220,
        rent: [18, 90, 250, 700, 875, 1050],
        houseCost: 150,
        hotelCost: 150,
        mortgageValue: 110,
        houseCount: 0,
        hotel: false
      },
      {
        key: 22,
        group: 'top',
        top: -1,
        left: 346,
        color: 'red',
        title: 'Illinois Avenue',
        price: 240,
        rent: [20, 100, 300, 750, 925, 1100],
        houseCost: 150,
        hotelCost: 150,
        mortgageValue: 120,
        houseCount: 0,
        hotel: false
      },
      {
        key: 23,
        group: 'top',
        top: -1,
        left: 424,
        color: 'black',
        title: 'B&O Railroad',
        price: 200,
        rent: [25, 50, 100, 200, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 100,
        houseCount: 0,
        hotel: false
      },
      {
        key: 24,
        group: 'top',
        top: -1,
        left: 502,
        color: 'yellow',
        title: 'Atlantic Avenue',
        price: 260,
        rent: [22, 110, 330, 800, 975, 1150],
        houseCost: 150,
        hotelCost: 150,
        mortgageValue: 130,
        houseCount: 0,
        hotel: false
      },
      {
        key: 25,
        group: 'top',
        top: -1,
        left: 580,
        color: 'yellow',
        title: 'Ventnor Avenue',
        price: 260,
        rent: [22, 110, 330, 800, 975, 1150],
        houseCost: 150,
        hotelCost: 150,
        mortgageValue: 130,
        houseCount: 0,
        hotel: false
      },
      {
        key: 26,
        group: 'top',
        top: -1,
        left: 658,
        color: '#eee',
        title: 'Water Works',
        price: 150,
        rent: [4, 10, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 75,
        houseCount: 0,
        hotel: false
      },
      {
        key: 27,
        group: 'top',
        top: -1,
        left: 736,
        color: 'yellow',
        title: 'Marvin Gardens',
        price: 280,
        rent: [24, 120, 360, 850, 1025, 1200],
        houseCost: 150,
        hotelCost: 150,
        mortgageValue: 140,
        houseCount: 0,
        hotel: false
      },
      {
        key: 28,
        group: 'right',
        top: 97,
        left: 832,
        color: 'green',
        title: 'Pacific Avenue',
        price: 300,
        rent: [26, 130, 390, 900, 1100, 1275],
        houseCost: 200,
        hotelCost: 200,
        mortgageValue: 150,
        houseCount: 0,
        hotel: false
      },
      {
        key: 29,
        group: 'right',
        top: 175,
        left: 832,
        color: 'green',
        title: 'North Carolina Avenue',
        price: 300,
        rent: [26, 130, 390, 900, 1100, 1275],
        houseCost: 200,
        hotelCost: 200,
        mortgageValue: 150,
        houseCount: 0,
        hotel: false
      },
      {
        key: 30,
        group: 'right',
        top: 253,
        left: 832,
        color: '#eee',
        title: 'Com munity Chest',
        price: 0,
        rent: [0, 0, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 0,
        houseCount: 0,
        hotel: false
      },
      {
        key: 31,
        group: 'right',
        top: 331,
        left: 832,
        color: 'green',
        title: 'Penns ylvania Avenue',
        price: 320,
        rent: [28, 150, 450, 1000, 1200, 1400],
        houseCost: 200,
        hotelCost: 200,
        mortgageValue: 160,
        houseCount: 0,
        hotel: false
      },
      {
        key: 32,
        group: 'right',
        top: 409,
        left: 832,
        color: 'black',
        title: 'Short Line',
        price: 200,
        rent: [25, 50, 100, 200, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 100,
        houseCount: 0,
        hotel: false
      },
      {
        key: 33,
        group: 'right',
        top: 487,
        left: 832,
        color: '#eeee',
        title: 'Chance',
        price: 0,
        rent: [0, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 0,
        houseCount: 0,
        hotel: false
      },
      {
        key: 34,
        group: 'right',
        top: 565,
        left: 832,
        color: 'blue',
        title: 'Park Place',
        price: 350,
        rent: [35, 175, 500, 1100, 1300, 1500],
        houseCost: 200,
        hotelCost: 200,
        mortgageValue: 175,
        houseCount: 0,
        hotel: false
      },
      {
        key: 35,
        group: 'right',
        top: 643,
        left: 832,
        color: '#eee',
        title: 'Luxury Tax',
        price: 0,
        rent: [0, 0, 0, 0, 0, 0],
        houseCost: 0,
        hotelCost: 0,
        mortgageValue: 0,
        houseCount: 0,
        hotel: false
      },
      {
        key: 36,
        group: 'right',
        top: 721,
        left: 832,
        color: 'blue',
        title: 'Board walk',
        price: 400,
        rent: [50, 200, 600, 1400, 1700, 2000],
        houseCost: 200,
        hotelCost: 200,
        mortgageValue: 200,
        houseCount: 0,
        hotel: false
      }
    ];

    useEffect(() => {
        console.log(clickedChild);
    }, [clickedChild]);

// card properties
// color, title, price, rent*6, house cost, hotel cost, mortgage value, house count, hotel bool

    // propertys.push(<Property value={ value[0] } onClick={() => setClickedChild(value[0].key)} isClicked={clickedChild === value[0].key} />);
    // propertys.push(<Property value={ value[1] } onClick={() => setClickedChild(value[1].key)} isClicked={clickedChild === value[1].key} />);
    // propertys.push(<Property value={ value[2] } onClick={() => setClickedChild(value[2].key)} isClicked={clickedChild === value[2].key} />);
    // propertys.push(<Property value={{group: 'bottom', top: 570, left: 208, color: 'lightblue', title: 'Vermont Avenue', price: 100, rent: 6, houseCost: 50, hotelCost: 50, mortgageValue: 50, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'bottom', top: 570, left: 128, color: 'lightblue', title: 'Connec ticut Avenue', price: 120, rent: 8, houseCost: 50, hotelCost: 50, mortgageValue: 60, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'left', top: 370, left: 24, color: 'purple', title: 'St. Charles Place', price: 140, rent: 10, houseCost: 100, hotelCost: 100, mortgageValue: 70, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'left', top: 300, left: 300, color: 'purple', title: 'States Avenue', price: 140, rent: 10, houseCost: 100, hotelCost: 100, mortgageValue: 70, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'left', top: 300, left: 300, color: 'purple', title: 'Virginia Avenue', price: 160, rent: 12, houseCost: 100, hotelCost: 100, mortgageValue: 80, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'left', top: 300, left: 300, color: 'orange', title: 'St. James Place', price: 180, rent: 14, houseCost: 100, hotelCost: 100, mortgageValue: 90, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'left', top: 300, left: 300, color: 'orange', title: 'Tennessee Avenue', price: 180, rent: 14, houseCost: 100, hotelCost: 100, mortgageValue: 90, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'left', top: 300, left: 300, color: 'orange', title: 'New York Avenue', price: 200, rent: 16, houseCost: 100, hotelCost: 100, mortgageValue: 100, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'top', top: -1, left: 300, color: 'red', title: 'Kentucky Avenue', price: 220, rent: 18, houseCost: 150, hotelCost: 150, mortgageValue: 110, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'top', top: 300, left: 300, color: 'red', title: 'Indiana Avenue', price: 220, rent: 18, houseCost: 150, hotelCost: 150, mortgageValue: 110, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'top', top: 300, left: 300, color: 'red', title: 'Illinois Avenue', price: 240, rent: 20, houseCost: 150, hotelCost: 150, mortgageValue: 120, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'top', top: 300, left: 300, color: 'yellow', title: 'Atlantic Avenue', price: 260, rent: 22, houseCost: 150, hotelCost: 150, mortgageValue: 130, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'top', top: 300, left: 300, color: 'yellow', title: 'Ventnor Avenue', price: 260, rent: 22, houseCost: 150, hotelCost: 150, mortgageValue: 130, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'top', top: 300, left: 300, color: 'yellow', title: 'Marvin Gardens', price: 280, rent: 24, houseCost: 150, hotelCost: 150, mortgageValue: 140, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'right', top: 300, left: 595, color: 'green', title: 'Pacific Avenue', price: 300, rent: 26, houseCost: 200, hotelCost: 200, mortgageValue: 150, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'right', top: 300, left: 300, color: 'green', title: 'North Carolina Avenue', price: 300, rent: 26, houseCost: 200, hotelCost: 200, mortgageValue: 150, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'right', top: 300, left: 300, color: 'green', title: 'Pennsylvania Avenue', price: 320, rent: 28, houseCost: 200, hotelCost: 200, mortgageValue: 160, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'right', top: 300, left: 300, color: 'blue', title: 'Park Place', price: 350, rent: 35, houseCost: 200, hotelCost: 200, mortgageValue: 175, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'right', top: 300, left: 300, color: 'blue', title: 'Boardwalk', price: 400, rent: 50, houseCost: 200, hotelCost: 200, mortgageValue: 200, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'bottom', top: 300, left: 300, color: 'black', title: 'Reading Railroad', price: 200, rent: 25, houseCost: 0, hotelCost: 0, mortgageValue: 100, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'right', top: 300, left: 300, color: 'black', title: 'Pennsylvania Railroad', price: 200, rent: 25, houseCost: 0, hotelCost: 0, mortgageValue: 100, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'left', top: 300, left: 300, color: 'black', title: 'B&O Railroad', price: 200, rent: 25, houseCost: 0, hotelCost: 0, mortgageValue: 100, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'top', top: 300, left: 300, color: 'black', title: 'Short Line', price: 200, rent: 25, houseCost: 0, hotelCost: 0, mortgageValue: 100, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'left', top: 300, left: 300, color: 'black', title: 'Electric Company', price: 150, rent: 4, houseCost: 0, hotelCost: 0, mortgageValue: 75, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'top', top: 300, left: 300, color: 'black', title: 'Water Works', price: 150, rent: 4, houseCost: 0, hotelCost: 0, mortgageValue: 75, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'none', color: 'black', title: 'Community Chest', price: 0, rent: 0, houseCost: 0, hotelCost: 0, mortgageValue: 0, houseCount: 0, hotel: false}} />);
    // propertys.push(<Property value={{group: 'none', color: 'black', title: 'Chance', price: 0, rent: 0, houseCost: 0, hotelCost: 0, mortgageValue: 0, houseCount: 0, hotel: false}} />);


  return (
    <div className='board flex relative m-8 border-2'>
            { value.map((property, key) => {
                return <Property 
                        value={ property } 
                        onClick={() => setClickedChild(property.key)} 
                        isClicked={clickedChild === property.key} />;
            })
            } 
            <Corners />    
    </div>
  )
}

export default Board