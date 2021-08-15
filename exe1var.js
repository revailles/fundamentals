// No. 1
var x = 4;
var y = 3;
var z = 2;
var top = x + y * z;
var bot = x * y;
var w = Math.pow(top / bot, 2);
//console.log(w)

// No. 2
//console.log(Math.cbrt(8))

// No. 3
// days = 485
// year = 360
// month = 30 
// week = 7
// 485 / 360 = 1 (Math.floor)
// 485 % 360 = 125
// 125 / 30 = 4 (Math.floor)
// 125 % (30 * 4) = 5
// 5 % 7 = 5

var days = 485
var year = Math.floor(days / 360)
days = days % 360
var month = Math.floor(days/ 30)
days = days % (30 * 4)
var week = Math.floor(days / 7)
days = days % 7
console.log(`${year} year, ${month} month, ${week} week, ${days} days`)