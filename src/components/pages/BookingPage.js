import React, { useState } from "react";
import Layout from "../ui/Layout";
import styled from "styled-components";
import BookingForm from "../ui/BookingForm";

const BookingPageStyles = styled.div`
  margin: 0 auto;

  h2 {
    text-align: center;
  }
`;

const BookingPage = () => {
  return (
    <Layout>
      {" "}
      <BookingPageStyles>
        <h2>Reservation</h2>
        <BookingForm />
      </BookingPageStyles>
    </Layout>
  );
};

export default BookingPage;
