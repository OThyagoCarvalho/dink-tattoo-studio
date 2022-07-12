import React from 'react';
import Carousel from 'react-material-ui-carousel';



import zeus from '../../images/gallery/zeus.webp';
import pulp from '../../images/gallery/pulp.webp';
import lp from '../../images/gallery/lp.webp';
import casal from '../../images/gallery/casal.webp';

export default function Example(props) {
    var items = [
        {
            name: 'Por Dhyego',
            description: 'Um momento em polaroid.',
            image: casal
        },
        {
            name: 'Por Cleiton',
            description: 'Zeus, O deus do Olimpo.', 
            image: zeus
        },
        {
            name: 'Por Cleiton',
            description: 'Chester, vocalista do Linkin Park.', 
            image: lp
        },
        {
            name: 'Por Cleiton',
            description: 'Pulp Fiction.', 
            image: pulp
        }
    ];

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} item={item}/>
            ))}
        </Carousel>
    );
}

function Item(props) {
    return (
        <>
            <img src={props.item.image} alt="tatuagem" />
            <p> {props.item.name} </p>
            <p> {props.item.description} </p>
        </>
    );
}
