import React from 'react'

const Profile = ({covertImage, cartImage, feed, Connections, LatestNews, events, groups, notifications, settings}) => {
  return (
    <>
      <div className="flex flex-col bg-white rounded overflow-hidden relative">
            <div className="bg-white rounded h-[50px]"
            style={{
                backgroundImage: `url(${covertImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            ></div>
            {/* // card body start */}
            <div className='px-[20px]'>
                <div className='absolute top-8 start-1/2 translate-x-[-50%]'>
                    <img className='w-16 h-16 rounded-md' src={cartImage} alt="" />
                </div>
                <div className='mt-16 text-center'>
                    <div>
                        <a href="#" className='text-xl font-bold text-gray-700 hover:text-[#106FEC] duration-500'>Sam Lanson</a>
                        <p className='text-gray-500'>Web Developer at Webestica</p>
                    </div>
                    <div className='text-gray-700 mt-2 '>
                        I'd love to change the world, but they won’t give me the source code.
                    </div>
                    <div className='mt-2 flex justify-center gap-2 px-3 border-b-2 pb-4'>
                        <div className='border-e-2 pe-2'>
                            <p className='font-bold text-gray-700'>256</p>
                            <p className='text-gray-700 text-sm'>Post</p>
                        </div>
                        <div className='border-e-2 pe-2'>
                            <p className='font-bold text-gray-700'>2.5K</p>
                            <p className='text-gray-700 text-sm'>Followers</p>
                        </div>
                        <div>
                            <p className='font-bold text-gray-700'>365</p>
                            <p className='text-gray-700 text-sm'>Following</p>
                        </div>
                    </div>
                </div>
                <div className='mt-2 flex flex-col gap-4 pb-4 font-bold text-gray-700'>
                    <a className='flex gap-2' href="#">
                        <img className='w-[18px] h-[20px]' src={feed} alt="" />
                        <p>Feed</p>
                    </a>
                    <a className='flex gap-2' href="#">
                        <img className='w-[18px] h-[20px]' src={Connections} alt="" />
                        <span>Connections</span>
                    </a>
                    <a className='flex gap-2' href="#">
                    <img className='w-[18px] h-[20px]' src={LatestNews} alt="" />
                        <span>Latest News</span>
                    </a>
                    <a className='flex gap-2' href="#">
                        <img className='w-[18px] h-[20px]' src={events} alt="" />
                        <span>Events</span>
                    </a>
                    <a className='flex gap-2' href="#">
                        <img className='w-[18px] h-[20px]' src={groups} alt="" />
                        <span>Groups</span>
                    </a>
                    <a className='flex gap-2' href="#">
                        <img className='w-[18px] h-[20px]' src={notifications} alt="" />
                        <span>Notifications</span>
                    </a>
                    <a className='flex gap-2' href="#">
                        <img className='w-[18px] h-[20px]' src={settings} alt="" />
                        <span>Settings</span>
                    </a>
                </div>
            </div>
            <div className='text-center py-2 border-t-2 pt-2'>
                    <a className='text-[#106FEC] font-medium text-sm' href="#">View Peofile</a>
            </div>
            {/* // card body end */}
        </div>
    </>
  )
}

export default Profile
