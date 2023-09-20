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
    var titleBooking =  status.code === 200 ? 'YOUR BOOKING: ' : status.code === 201?'BOOKING ที่ชน: ' : 'ข้อมูลไม่ถูกต้อง'
    res.send([
        'STATUS: ' + status.message,
        titleBooking + (status.code === 202 ? '' :(JSON.stringify(status.booking))),
        '<a href="/">Back</>'
    ].join('<br>'))
})