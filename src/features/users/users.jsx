import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Search, SkeletonLoader } from '../../components'
import { searchUser, updateUser, useGetUsersQuery } from '../api/usersApi'

export default function Users() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery()

  const dispatch = useDispatch()

  const FollowUser = (user) => {
    let followers =  user.followers || 0
    followers++
    const userWithFollowers = { ...user, followers }

    updateUser(dispatch, userWithFollowers)
  }

  const UnFollowUser = ( user ) => {
    let followers =  user.followers
    followers--
    const userWithoutFollowers = { ...user, followers }

    updateUser(dispatch, userWithoutFollowers)
  }

  const blockUser = ( user ) => {
    const isBlocked = true
    const blockedUser = {...user, isBlocked}

     updateUser(dispatch, blockedUser)
  }

  const handleSearch = ( event ) => {
    const value = event.target.value

    searchUser(dispatch, value)
  }

  let content

  if( isLoading ) {
    content = <SkeletonLoader/>

  } else if ( isSuccess ) {
    content = users.map((user) => (
      <Card
        key={user.reputation}
        title={user.display_name}
        description={user.reputation}
        icon={user.profile_image}
        onFollow={ () => FollowUser(user) }
        onUnfollow={ () => UnFollowUser(user) }
        onBlockUser={ () => blockUser(user) }
        user={user}
      />
      ))

  } else if (isError) {
    console.log()
    content = (
      <div>
        <p className="mb-8 p-2 border border-1 border-red-500 bg-red-100 text-red-700">
          { error.error || error.data.error_message }
        </p>

        <div>
          { <SkeletonLoader/> }
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto flex flex-col justify-items-center">
      { !isError && <Search onInputChange={handleSearch}/> }
      <div className="flex flex-wrap gap-10 justify-center">
        {content}
      </div>
    </div>
  )
}
