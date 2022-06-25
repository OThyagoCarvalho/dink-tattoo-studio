import styled from 'styled-components';


export const CardContainer = styled.div`
    width: 300px;
    min-height: 610px;
    background: #111;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #000;
    margin: 10px;
    justify-content: flex-start !important; // couldn't find a better way to force this setup because styling was being applied when making changes in developer tools but wasn't being applied in the final version
    
`;

export const CardProfilePic = styled.div`
    width: 100%;
    height: 300px;
    background-size: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  
`;

export const CardTitle = styled.div`
    background-color: #ddd;
    display: block;
    justify-content: center;
    text-align: center;
    width: 100%;
    font-weight: bold;
`;

export const CardBody = styled.div`
    padding: 10px;    
    display: flex;
    justify-content: center;
    height: 100%;
    color: #ccc;
    text-align: justify;
    text-align-last: start;
    
    > div {
        width: 100%;
        position: absolute;
        bottom: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
    }
`;


export const TagsContainer = styled.div`
    background-color: #c00a00;
    font-size: 0.8rem;   
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 5px;
    padding: 1px 5px;
    border-radius: 2.5px;     
`;
