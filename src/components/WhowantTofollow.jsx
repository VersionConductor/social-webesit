import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WhowantTofollow = ({avtar2, faPlus}) => {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='px-5 bg-white rounded p-[20px_20px_0]'>
            <h5 className='font-bold text-lg'>Who to follow</h5>
            <div className='flex gap-3 mb-4 pt-5'>
                <a href='#!'>
                    <img className='w-12 h-12 rounded-full' src={avtar2} alt="Avtar image" />
                </a>
                <div>
                    <h5 className='font-medium'>Judy Nguyen</h5>
                    <span className='text-gray-400'>News anchor</span>
                </div>
                <div>
                    <FontAwesomeIcon className='bg-sky-100 text-sky-400 py-3 px-[13px] rounded-full hover:bg-sky-500 hover:text-white duration-500' icon={faPlus} />
                </div>
            </div>
            <div className='flex gap-3 mb-4'>
                <a href='#!'>
                    <img className='w-12 h-12 rounded-full' src={avtar2} alt="Avtar image" />
                </a>
                <div>
                    <h5 className='font-medium'>Judy Nguyen</h5>
                    <span className='text-gray-400'>News anchor</span>
                </div>
                <div>
                    <FontAwesomeIcon className='bg-sky-100 text-sky-400 py-3 px-[13px] rounded-full hover:bg-sky-500 hover:text-white duration-500' icon={faPlus} />
                </div>
            </div>
        </div>
        <div className='px-5 bg-white rounded p-[20px_20px_0]'>
            <h5 className='font-bold text-lg'>Today’s news</h5>
            <div className=' mb-4'>
                <h6 className='font-medium pt-5 hover:text-[#106FEC] duration-700'>Ten questions you should answer truthfully</h6>
                <small className='text-gray-500 '>2hr</small>
            </div>
            <div className='mb-4'>
                <h6 className='font-medium hover:text-[#106FEC] duration-700'>Five unbelievable facts about money</h6>
                <small className='text-gray-500 '>3hr</small>
            </div>
            <div className='mb-4'>
                <h6 className='font-medium hover:text-[#106FEC] duration-700'>Best Pinterest Boards for learning about business</h6>
                <small className='text-gray-500 '>4hr</small>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhowantTofollow
