import React from 'react'
import ProfileCard from './Profile'

const ProfileList = (props) => {
  return (
    <div>
        {
React.Children.toArray(props.list.map((el,i)=><ProfileCard item={el} functionAlert={props.functionAlert} />))
        }
    </div>
  )
}

export default ProfileList