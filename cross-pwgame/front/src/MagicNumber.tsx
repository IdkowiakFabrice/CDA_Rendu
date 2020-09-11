import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import useInput from "./hooks/useInput";

type Props = {
    io: SocketIOClient.Socket;
};

interface User {
    id?: string
    nickname?: string
    points?: number
    fasterUser?: boolean

}


export default function MagicNumber({ io }: Props): JSX.Element {
    const { value: score, bind } = useInput();
    // eslint-disable-next-line
    const [position, setPosition] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<User>();
    const [round, setRound] = useState<Number>(1);
    const [finisher, setFinisher] = useState<User>()
    const [points, setPoints] = useState<number>(0)

    const endGame = (users: Array<User>) => {
        for (const user of users) {
            if (user.points === 3) {
                setFinisher(user)
            }
        }
    }

    const sendScore = () => {
        io.emit("magicNumber::sendScore", JSON.stringify({ score }))

        io.on("magicNumber::resume", ({ position, currentUser, users, round }: { position: string, currentUser: User, users: Array<User>, round: Number }) => {
            setPosition(position)
            setCurrentUser(currentUser)
            if (currentUser.points) {
                setPoints(currentUser?.points)
            }
            setRound(round)
            endGame(users)
        })
    }


    if (currentUser?.points === 3) {
        return <div className="container" >
            <div className="alert alert-success" role="alert">
                GG {currentUser?.nickname}, vous avez win la game.
            </div>
            {/* <a style={{marginLeft: 50}} href='/'><button className="btn btn-info" type="button"> Retourner au menu </button></a> */}
        </div>
    }


    if (finisher && finisher !== currentUser) {
        return <div className="container">
            <div className="alert alert-warning" role="alert">
                 {currentUser?.nickname} vous avez perdu la game.
            </div>
            <br></br>
            {/* <a style={{marginLeft: 50}} href='/'><button className="btn btn-info" type="button"> Retourner au menu </button></a> */}
        </div>
    }
    
    return (

        <div className="container">


            <form className="formWidth">
                <h2 className="title">MagicNumber / Manche {round} </h2><br></br>
                <h5 className="points"> {points} points</h5>
                <label>Le nombre à deviner est entre 0 et 1337  : </label>
                <div className="form-group">
                    <input
                        className="form-control col-md-12 col-sm-2"
                        {...bind}
                    />
                </div>
                <button
                    className="btn btn-success"
                    type="button"
                    onClick={() => sendScore()}>valider
                </button>
            </form>
        </div>
    );
}
