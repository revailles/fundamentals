//No 1
<html>
<script>
    
var cmd = prompt("Enter a number")
var num = Number(cmd)

if ( num % 2 == 0 )
        alert("Entered number is even");
     else
        alert("Entered number is odd");
  
 
</script>
</html>

//No 2

var cmd = prompt("Enter your IMT ( Body weight <kg> / Height^2 ) ");
var imt = Number(cmd);

if ( imt < 18.5 ) {
    alert("Eat more nutritious food! Your body mass is too low"); }
else if ( imt >= 18.5 && imt <= 24.9 ) {
    alert("Keep it up, your body mass is an ideal one"); }
else if ( imt >= 25 && imt <= 29.9 ) {
    alert("Just a little more! Your body mass is a bit much over");}
else if ( imt >=30 && imt <= 39.9 ) {
    alert("Workout, your body mass is overweight");}
else if ( imt > 39.9 ) {
    alert("You got obesity");}