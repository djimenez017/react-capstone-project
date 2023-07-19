import React from "react";
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
  }

  input[type="submit"] {
    background: var(--primary-yellow);
    border: solid 1px var(--primary-yellow);
    padding: 10px;
    text-transform: uppercase;
  }
`;

const Reservation = () => {
  return (
    <Layout>
      {" "}
      <h2>Reservation</h2>
      <FormStyles>
        <form>
          <label for="res-date">Choose date</label>
          <input type="date" id="res-date" />
          <label for="res-time">Choose time</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label for="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
          <label for="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input type="submit" value="Make Your reservation" />
        </form>
      </FormStyles>
    </Layout>
  );
};

export default Reservation;
// display: grid; max-width: 200px; gap: 20px
