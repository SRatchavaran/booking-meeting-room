var data = [
  {
    room: 'Paris',
    username: 'Tontao',
    title: 'Daily meeting',
    datetime: '2023-10-02T10:30'
  },
  {
    room: 'Paris',
    username: 'Tontao',
    title: 'Daily meeting',
    datetime: '2023-10-03T10:30'
  }
]


exports.checkBooking = function (newdata) {
  var room = newdata.room
  var dateNewData =  new Date(newdata.datetime).toLocaleDateString()
  var timeNewData =  new Date(newdata.datetime).toLocaleTimeString()

  var title = newdata.title
  var username = newdata.username
  
  if(title === null || title === undefined || title ==='' ||username ===null){
    return {code:202, message: 'Incomplete information',booking: newdata}
  }
  for (var i = 0; i < data.length; i++) {
    var checkDate = new Date(data[i].datetime).toLocaleDateString()
    var checkTime = new Date(data[i].datetime).toLocaleTimeString()

    if (data[i].room === room && checkDate === dateNewData && checkTime === timeNewData){
      return {code:201, message: 'Booking Fail', booking: data[i]}
    }
  }
  return {code:200, message: 'Success',booking: newdata}
}

exports.add = function (newdata) {
  var arr = Array.from(data);
  arr.push(newdata)
  return arr
}