import React from 'react';
import './Card.css';
import { Card } from 'react-bootstrap';
import { ReactComponent as LinkSVG } from '../assets/linkicon.svg';
import { ReactComponent as GitSVG } from '../assets/github.svg';

const CardProj = (props) => {

    let elements = [];
    for (let i = 0; i < props.tech.length; i++) {
        elements.push(<div>{props.tech[i]}</div>);
    }

    return (
        <Card>
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <div>{props.title}</div>
                    <div className="card-icons">
                        {props.giturl ? <a href={props.giturl} target="_blank"><GitSVG className="card-icon" width={20} height={20}/></a> : null}
                        {props.linkurl ? <a href={props.linkurl} target="_blank"><LinkSVG className="card-icon" width={30} height={30}/></a> : null}
                    </div>
                </Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Card.Text className="card-tech">{elements}</Card.Text>

            </Card.Body>

        </Card>
    )

}

export default CardProj;
