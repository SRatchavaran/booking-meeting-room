const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.render('main.ejs')
})

module.exports = router

router.use(express.json())
router.use(express.urlencoded({extended:true}))

var data = require('../data/data')


router.post('/booking', async (req, res) => {
    console.log(req.body)
    let booking = {
        room: req.body.rooms,
        username: req.body.username,
        title: req.body.title,
        datetime: req.body.datetime,
    }
    var status = data.checkBooking(booking)
    // let messageJson = { 
    //     statusCode: status.code,
    //     message: status.message,
    //     booking: status.booking
    // };
    // let json = JSON.stringify(messageJson);
    // res.json(JSON.parse(json))
    var titleBooking =  status.code === 200 ? 'YOUR BOOKING: ' : status.code === 201?'BOOKING ที่ชน: ' : 'ข้อมูลไม่ถูกต้อง'
    res.send([
        'STATUS: ' + status.message,
        titleBooking + (status.code === 202 ? '' :(JSON.stringify(status.booking))),
        '<a href="/">Back</>'
    ].join('<br>'))
})

router.post('/api/users/create', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    // Assume that we save it to db
    console.log('Saved to the database.');
    res.send([
        'Signup completed',
        `Name: ${name}`,
        `Email: ${email}`,
        `Password: ${'*'.repeat(password.length)}`,
        '<a href="/">Back</>'
    ].join('<br>'));
});

router.post('/timezone', async (req, res) => {
    const timezone  = req.body.timezone
    process.env.TZ = timezone;
    const date = new Date().toLocaleString();
    let timezoneJson = { 
      date: date,
		};
   
    let data = JSON.stringify(timezoneJson);
    res.send(JSON.parse(data))
})