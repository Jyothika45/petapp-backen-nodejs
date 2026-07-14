const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://jyothika:Jyothika2002@ac-njzwpkd-shard-00-00.01mee5b.mongodb.net:27017,ac-njzwpkd-shard-00-01.01mee5b.mongodb.net:27017,ac-njzwpkd-shard-00-02.01mee5b.mongodb.net:27017/petsdb?ssl=true&replicaSet=atlas-qh0il0-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("mongo db connected")
    }
).catch(
    (error) => {
        console.log(error)
    }
)

const Pet = mongoose.model("Pets", new mongoose.Schema(
    {
        bookingId: String,
        petName: String,
        petType: String,
        breed: String,
        age: String,
        weight: String,
        vaccinationStatus: String,
        ownerName: String,
        ownerPhone: String,
        ownerEmail: String,
        checkInDate: String,
        checkOutDate: String,
        kennelNumber: String
    }
))

app.post("/add-pet", async (req, res) => {
    await Pet.create(req.body)
    res.json({ status: "success" })
})

app.post("/view-pets", async (req, res) => {
    const pets = await Pet.find()
    res.json(pets)
})

app.listen(3000, () => {
    console.log("Server Started")
})