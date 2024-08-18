import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProductInfo = (props) => {
  return (
    <InfoContainer>
      <ProductName>{props.name}</ProductName>
      <ProductPrice>{props.price}</ProductPrice>
    </InfoContainer>
  );
};

ProductInfo.prototype = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

const InfoContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
`;
const ProductName = styled.h2`
  color: #333;
`;
const ProductPrice = styled.p`
  color: #008080;
  font-weight: bold;
`;

export default ProductInfo;
