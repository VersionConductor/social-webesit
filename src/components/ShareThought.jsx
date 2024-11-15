import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ShareThought = ({avtar, faImage, faCamera, faCalendar, faFaceSmile, faEllipsis}) => {
  return (
    <>
       <div className='bg-white p-5 rounded-lg'>
                <div className='flex items-start w-full mb-2'>
                    <a href="#">
                        <img className='w-[35px] h-[35px] rounded-full' src={avtar} alt="Avtar image" />
                    </a>
                    <div className='flex-1'>
                        <textarea className='w-full ps-6 pt-2 border-none outline-none' rows="2" placeholder='Share your thought...'></textarea>
                    </div>
                </div>
                <div className='flex flex-row gap-2 w-full text-gray-700'>
                    <a className='bg-gray-100 px-2 py-[5px] rounded-[5px] text-sm' href="#">
                        <FontAwesomeIcon icon={faImage} /> <span className='hover:text-[#106FEC] duration-500 font-medium'>Photo</span>
                    </a>
                    <a className='bg-gray-100 px-2 py-[5px] rounded-[5px] text-sm' href="#">
                        <FontAwesomeIcon icon={faCamera} /> <span className='hover:text-[#106FEC] duration-500 font-medium'>Video</span>
                    </a>
                    <a className='bg-gray-100 px-2 py-[5px] rounded-[5px] text-sm' href="#">
                        <FontAwesomeIcon icon={faCalendar} /> <span className='hover:text-[#106FEC] duration-500 font-medium'>Event</span>
                    </a>
                    <a className='bg-gray-100 px-2 py-[5px] rounded-[5px] text-sm' href="#">
                        <FontAwesomeIcon icon={faFaceSmile} /> <span className='hover:text-[#106FEC] duration-500 font-medium'>Feeling /Activity</span>
                    </a>
                    <a className='bg-gray-100 px-2 py-[5px] rounded-[5px] text-sm' href="#">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </a>
                </div>
            </div>
    </>
  )
}

export default ShareThought
