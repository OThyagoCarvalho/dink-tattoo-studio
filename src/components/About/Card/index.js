import React from 'react';
import {
    CardContainer,
    CardProfilePic,
    CardBody,
    CardTitle,
    TagsContainer
} from './style';

export default function Card(props) {
    return (
        <CardContainer key={props.name}>
            <CardProfilePic
                style={{ backgroundImage:`url(${props.avatarUrl})` }}
            ></CardProfilePic>
            <CardTitle>
                <h3> {props.name} </h3>
            </CardTitle>
            <CardBody>
                <p>{props.description}</p>
                <div>
                {props.tags.map(tag => (
                    <TagsContainer>{tag}</TagsContainer>
                ))}
                </div>
                
            </CardBody>
        </CardContainer>
    );
}
