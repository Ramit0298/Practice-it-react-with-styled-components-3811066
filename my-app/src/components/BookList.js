import React from "react";
import BookDetails from "./BookDetails";
import { styled } from "styled-components";

const BookList = ({ books }) => {
  return (
    <BookInfoContainer>
      <Title>My Reading List</Title>
      <BookDetailsList>
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </BookDetailsList>
    </BookInfoContainer>
  );
};

const BookInfoContainer = styled.div`
  background-color: lightgray;
  height: 100vh;
  overflow: scroll;
  // padding: 20px;
`;

const Title = styled.h1`
  // display: flex;
  // justify-content: center;
  margin: 0;
  color: darkgreen;
  text-align: center;
  // font-family: "Arial", sans-serif;
`;

const BookDetailsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-content: start;
  gap: 5%;
`;

export default BookList;
