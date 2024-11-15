import React from 'react'
import covertImage from '../assets/cover.png';
import cartImage from '../assets/profile.png';
import feed from '../assets/feed.svg'
import Connections from '../assets/Connections.svg'
import LatestNews from '../assets/LatestNews.svg'
import events from '../assets/events.svg'
import notifications from '../assets/notifications.svg'
import groups from '../assets/groups.svg'
import settings from '../assets/settings.svg'
import story1 from '../assets/story1.jpg'
import avtar from '../assets/avtar/avtar.png'
import avtar2 from '../assets/avtar/avtar2.png'
import avtar3 from '../assets/avtar/avtar3.png'
import avtar4 from '../assets/avtar/avtar4.png'
import avtar5 from '../assets/avtar/avtar5.png'
import { faCalendar, faCamera, faComment, faEllipsis, faFaceSmile, faImage, faPlus, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Profile from '../components/Profile';
import PostStory from '../components/PostStory';
import ShareThought from '../components/ShareThought';
import CardFeed from '../components/CardFeed';
import WhowantTofollow from '../components/WhowantTofollow';


const MainContent = () => {
  return (
    <div className='xl:w-[84%] mt-[56px] mx-auto p-3 grid grid-cols-[1fr_2fr_1fr] gap-[10px]'>
     <div>
        <Profile
            covertImage={covertImage}
            cartImage={cartImage}
            feed={feed}
            Connections={Connections}
            LatestNews={LatestNews}
            events={events}
            notifications={notifications}
            groups={groups}
            settings={settings}
        />
     </div>
      <div className='px-3'>
        {/* story area start  */}
        <PostStory
            story1={story1}
            faPlus={faPlus}
        />
        {/* story area end  */}

        <div className='flex flex-col gap-4 mt-4'>
            {/* share your thought start  */}
           <ShareThought
                avtar={avtar}
                faImage={faImage}
                faCamera={faCamera}
                faCalendar={faCalendar}
                faFaceSmile={faFaceSmile}
                faEllipsis={faEllipsis}
           />
           {/* share your thought start  */}
           
           {/* Card feed item start  */}
           <CardFeed
            avtar2={avtar2}
            faEllipsis={faEllipsis}
            avtar3={avtar3}
            faThumbsUp={faThumbsUp}
            faComment={faComment}
            faShare={faShare}
            avtar4={avtar4}
            avtar5={avtar5}
           />
            {/* Card feed item end  */}
        </div>

      </div>
      <WhowantTofollow 
      avtar2={avtar2}
      faPlus={faPlus}
      />
    </div>
  )
}

export default MainContent
