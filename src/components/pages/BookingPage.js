import React, { useState } from "react";
import Layout from "../ui/Layout";
import styled from "styled-components";
import BookingForm from "../ui/BookingForm";

const BookingPageStyles = styled.div`
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 0;
  }
`;

const BookingPage = () => {
  const [reservationData, setReservationData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  return (
    <Layout>
      {" "}
      <BookingPageStyles>
        <h2>Reservation</h2>
        <BookingForm reservationData />
      </BookingPageStyles>
    </Layout>
  );
};

export default BookingPage;
