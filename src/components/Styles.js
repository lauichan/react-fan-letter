import styled from "styled-components";

export const FanLetterFormSection = styled.section`
  margin: 2rem 0;

  form {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: auto;
  }

  input,
  textarea {
    border: none;
    outline: none;
    font-size: 100%;
    font-family: sans-serif;
    padding: 0.7rem;
  }

  textarea {
    min-height: 150px;
    border-top: 1px dashed #ddd;
    resize: none;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.5rem;
  }

  select,
  button {
    border: none;
    background: #f1f1f1;
    border-radius: 6px;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 100%;
  }
`;

export const FanLetterListSection = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ul > li {
    display: flex;
    gap: 1rem;
    padding: 0.7rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 6px;
  }

  div {
    width: calc(100% - 4rem);
  }

  span {
    font-weight: bold;
  }

  p {
    display: inline-block;
    margin-top: 0.5rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FanLetterDetailSection = styled.section`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  margin: 2rem 0;
`;

export const MemberCardSection = styled.section`
  margin: 2rem 0;
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
    border: 1px solid #ddd;
    padding: 1rem;
    height: 150px;
    background: none;
    border-radius: 10px;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  header {
    display: flex;
    align-items: center;
    height: 50px;
  }

  header > h1 {
    font-weight: bold;
    font-size: 1.5rem;
  }

  header > h1 > a {
    text-decoration: none;
    color: inherit;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
`;
