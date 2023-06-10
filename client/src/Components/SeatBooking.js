import React, { useState } from "react";
import axios from "axios";
import "./SeatBooking.css";

function SeatBooking() {
  const [seats, setSeats] = useState([]);
  const [message, setMessage] = useState("");

  const handleAddSeats = async () => {
    try {
      const response = await axios.post("/api/seats", { seats });
      const { success, message, data } = response.data;

      if (success) {
        setSeats(data);
        setMessage(message);
      } else {
        setMessage(message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to add seats");
    }
  };

  const handleGetAllSeats = async () => {
    try {
      const response = await axios.get("http://localhost:8080/v1/Seats");
      const { success, message, data } = response.data;

      
      console.log(data)
      if (success) {
        setSeats(data);
        setMessage(message);
      } else {
        setMessage(message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to retrieve seats");
    }
  };

  const handleUpdateSeatStatus = async () => {
    try {
      const response = await axios.put("/api/seats", { seats });
      const { success, message, data } = response.data;

      if (success) {
        setSeats(data);
        setMessage(message);
      } else {
        setMessage(message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to update seat reservation status");
    }
  };
  // function GetNumber(e) {
  //   setNoOfSeats(e.target.value);
  // }

  return (
    <div>
      <h1>Seat Booking</h1>

      <label>
        <input
          placeholder="enter number of seats"
          type="number"
          min="1"
          max="7"
        />
        <button onClick={handleAddSeats}>Add Seats</button>
      </label>
      <label>
        <input
          placeholder="enter seat number"
          type="number"
          min="1"
          max="80"
        
        />
        <button onClick={handleUpdateSeatStatus}>Update Seat Status</button>
      </label>
      <button onClick={handleGetAllSeats}>Get All Seats</button>

      <div>{message}</div>
      <div>
        {seats.map((seat) => (
          <div
            style={{ backgroundColor: seat.isBooked ? "red" : "green" }}
            key={seat.id}
            className="seat"
          >
            <span className="row">{seat.row}</span>
            <span className="number">{seat.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatBooking;
