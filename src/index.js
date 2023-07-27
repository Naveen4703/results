const express=require('express')
const serverRouter = require("./routers/server");
const path=require('path')
const app=express()

const port=process.env.PORT || 4000
const publicDirectoryPath=path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(serverRouter)

// Route for the admin subdomain
app.get('/', (req, res) => {
   if (req.subdomains.length > 0 && req.subdomains[0] === 'admin') {
  // Logic to serve your admin dashboard (e.g., admin.html) here
      console.log(req.subdomains);
      // res.redirect('https://results-4p8w-admin.onrender.com');
      res.sendFile(path.join(__dirname, '../admin'));
   } else {
    // If accessed directly without the "admin" subdomain, respond with an error message or redirect
    res.status(403).send('Access to the admin dashboard is not allowed.');
    // or res.redirect('https://yourdomain.com'); // Redirect to the main domain, for example
  }
});

app.listen(port,()=>{
    console.log("server is up and running on ",port)
})
