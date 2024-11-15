import React from 'react'

const PostItem = ({storys}) => {
  return (
    <>
        <div className='cursor-pointer inline-block me-2'>
            <img className='w-[120px] h-[150px]' src={storys} alt={storys} />
        </div>
    </>
  )
}

export default PostItem
