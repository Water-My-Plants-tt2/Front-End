import styled from 'styled-components';

export const Form = styled.form`
padding: 2%;
max-width: 250px;
border-radius: 5px;
box-shadow: 0px 9px 15px 0px rgba(0,0,0,0.5);
background: white;
.form-header {
    text-align: center;
    margin-bottom: 1rem;
    h2 {
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: rgb(169, 216, 132);
    }
    p {
        margin-top: .5rem;
        font-size: 1rem;
        font-weight: 600;
    }
}
.form-inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
    width: 100%;
    }
    label {
        font-size: 1.3rem;
        margin-bottom: .5rem;
        font-weight: 500;
        color: rgb(169, 216, 132);
    }
    input {
        border: 1px solid #ddd;
        padding: 0 1rem;
        min-height: 40px;
        border-radius: 5px;
        font-size: 1rem;
        background: transparent;
        &:hover{
            border: 1px solid black;
        }
    }
button {
    border: none;
    background: rgb(169, 216, 132);
    color: white;
    text-align: center;
    border-radius: 2px;
    padding: .5rem 2rem;
    font-size: 1rem; 
    &:hover {
        background-color: #E26D5A;
    }
}
.text-link {
    margin-top: 1rem;
    font-size: 1rem;
    text-align: center;
    color: black;  
    a {
        text-decoration: none;
        color: rgb(169, 216, 132);
        font-weight: 600;
    }
}
`
export default Form