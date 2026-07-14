import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'

const ViewPets = () => {

  const [data, changeData] = useState([])

  const fetchData = () => {
    axios
      .post("http://localhost:4000/view-pets")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <h2 className="text-center mb-4">
              View All Pets
            </h2>

            <div className="row">

              {
                data.map((value, index) => {
                  return (

                    <div
                      key={index}
                      className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-3"
                    >

                      <div className="card h-100 shadow">

                        <div className="card-body">

                          <h5 className="card-title">
                            {value.petName}
                          </h5>

                          <p className="card-text">
                            <strong>Booking ID :</strong> {value.bookingId}
                          </p>

                          <p className="card-text">
                            <strong>Pet Type :</strong> {value.petType}
                          </p>

                          <p className="card-text">
                            <strong>Breed :</strong> {value.breed}
                          </p>

                          <p className="card-text">
                            <strong>Age :</strong> {value.age}
                          </p>

                          <p className="card-text">
                            <strong>Weight :</strong> {value.weight} kg
                          </p>

                          <p className="card-text">
                            <strong>Vaccination Status :</strong> {value.vaccinationStatus}
                          </p>

                          <p className="card-text">
                            <strong>Owner Name :</strong> {value.ownerName}
                          </p>

                          <p className="card-text">
                            <strong>Owner Phone :</strong> {value.ownerPhone}
                          </p>

                          <p className="card-text">
                            <strong>Owner Email :</strong> {value.ownerEmail}
                          </p>

                          <p className="card-text">
                            <strong>Check-in Date :</strong> {value.checkInDate}
                          </p>

                          <p className="card-text">
                            <strong>Check-out Date :</strong> {value.checkOutDate}
                          </p>

                          <p className="card-text">
                            <strong>Kennel Number :</strong> {value.kennelNumber}
                          </p>

                        </div>

                      </div>

                    </div>

                  )
                })
              }

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewPets