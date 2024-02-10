import React, { useReducer, useState } from "react";
import Reducerfunc from "./Reducerfunc";

const HospitalApp = () => {
  const initialState = {
    patients: [],
  };

  const [state, dispatch] = useReducer(Reducerfunc, initialState);
  const [patientName, setPatientName] = useState("");

  const handleAdmit = () => {
    const name = prompt("Enter patient name:");
    if (name) {
      const id = new Date().getTime().toString();
      const patient = { id, name };
      dispatch({ type: "admit", patient });
      setPatientName(name);
    }
  };

  const handleDischarge = (id) => {
    dispatch({ type: "discharge", id });
  };

  return (
    <div>
      <h1>Hospital Patient Admission/Discharge</h1>
      <h2>Patients:</h2>
      <ul>
        {state.patients.map((patient) => (
          <li key={patient.id}>
            {patient.name}
            <button onClick={() => handleDischarge(patient.id)}>
              Discharge
            </button>
          </li>
        ))}
      </ul>
      {patientName && <p>Admitted patient: {patientName}</p>}
      <button onClick={handleAdmit}>Admit Patient</button>
    </div>
  );
};

export default HospitalApp;
