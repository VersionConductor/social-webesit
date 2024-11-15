import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PostItem from './post/PostItem'
import { StoryData } from '../data/Storydata';

const PostStory = ({faPlus}) => {
  return (
    <>
      <div className='flex gap-2'>
            <div className='flex flex-col items-center justify-center text-center px-12 border-2 border-dashed w-[150px] h-[150px] bg-white rounded-lg cursor-pointer'>
                <FontAwesomeIcon className='bg-gray-200 py-3 px-[13px] rounded-full' icon={faPlus} />
                <h6>Post a Story</h6>
            </div>
            <div className='whitespace-nowrap max-w-[504px] overflow-x-auto'>
                {StoryData.map((item, index)=> {
                    return <PostItem key={index} storys={item}/>
                })}
            </div>
      </div>
    </>
  )
}

export default PostStory
