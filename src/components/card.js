import React, { useState } from 'react'
import { FollowIcon } from './icons'

const Card = ({ icon, title, description, actions, blockUser }) => {

  const [ display, setDisplay ] = useState('hidden')

  const toggleDisplay = () => {

    if ( display === 'hidden' ) return setDisplay('block')
    return setDisplay('hidden')
  }

	return (
			<div onClick={ toggleDisplay } className={ `border-solid border border-purple-200 w-64 relative rounded-lg px-4 py-4 h-28` }>
				<div className="flex">
					<img className="h-10 w-10 rounded-full border-solid border border-purple-400" src={ icon } alt="an icon displying the user face" />

					<div className="ml-3">
						<p className="text-indigo-800 text-s font-semibold">{ title }</p>
						<p className="text-indigo-800 text-xs font-semibold">{ description }</p>
					</div>
				</div>

        <div className={`absolute ${display}`}>
          <div className="flex space-x-36 mt-3 pt-2 border-t border-purple-200">
            <p onClick={(e) => blockUser(e) } className="text-xs text-red-700 cursor-pointer hover:text-red-900">Block user</p>
            <FollowIcon />
          </div>
        </div>
			</div>
		)
}

export default Card
