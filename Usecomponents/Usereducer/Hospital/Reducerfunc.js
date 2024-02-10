import React from "react";

const Reducerfunc = (state, action) => {
  switch (action.type) {
    case "admit":
      return {
        ...state,
        patients: [...state.patients, action.patient],
      };
    case "discharge":
      const updatedPatients = state.patients.filter(
        (patient) => patient.id !== action.id
      );
      const dischargedPatient = state.patients.find(
        (patient) => patient.id === action.id
      );
      if (dischargedPatient) {
        alert(`Patient ${dischargedPatient.name} has been discharged.`);
      }
      return {
        ...state,
        patients: updatedPatients,
      };
    default:
      return state;
  }
};
export default Reducerfunc;
