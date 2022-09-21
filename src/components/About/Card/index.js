import { Avatar } from '@mui/material';
import React from 'react';
import { CardContainer, CardBody, CardHead, Tag, TagsContainer } from './style';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Card(props) {
    return (
        <CardContainer key={props.name}>
            <CardHead>
                <Avatar sx={{ width: 64, height: 64 }} src={props.avatarUrl} />
                <div>
                    <h3> {props.name} </h3>
                    <p>
                        <span>
                            {' '}
                            <CalendarMonthIcon />{' '}
                        </span>
                        Próxima Semana{' '}
                    </p>
                </div>
            </CardHead>
            <CardBody>
                <p>{props.description}</p>
                <div>
                    <h4>ESTILOS</h4>
                    <TagsContainer>
                        {props.tags.map(tag => (
                            <Tag>{tag}</Tag>
                        ))}
                    </TagsContainer>
                </div>
            </CardBody>
        </CardContainer>
    );
}
