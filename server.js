const express =require('express')
const { default: mongoose } = require('mongoose')
const app =express()
app.use(express.json())
app.use("/api",require("./routes/personRoutes"))

mongoose.connect ('mongodb+srv://roua:roua@cluster0.kawwhw8.mongodb.net/?appName=Cluster0')
.then (()=>console.log ('database connected')).catch ((error)=>console.log (error))
const port =5000
app.listen(port,()=> console.log("my server is running on port : ",port))

// UPDATE user
app.put("/person/:id", async (req, res) => {
  try {
    const updatedPerson = await User.findByIdAndUpdate(
      req.params.id,   // user ID from URL
      req.body,        // new data
      { new: true }    // return updated user
    );

    res.status(200).json(updatedPerson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE user
app.delete("/persons/:id", async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
