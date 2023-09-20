const express = require('express')
const app = express()
const port = 4000
const mysql2 = require('mysql2')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const connection = mysql2.createConnection({
  host: 'db4free.net',
  user: 'evaa7762',
  password: 'evaa7762',
  database: 'mydatabase_evaaa'
});

app.post('/timezone', async (req, res) => {
  
    //res.json(req.body.username)
    // const {tz} = req.params
    const timezone  = req.body.timezone
    // const dt = new Date(time)
    process.env.TZ = timezone;

    const date = new Date().toLocaleString();
    //  let sql = "SELECT * FROM user"

    // await connection.execute(sql, [time], (err, result)=>{
    //   if(err){
    //     res.status(500).json({
    //       message: err.message
    //     })
    //     return
    //   }

    //   res.status(200).json({
    //     message: "SUCCESS",
    //     data: result
    //   })
    // })

    let timezoneJson = { 
      date: date,
   };
   
    let data = JSON.stringify(timezoneJson);
    res.send(JSON.parse(data))
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})