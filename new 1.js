		
		
		function background() {
			var g=Math.floor(Math.random()*256).toString();
			var r=Math.floor(Math.random()*256).toString();
			var b=Math.floor(Math.random()*256).toString();
			var color ="rgb("+r+","+g+","+b+")";
			document.body.style.backgroundColor=color;
		}
		function website() {
			var randNum=Math.floor(Math.random()*10000).toString();
			var newLink= "https://twitter.com/"+randNum;
			
		}
		function name() {
			c=c*-1;
			
		}
		
	function getColor() {
		return "hsl("+360 * Math.random() +"," +
		(25 +70 * Math.random())+ '%,'+
		(85 +10 *Math.random()) + '%)'
	}
	
var today = new Date();
	var day = today.getDay();
	var daylist= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	console.log ("Today is :" + daylist[day] + ".");
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	var prepand = (hour >=12)? "PM":"AM";
	hour = (hour >=12)? hour -12: hour;
	if (hour===0 && prepand===' PM ')
	{
		if (minute===0 && second===0)
		{
			hour=12;
			prepand= 'Noon';
		}
		else {
			hour=12;
			prepand='PM';
		}
	}
	if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);