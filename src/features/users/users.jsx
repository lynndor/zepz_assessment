import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Search, SkeletonLoader } from '../../components'
import { useGetUsersQuery } from '../api/apiSlice'

export default function Users() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery()

  const dispatch = useDispatch()

  const [ isFollowing, setIsFollowing ] = useState( true )

  let content

  if( isLoading ) {
    content = <SkeletonLoader/>

  } else if ( isSuccess ) {
    content = users.items.map((user) => (
      <Card
        key={user.reputation}
        title={user.display_name}
        description={user.reputation}
        icon={user.profile_image}
      />
      ))

  } else if (isError) {
    content = (
      <div>
        <p>
          { error.error.toString() }
        </p>

        <div>
          { <SkeletonLoader/> }
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto flex flex-col justify-items-center">
      <Search/>
      <div className="flex flex-wrap gap-10 justify-center">
        {content}
      </div>
    </div>
  )
}
