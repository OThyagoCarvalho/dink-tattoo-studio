import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import post1 from '../../../images/galery/post1.jpg';
import post2 from '../../../images/galery/post2.jpg';
import post3 from '../../../images/galery/post3.jpg';
import post4 from '../../../images/galery/post4.jpg';
import post5 from '../../../images/galery/post5.jpg';
import post6 from '../../../images/galery/post6.jpg';
import post7 from '../../../images/galery/post7.jpg';
import post8 from '../../../images/galery/post8.jpg';
import post9 from '../../../images/galery/post9.jpg';
import post10 from '../../../images/galery/post10.jpg';
import post11 from '../../../images/galery/post11.jpg';
import { Container } from './style';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`
    };
}

export default function QuiltedImageList() {
    return (
        <Container>
            <ImageList
                sx={{ width: 350, height: 600 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {itemData.map(item => (
                    <ImageListItem
                        key={item.img}
                        cols={item.cols || 1}
                        rows={item.rows || 1}
                    >
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}

const itemData = [
    {
        img: `${post1}`,
        title: 'Breakfast',
        rows: 2,
        cols: 2
    },
    {
        img: `${post2}`,
        title: 'Burger',
        rows: 2,
        cols: 2
    },
    {
        img: `${post3}`,
        title: 'Camera',
        rows: 2,
        cols: 2
    },
    {
        img: `${post4}`,
        title: 'Coffee',
        cols: 2
    },
    {
        img: `${post5}`,
        title: 'Hats',
        cols: 2
    },
    {
        img: `${post6}`,
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2
    },
    {
        img: `${post7}`,
        title: 'Basketball'
    },
    {
        img: `${post8}`,
        title: 'Fern'
    },
    {
        img: `${post9}`,
        title: 'Mushrooms',
        rows: 2,
        cols: 2
    },
    {
        img: `${post10}`,
        title: 'Tomato basil'
    },
    {
        img: `${post11}`,
        title: 'Sea star'
    }
];
