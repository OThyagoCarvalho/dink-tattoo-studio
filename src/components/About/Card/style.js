import styled from 'styled-components';

export const CardContainer = styled.div`
    width: auto;
    min-width: 275px;
    min-height: 350px;
    background-color: var(--light-bg);
    position: relative;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    /* margin: 10px; */
    justify-content: flex-start !important; // couldn't find a better way to force this setup because styling was being applied when making changes in developer tools but wasn't being applied in the final version

    @media (min-width: 1200px) {
        width: 30%;
        min-width: 340px;
        max-width: 560px;
        margin-bottom: 0;
    }
`;

export const CardHead = styled.div`
    background-color: #ddd;
    display: flex;
    justify-content: flex-start !important;
    align-items: center;
    width: 100%;
    padding: 10px;

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 8px;

        p {
            display: flex;
            align-items: center;
            color: var(--greyed-out);
            font-weight: 400;
        }
    }
    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
    }
`;

export const CardBody = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    color: #000;
    text-align: justify;
    text-align-last: start;

    > div {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;

        h4 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
`;
export const TagsContainer = styled.div`
    display: flex;
`;

export const Tag = styled.div`
    background-color: transparent;
    font-size: 0.8rem;
    color: var(--greyed-out);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px 8px 0px;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid var(--greyed-out);
`;
