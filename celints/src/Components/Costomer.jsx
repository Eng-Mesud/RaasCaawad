import React from 'react'
import food from '../image/food.png'
function Costomer() {
  return (
    <div className='mt-5'>
        <div className="conntainer max-w-7xl m-auto ">
            <div className="bg-slate-300 p-4">
                <div className="row grid grid-cols-3">
                    <div className="  ">
                    <img src={food} className='h-96 w-96' alt="" srcset="" />
                    </div>
                    <div className="col-span-2 mt-20">
                        <p className='text-2xl items-center justify-center font-extrabold'>
                       Featured News
                       BEN'S ORIGINAL™ announces two programs in North America that deliver its Purpose
                        Better food today. A better world tomorrow.</p>


                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum beatae voluptatem voluptate distinctio unde omnis sunt,
                             at nobis, dicta fuga nihil eligendi illum illo exercitationem sed? Quis laudantium doloremque corrupti?</p>


                             <div className="mt-4">
                                <button className='bg-sky-300 p-2 '>Learn more</button>
                             </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Costomer