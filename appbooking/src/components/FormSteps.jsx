import React from "react";
import DetailsForm from "./Step1_Details";
import ReviewDetails from "./Step3_Review";
import ScheduleForm from "./Step2_Type";
import { useAppointment } from "../store/AppointmentContext";

const FormSteps = () => {
  const { step } = useAppointment();
  switch (step) {
    case 1:
      return <DetailsForm />;
    case 2:
      return <ScheduleForm />;
    case 3:
      return <ReviewDetails />;
    default:
      return null;
  }
};

export default FormSteps;
