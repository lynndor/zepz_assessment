import React, { useState } from 'react'
import { FollowIcon, UnFollowIcon } from './icons'

const Card = ({ icon, title, description,  onBlockUser, onFollow, user, onUnfollow }) => {

  const [ display, setDisplay ] = useState('hidden')

  const toggleDisplay = () => {
    if ( display === 'hidden') return setDisplay('block')
    return setDisplay('hidden')
  }

  const handleBlockUser = e => {
    e.stopPropagation()
    onBlockUser()
  }

  const handleFollow = e =>  {
    e.stopPropagation()
    onFollow()
  }

  const handleUnfollow = e => {
    e.stopPropagation()
    onUnfollow()
  }

	return (
    <div onClick={ toggleDisplay } className={ `border-solid border border-purple-200 w-64 relative rounded-lg px-4 py-4 h-28` }>
      <div className="flex">
        <img className="h-10 w-10 rounded-full border-solid border border-purple-400" src={ icon } alt="an icon displying the user face" />

        <div className="ml-3">
          <p className="text-indigo-800 text-s font-semibold text-left">{ title }</p>
          <p className="text-indigo-800 text-xs font-semibold text-left">{ description }</p>
        </div>

        <div className="absolute right-4 bottom-14">
        {'followers' in user &&
          <p className="text-xs text-indigo-800">{user.followers} followers</p>
         }
        </div>

      </div>

      <div className={`absolute ${display} transition ease-in-out`}>
        <div className="flex space-x-36 mt-3 pt-2 border-t border-purple-200">
          <p onClick={handleBlockUser} className="text-xs text-red-700 cursor-pointer hover:text-red-900">Block user</p>

          {
            'followers' in user && user?.followers > 0 ? (
              <button onClick={handleUnfollow} className="cursor-pointer"><UnFollowIcon/></button>
            ) : (
              <button onClick={handleFollow} className="cursor-pointer"><FollowIcon/></button>
            )
          }

        </div>
      </div>
    </div>
	)
}

export default Card
