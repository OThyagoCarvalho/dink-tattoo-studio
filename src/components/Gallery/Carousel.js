import React from 'react';
import Carousel from 'react-material-ui-carousel';

import pic1 from '../../images/gallery/pic1.jpg';
import pic2 from '../../images/gallery/pic2.jpg';
import pic3 from '../../images/gallery/pic3.jpg';


export default function Example(props) {
    var items = [
        {
            name: 'Por Diego',
            description: 'Artes em Blackwork',
            image: pic1
        },
        {
            name: 'Por Cleiton',
            description: 'Realismo', 
            image: pic2
        },
        {
            name: 'Por Raquel',
            description: 'Artes Neo Tradicional e Old school', 
            image: pic3
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
