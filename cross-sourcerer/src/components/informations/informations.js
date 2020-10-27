import React from 'react'
import {infoUser} from '../../data/schema'
import {useQuery} from '@apollo/client';
import {Button, Spinner, Image} from 'react-bootstrap'
import './informations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import  { Navbar, Row } from 'react-bootstrap';

export default () => {
  const {loading, error, data} = useQuery(infoUser);
  if (loading) {
    return <Spinner animation="border"/>;
  }
  if (error) {
    console.log(error)
    return <Button variant="danger">Probmème de données</Button>;
  }
  if (data) {
    console.log(data.user.repositories)
    return (
      <div className='centrer'>
        <Navbar className="header">
          <Navbar.Brand>
            <span className="headerTitle">Cross-Sourcerer</span>
          </Navbar.Brand>
        </Navbar>
        <Image className="avatar" src={data.user.avatarUrl} roundedCircle/> <br/>
        <strong>Lien vers mon Git : </strong> <a href={data.user.url}>{data.user.url}</a>
        <div class="row justify-content-center">
        <Row>
          <span className='userName'>
            <FontAwesomeIcon icon={faUser} /><strong> Git name: </strong><br/>
            {data.user.name}
          </span>
          <span className='location'>
            <strong>Location : </strong><br/>
            {data.user.location === null ? 'Pas de location liée' : data.user.location}
          </span>
          <span className='email'>
            <strong>Email : </strong> <br/>
            {data.user.email === null ?  "Pas d'email lié" : data.user.email}
          </span>
          <span className='company'>
            <strong>Company : </strong> <br/>
            {data.user.company === null ?  "Pas de company lié" : data.user.company}
          </span>
          <span className='twitter'>
            <strong>Twitter : </strong><br/>
            {data.user.twitterUsername === null ? "Pas de Twitter lié" : data.user.twitterUsername}
          </span>
          <span className='abonnes'>
            <strong>Abonnés : </strong><br/>
            {data.user.followers.totalCount}
          </span>
          <span className='abonnements'>
            <strong>Abonnements : </strong><br/>
            {data.user.following.totalCount}
          </span>
        </Row>
        </div>
        <br></br><br></br>


        <h4><strong>Liste des repositories présent sur ce profil : </strong></h4>
        {
          data.user.repositories.nodes.map(nodes => (
            <p><div className='test'><strong>{nodes.name}</strong></div> possède {nodes.stargazerCount} étoiles </p>
          ))
        }
      </div>
    )
  }
}
