import React from 'react'
import Image from 'next/image'

const Go = () => {
  return (
    <div className='corner h-28 w-28 absolute rounded-tl-lg' style={{top: '816px', left: '816px'}}>
        <div className='w-20 h-20 border-black' style={{transform: 'rotate(-45deg)'}}>
            <div className='xxs pt-4 text-center'>Collect $200</div>
            <div className='raleway text-center text-blue-800 text-5xl font-semibold'>Go</div>
        </div>
        <Image className='absolute' style={{ top: '46px', right: '10px', transform: 'rotate(180deg)' }} src="/arrow.png" alt="arrow" width={100} height={100} />
    </div>
  )
}

const Jail = () => {
    return (
        <div className='corner h-28 w-28 absolute' style={{top: '816px', left: '0px'}}>
            <div className='w-full h-full'>
                <div className='absolute jail text-center w-3/4 h-3/4 bg-red-500 text-5xl rounded-tr-lg font-semibold'><div className='portrait w-3/5 h-3/5 bg-white'></div></div>
                <div className='just absolute text-center font-medium'>JUST</div><div className='visiting font-medium'>VISITING</div>
            </div>
        </div>
    )
}

const FreeParking = () => {
    return (
        <div className='h-28 w-28 absolute corner'>
            Free Parking
        </div>
    )
}

const GoToJail = () => {
    return (
        <div className='corner absolute h-28 w-28' style={{top: '0', left: '816px'}}>
            Go To Jail
        </div>
    )
}

const Corners = () => {
  return (
    <div>
        <Go />
        <Jail />
        <FreeParking />
        <GoToJail />
    </div>
  )
}

export default Corners