import styled from 'styled-components';
import dhyego from '../../../images/dhyego.png';

export const CardContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #000;
    margin: 10px;
`;

export const CardProfilePic = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${dhyego});
    background-size: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;
export const CardBody = styled.div`
    padding: 10px;
    color: #ccc;
    background: #111;
`;

export const CardTitle = styled.div`
    background-color: #ddd;
    text-align: center;
`;
export const TagsContainer = styled.div`
    background-color: #c00a00;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 5px;
    padding: 1px 5px;
    border-radius: 2.5px;
`;
