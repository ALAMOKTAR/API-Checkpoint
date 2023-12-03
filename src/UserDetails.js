import Card from 'react-bootstrap/Card';
import axios from 'axios'

import ListGroup from 'react-bootstrap/ListGroup';
import { useState,useEffect } from 'react'
import {useParams,Link} from "react-router-dom"
function UserDetails() {
  const [data,setData]=useState([])
  useEffect(() => {
      const Data = async () => {
              const response = await axios.get('https://jsonplaceholder.typicode.com/users');
              setData(response.data);
          };
      Data();
  },[])
    let {id}=useParams()
    let user = data.find(users => users.id === parseInt(id));
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
    <ListGroup.Item>phone number : {user.phone}</ListGroup.Item>
    <ListGroup.Item>adresse : {user.adresse.street} {user.adresse.city} {user.adresse.zipcode}</ListGroup.Item>
    <ListGroup.Item>website : {user.website} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"><Link to="/"> Back to Home Page </Link></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserDetails;