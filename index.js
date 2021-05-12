// if time is between 6am and 12pm: Good morning!
// if time is between 12pm and 6pm: Good afternoon!
// otherwise: Good evning!

const time = 17;

if(time >= 6 && time < 12)
    console.log("Good Morning!")
else if(time => 12 && time <= 18)
    console.log("Good afternoon")
else
    console.log("Good evning!")