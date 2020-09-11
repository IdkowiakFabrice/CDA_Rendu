import React, { useState, useEffect } from "react";
import SocketIo from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Game from './Game';


export default function App(): JSX.Element {
    const [io, setIo] = useState<SocketIOClient.Socket>();
    const [chooseGame, setGame] = useState<string>('');

    useEffect(() =>{
      document.body.style.backgroundColor = "rgb(148, 187, 184);";
    })
    const connectIoServer = (str: string) => {
        setIo(SocketIo(process.env.HOST as string));
        setGame(str)
      };

      if(chooseGame !== '' && io !== undefined){
        return <Game io={io} game={chooseGame} />
    }

   
    return (
        <div>
            <div className= "container">
                <div >
                  <h1 className="title" >cross-pwgame</h1>
                  <p style={{textAlign: "center"}} >Choisissez votre jeu </p>
                    <ul className="list-group col-md-12" style={{textAlign: "center", padding:"20px"}}>
                        <li className="list-group-item list-group-item-action" onClick={() => connectIoServer("MagicNumber")}>MagicNumber</li>
                        <li className="list-group-item list-group-item-action"  onClick={() => connectIoServer("QuickWord")}>QuickWord</li>
                    </ul>
                </div>
               
            </div>
        </div>
    );
}
