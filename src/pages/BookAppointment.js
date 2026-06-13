import React, { useState } from "react";
import "./BookAppointment.css";

const API_URL = "http://localhost:8080/api";

function BookAppointment() {
  const [mode, setMode] = useState(null);
  const [step, setStep] = useState(1);
  const [patientID, setPatientID] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const services = [
    "Dental Cleaning",
    "Tooth Filling",
    "Root Canal Treatment",
    "Tooth Extraction",
    "Teeth Whitening",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewPatient = async () => {
    const { name, age, phone, address } = formData;
    if (!name || !age || !phone || !address) {
      alert("Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/patients/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age: parseInt(age), phone, address }),
      });
      const data = await response.json();
      setPatientID(data.patientId);
      alert(
        "Your Patient ID: " +
          data.patientId +
          "\nPlease save this for future visits.",
      );
      setStep(2);
    } catch (error) {
      alert("Error registering patient. Please try again.");
    }
    setLoading(false);
  };

  const handleReturning = async () => {
    if (!patientID) {
      alert("Please enter your Patient ID.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/patients/${patientID}`);
      if (response.ok) {
        setStep(2);
      } else {
        alert("Patient ID not found. Please check and try again.");
      }
    } catch (error) {
      alert("Error checking Patient ID. Please try again.");
    }
    setLoading(false);
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async () => {
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/appointments/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId: patientID,
          services: selectedServices.join(", "),
          appointmentDate: new Date().toISOString().split("T")[0],
          status: "Pending",
        }),
      });
      await response.json();
      alert(
        "Appointment booked successfully!\nPatient ID: " +
          patientID +
          "\nServices: " +
          selectedServices.join(", "),
      );
      setStep(1);
      setMode(null);
      setSelectedServices([]);
      setFormData({ name: "", age: "", phone: "", address: "" });
    } catch (error) {
      alert("Error booking appointment. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="book-wrapper">
      {step === 1 && (
        <>
          <div className="button-group">
            <button className="new-btn" onClick={() => setMode("new")}>
              New Patient
            </button>
            <button
              className="returning-btn"
              onClick={() => setMode("returning")}
            >
              Returning Patient
            </button>
          </div>

          {mode === "new" && (
            <div className="book-form">
              <h2>New Patient — Fill Your Details</h2>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              <label>Age</label>
              <input
                type="number"
                name="age"
                min="1"
                value={formData.age}
                onChange={handleChange}
              />
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={handleChange}
              />
              <label>Address</label>
              <textarea
                name="address"
                placeholder="Your address"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
              <button
                className="submit-btn"
                onClick={handleNewPatient}
                disabled={loading}
              >
                {loading ? "Registering..." : "Generate Patient ID & Next"}
              </button>
            </div>
          )}

          {mode === "returning" && (
            <div className="book-form">
              <h2>Returning Patient — Enter Your ID</h2>
              <label>Patient ID</label>
              <input
                type="text"
                placeholder="Enter your ID"
                value={patientID}
                onChange={(e) => setPatientID(e.target.value)}
              />
              <button
                className="submit-btn"
                onClick={handleReturning}
                disabled={loading}
              >
                {loading ? "Checking..." : "Proceed"}
              </button>
            </div>
          )}
        </>
      )}

      {step === 2 && (
        <div className="book-form">
          <h2>Select Service(s)</h2>
          <ul className="service-list">
            {services.map((service, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />{" "}
                  {service}
                </label>
              </li>
            ))}
          </ul>
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Booking..." : "Submit Appointment"}
          </button>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;
