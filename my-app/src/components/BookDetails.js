import React from "react";
import { styled } from "styled-components";

const BookDetails = ({ book }) => {
  return (
    <BookInfo>
      <Title>{book.title}</Title>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
    </BookInfo>
  );
};

const BookInfo = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  background-color: white;
  width: 300px;
  // padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
`;

const Title = styled.h2`
  text-align: center;
`;

export default BookDetails;
