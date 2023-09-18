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

  .confirmation {
    text-align: center;
    color: var(--primary-green);
    background: var(--primary-yellow);
    border-radius: var(--borderRadius);
    padding: 10px;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const BookingForm = ({ changeAvailableTimes }) => {
  const [formResponses, setFormResponses] = useState({
    date: "",
    time: "",
    guests: 1,
    occassion: "Birthday",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormResponses({
      ...formResponses,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("date", formResponses.date);
    localStorage.setItem("time", formResponses.time);
    localStorage.setItem("guests", formResponses.guests);
    localStorage.setItem("occassion", formResponses.occassion);
    setIsFormSubmitted(true);
  };

  return (
    <Layout>
      {" "}
      <FormStyles>
        <form>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            name="date"
            id="res-date"
            value={formResponses.date}
            onChange={handleChange}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={formResponses.time}
            onChange={handleChange}
          >
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
            value={formResponses.guests}
            onChange={handleChange}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occassion"
            value={formResponses.occasion}
            onChange={handleChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input
            type="submit"
            value="Make Your reservation"
            onClick={submitHandler}
          />
        </form>
        {isFormSubmitted && (
          <p className="confirmation">
            Thank you! Your reservation for {formResponses.guests} on{" "}
            {formResponses.date} been successfully submitted.
          </p>
        )}
      </FormStyles>
    </Layout>
  );
};

export default BookingForm;
