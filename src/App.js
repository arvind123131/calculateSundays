import React, { useState } from "react";
import UserDetails from "./UserDetails";
import DateComponent from "./DateComponent";
import './App.css'

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [sundays, setSundays] = useState(null);

  const handleUserDetailsSubmit = (userDetails) => {
    setUserDetails(userDetails);
  };

  const handleCalculateSundays = (userDetails, sundays) => {
    setSundays(sundays);
  };

  return (
    <div>
      {sundays !== null ? (
        <div>
          <h1>Results</h1>
          <p>
            Name: {userDetails.name}
            <br />
            Email: {userDetails.email}
            <br />
            Gender: {userDetails.gender}
            <br />
            DOB: {userDetails.dob}
            <br />
            Phone: {userDetails.phone}
            <br />
            Number of Sundays: {sundays}
          </p>
        </div>
      ) : (
        <div>
          <h1>User Details</h1>
          <UserDetails onSubmit={handleUserDetailsSubmit} />
          {Object.keys(userDetails).length > 0 && (
            <>
              <h1>Date Component</h1>
              <DateComponent
                userDetails={userDetails}
                onCalculateSundays={handleCalculateSundays}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
