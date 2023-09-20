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

exports.findAll = function () {
  return data
}

exports.checkBooking = function (newdata) {
  var room = newdata.room
  var datetime =  new Date( newdata.datetime)
  var title = newdata.title
  var username = newdata.username
  
  if(title === null || title === undefined || title ==='' ||username ===null){
    return {code:202, message: 'Incomplete information',booking: newdata}
  }
  for (var i = 0; i < data.length; i++) {
    var checkDatetime = new Date(data[i].datetime)
     console.log(checkDatetime.getTime() + datetime.getTime());
    if (data[i].room === room && (checkDatetime.getDate() === datetime.getDate() && datetime.getTime() === checkDatetime.getTime())) return {code:201, message: 'Booking Fail', booking: data[i]}
  }
  return {code:200, message: '---------Success---------',booking: newdata}
}

exports.add = function (newdata) {
  var arr = Array.from(data);
  arr.push(newdata)
  return arr
}