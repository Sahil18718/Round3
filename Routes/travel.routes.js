const express = require("express")
const {Travel} = require("../Model/travel.model")



const travelRouter = express.Router()

// For checking the router
travelRouter.get("/",(req,res)=>{
    res.status(200).send("Backend travel Routers are working fine");
});

// POST API to add travel data
travelRouter.post('/post', async (req, res) => {
    try {
        const { name, email, destination, travelers, budget } = req.body;
        const newTravel = new Travel({
        name,
        email,
        destination,
        travelers,
        budget,
        });
        await newTravel.save();
        res.status(201).json(newTravel);
    } catch (error) {
        res.status(500).json({ error: 'Could not add travel data' });
    }
});
  
// GET API to retrieve all travel data
travelRouter.get('/alldata', async (req, res) => {
    try {
      const travels = await Travel.find();
      res.json(travels);
    } catch (error) {
      res.status(500).json({ error: 'Could not retrieve travel data' });
    }
});
  
// DELETE API to delete travel data by ID
travelRouter.delete('/delete/:id', async (req, res) => {
    try {
      const deletedTravel = await Travel.findByIdAndDelete(req.params.id);
      res.json(deletedTravel);
    } catch (error) {
      res.status(500).json({ error: 'Could not delete travel data' });
    }
});


// GET API to retrieve travel data with filtering
travelRouter.get('/filter', async (req, res) => {
    try {
      const { destination } = req.query;
      const query = {};
      if (destination) {
        query.destination = destination;
      }
      const travels = await Travel.find(query);
      res.json(travels);
    } catch (error) {
      res.status(500).json({ error: 'Could not retrieve filtered travel data' });
    }
});
  

// GET API to retrieve travel data with sorting
travelRouter.get('/sort', async (req, res) => {
    try {
      const { sortBy } = req.query;
      const sortField = sortBy === 'budget' ? 'budget' : 'name'; // Default to sorting by name
      const travels = await Travel.find().sort(sortField);
      res.json(travels);
    } catch (error) {
      res.status(500).json({ error: 'Could not retrieve sorted travel data' });
    }
});
  
module.exports={
    travelRouter
}