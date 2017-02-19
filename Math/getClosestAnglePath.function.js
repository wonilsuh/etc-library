/*--
	this function gets around the Math.atan2 return range boundary problem.
	feed a radian angle and another radian angle to compare with.
*/
function getClosestAnglePath(newAngle, oldAngle){
	return Math.abs(newAngle - oldAngle) > Math.PI ? newAngle + Math.sign(oldAngle) * Math.PI *2 : newAngle;
}