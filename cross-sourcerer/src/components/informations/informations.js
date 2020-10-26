import React  from 'react'
import {infoUser} from '../../data/schema'
import { useQuery } from '@apollo/client';
import {Button, Spinner, Image} from 'react-bootstrap'
import '../../informations.css';

export default () => {
    const { loading, error, data } = useQuery(infoUser);
    if (loading) {
      return <Spinner animation="border"/>;
    }
    if (error) {
        console.log(error)
      return <Button variant="danger">Probmème de données</Button>;
    }
    if (data) {
        console.log(data.user.repositories.nodes[1])
        return (
            <div className='centrer'>
            <Image className="avatar" src={data.user.avatarUrl} roundedCircle />
            <h2> <strong>{data.user.name}</strong></h2>
            <br></br>     
            <h2> <strong>{data.user.login}</strong></h2> 
            <br></br>     
            <h4> <strong>Twitter : </strong>{data.user.twitterUsername}</h4>    
            <h4> <strong>location : </strong>{data.user.location}</h4>         
            <h4> <strong>Email : </strong>{data.user.email}</h4>         
            <h4> <strong>Url : </strong> <a href={data.user.url}>{data.user.url}</a></h4>        
            <h4> <strong>Nombre de Followers : </strong>{data.user.followers.totalCount}</h4>         
            <h4> <strong>Nombre de suivi : </strong>{data.user.following.totalCount}</h4>     
            <h4> <strong>Liste des repositories présent sur ce profil : </strong></h4>      
            <br></br>     
            {
              data.user.repositories.nodes.map(nodes => (
                      <p> <strong>{nodes.name}</strong> possède {nodes.stargazerCount} étoiles</p>
                ))

            }     

            </div>
        )        
    }
}
