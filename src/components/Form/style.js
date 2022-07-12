import styled from 'styled-components';

export const Container = styled.form`
    box-sizing: border-box;
    background-color: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;
    height: 600px;
    border-radius: 5px;
    position: relative;

    label {
        font-size: 0.85rem;
        font-weight: bold;
        color: #111;
        margin-left: 15px;
    }

    input {
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 5px 15px 25px 15px;
        padding: 5px;
        font-size: 1.25rem;
        ::placeholder {
            font-size: 1rem;
            font-weight: 400;
            font-style: oblique;
        }
    }

    textarea {
        resize: none;
        padding: 15px;
        margin: 0 0 0 15px;
        width: 90%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        ::placeholder {
            font-size: 1rem;
        }
    }

    button {
        background-color: #000;
        height: 50px;
        width: 150px;
        border: none;
        border-radius: 5px;
        color: #fff;
        margin-bottom: 15px;
    }
`;

export const FormTitle = styled.div`
    background-color: #111;
    color: #fff;
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0 0;
    h3 {
        font-size: 1.25rem;
        font-weight: 700;
    }
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;
