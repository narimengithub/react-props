import React from 'react'
import { Button, Card } from 'react-bootstrap'
import PropTypes from 'prop-types';

const ProfileCard = ({item,functionAlert,children, normal}) => {
        console.log(functionAlert)

  return (
 
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.Image} />
      <Card.Body>
        <Card.Title>{item.FuulName}</Card.Title>
        <Card.Text>
          {item.Profession}
        </Card.Text>
        <Card.Text>
          {item.Bio}
        </Card.Text>
        <Button variant="primary" onClick={()=>functionAlert(item)}>Info</Button>
      </Card.Body>
    </Card>


    
    </div>
  )
}
ProfileCard.defaultProps = {
    normal:"this is a default props"
   }
   ProfileCard.propTypes = {
    normal: PropTypes.string
  };

export default ProfileCard