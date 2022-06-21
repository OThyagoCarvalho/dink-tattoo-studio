import React from 'react';
import { CardContainer, CardProfilePic, CardBody, CardTitle, TagsContainer } from './style';

export default function Card() {
    return (
        <CardContainer>
            <CardProfilePic></CardProfilePic>
            <CardTitle>
                <h3> Dhyego </h3>
            </CardTitle>
            <CardBody>
                <p>
                    Nascido no subúrbio carioca, dhyego descobriu na
                    tatuagem a sua verdadeira paixão. Após isso, largou a
                    faculdade e decidiu seguir seu sonho, dedicando-se
                    exclusivamente à tatuagem desde então.
                </p>
                <TagsContainer>adsfadf</TagsContainer>
                <TagsContainer>adsfadf</TagsContainer>
                <TagsContainer>adsfadf</TagsContainer>              
            </CardBody>
        </CardContainer>
    );
}
