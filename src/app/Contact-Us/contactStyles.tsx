import styled from "styled-components";

export const Page = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #f7f9fb;
  color: #333;
`;

export const ContactSection = styled.section`
  padding: 60px 10%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  width: 100%;
  max-width: 1200px;
`;

export const FormContainer = styled.div`
  flex: 1;
  min-width: 320px;
`;

export const FormTitle = styled.h2`
  border-bottom: 3px solid #4caf50;
  display: inline-block;
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

export const Form = styled.form`
  label {
    display: block;
    margin: 10px 0 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
  }

  input:focus,
  textarea:focus {
    border-color: #4caf50;
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.4);
  }

  button[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 6px;
    margin-top: 15px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  button[type="submit"]:hover {
    background-color: #43a047;
  }
`;

export const AddressContainer = styled.div`
  flex: 1;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 200px;
`;

export const AddrTitle = styled.h2`
  border-bottom: 3px solid #4caf50;
  display: inline-block;
  margin-bottom: 20px;
  padding-bottom: 5px;
`;

export const AddressBlock = styled.div`
  margin-bottom: 20px;

  h3 {
    margin: 0;
    color: #555;
  }

  p {
    color: #777;
    margin-top: 5px;
    line-height: 1.5;
  }

  p:nth-of-type(2) {
    color: #141414;
    font-style: italic;
    margin-top: 0;
  }
`;

export const EmailLink = styled.a`
  color: #4caf50;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 3rem;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

export const FormButton = styled.button`
  background-color: #4b4d58;
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 0.8rem;

  &:hover {
    background-color: #3b3d46;
    transform: translateY(-2px);
  }
`;

export const StatusMessage = styled.p`
  margin-top: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: left;
  transition: opacity 0.3s ease-in-out;
`;
