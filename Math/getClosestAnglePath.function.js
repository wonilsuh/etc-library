/*--
	this function gets around the Math.atan2 return range boundary problem.
	feed a radian angle and another radian angle to compare with.
	For demonstration, see this codepen: http://codepen.io/wonilsuh/pen/JEQEzY/
*/
function getClosestAnglePath(newAngle, oldAngle){
	return Math.abs(newAngle - oldAngle) > Math.PI ? newAngle + Math.sign(oldAngle) * Math.PI *2 : newAngle;
}