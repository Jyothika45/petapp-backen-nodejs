import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddPet = () => {

  const [input, changeData] = useState({
    bookingId: "",
    petName: "",
    petType: "",
    breed: "",
    age: "",
    weight: "",
    vaccinationStatus: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    checkInDate: "",
    checkOutDate: "",
    kennelNumber: ""
  })

  const inputHandler = (event) => {
    changeData({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const readValue = () => {
    console.log(input)
    axios.post("http://localhost:4000/add-pet", input).then(
      (response) => {
        console.log(response.data)
        alert("Pet added successfully")
      }
    ).catch(
      (error) => {
        console.error("Error adding pet:", error)
        alert("Failed to add pet")
      }
    )
  }

  return (
    <div>

      <NavigationBar />

      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <h3 className="text-center mb-4">ADD PET</h3>

            <div className="row g-3">

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Booking ID :</label>
                <input
                  type="text"
                  className="form-control"
                  name="bookingId"
                  value={input.bookingId}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Pet Name :</label>
                <input
                  type="text"
                  className="form-control"
                  name="petName"
                  value={input.petName}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Pet Type :</label>
                <select
                  className="form-select"
                  name="petType"
                  value={input.petType}
                  onChange={inputHandler}
                >
                  <option value="">Select Pet Type</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Breed :</label>
                <input
                  type="text"
                  className="form-control"
                  name="breed"
                  value={input.breed}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Age :</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={input.age}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Weight (kg) :</label>
                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  value={input.weight}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Vaccination Status :</label>
                <select
                  className="form-select"
                  name="vaccinationStatus"
                  value={input.vaccinationStatus}
                  onChange={inputHandler}
                >
                  <option value="">Select Status</option>
                  <option value="Vaccinated">Vaccinated</option>
                  <option value="Not Vaccinated">Not Vaccinated</option>
                </select>
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Owner Name :</label>
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  value={input.ownerName}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Owner Phone :</label>
                <input
                  type="text"
                  className="form-control"
                  name="ownerPhone"
                  value={input.ownerPhone}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Owner Email :</label>
                <input
                  type="email"
                  className="form-control"
                  name="ownerEmail"
                  value={input.ownerEmail}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Check-in Date :</label>
                <input
                  type="date"
                  className="form-control"
                  name="checkInDate"
                  value={input.checkInDate}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Check-out Date :</label>
                <input
                  type="date"
                  className="form-control"
                  name="checkOutDate"
                  value={input.checkOutDate}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Kennel Number :</label>
                <input
                  type="text"
                  className="form-control"
                  name="kennelNumber"
                  value={input.kennelNumber}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
                <button
                  className="btn btn-success"
                  onClick={readValue}
                >
                  ADD PET
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddPet