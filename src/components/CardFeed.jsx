import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardFeed = ({avtar2, faEllipsis, avtar3, faThumbsUp, faComment, faShare, avtar4, avtar5}) => {
  return (
    <>
       <div className='bg-white rounded-lg'>
                <div className='flex items-center justify-between p-[20px_20px_0]'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10 h-10 rounded-full' src={avtar2} alt="avtar image" />
                        <div>
                            <div className='flex gap-2'>
                                <a className='font-medium text-[16px]' href="#">Lori Ferguson</a>
                                <p className='text-gray-700 text-[14px]'>*</p>
                                <p className='text-gray-700 text-[14px]'>2hr</p>
                            </div>
                            <div>
                                <p className='text-gray-700 text-[14px]'>Web Developer at Webestica</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
                <div className='p-5'>
                    <div>
                        <p className='text-gray-700 pb-4'>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                    </div>
                    <div>
                        <img className='rounded' src={avtar3} alt="Avter image" />
                    </div>
                    <div className='flex justify-between items-center py-3'>
                        <div>
                            <a className='me-3 text-gray-700 hover:text-[#106FEC] duration-500 text-sm' href="#!">
                                <FontAwesomeIcon icon={faThumbsUp} /> <span>Liked</span>
                            </a>
                            <a className='me-3 text-gray-700 hover:text-[#106FEC] duration-500 text-sm' href="#!">
                                <FontAwesomeIcon icon={faComment} /> <span>Comments</span>
                            </a>
                        </div>
                        <a className='me-3 text-gray-700 hover:text-[#106FEC] duration-500 text-sm' href="#!">
                            <FontAwesomeIcon icon={faShare} /> <span>Share (3)</span>
                        </a>
                    </div>
                    <div className='flex gap-3 w-full'>
                        <a href='#!'>
                            <img className='w-[40px] h-[35px] rounded-full' src={avtar4} alt="Avtar image" />
                        </a>
                        <div className='w-full'>
                            <textarea className='border-2 ps-3 py-2 rounded-lg outline-none w-full bg-gray-200' rows="1" placeholder='Add a comment'></textarea>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-3'>
                            <a href='#!'>
                                <img className='w-[70px] h-[35px] rounded-full' src={avtar5} alt="Avtar image" />
                            </a>
                            <div className='bg-gray-200 p-4 rounded-lg'>
                                <div className='flex justify-between'>
                                    <a className=' font-bold hover:text-[#106FEC] duration-500' href="#!">Frances Guerrero</a>
                                    <span className='text-gray-700'>5hr</span>
                                </div>
                                <div>
                                    <span>
                                        Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 w-[405px] ms-auto'>
                            <a className='text-[14px] hover:text-[#106FEC] duration-500' href="#!">Like (3)</a>
                            <span>*</span>
                            <a className='text-[14px] hover:text-[#106FEC] duration-500' href="#!">Reply</a>
                            <span>*</span>
                            <a className='text-[14px] hover:text-[#106FEC] duration-500' href="#">View 5 replies</a>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default CardFeed
