import React, { useState } from "react";
import Layout from "../ui/Layout";
import styled from "styled-components";

const FormStyles = styled.div`
  width: 50%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input,
  select {
    padding: 7px;
    border-radius: var(--borderRadius);
    margin: 10px 0;
    border: solid 2px grey;
  }

  input[type="submit"] {
    background: var(--primary-yellow);
    border: solid 1px var(--primary-yellow);
    padding: 10px;
    text-transform: uppercase;
  }

  h2 {
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Reservation = () => {
  const [reservationData, setReservationData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Subimtted");
  };
  return (
    <Layout>
      {" "}
      <FormStyles>
        <h2>Reservation</h2>
        <form>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={reservationData.date} />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time " name="time" value={reservationData.time}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={reservationData.guests}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occassion"
            value={reservationData.occasion}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input
            type="submit"
            value="Make Your reservation"
            onClick={handleSubmit}
          />
        </form>
      </FormStyles>
    </Layout>
  );
};

export default Reservation;
// display: grid; max-width: 200px; gap: 20px
