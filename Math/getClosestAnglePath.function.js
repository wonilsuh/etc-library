/*--
	this function gets around the Math.atan2 return range boundary problem.
*/
function getClosestAnglePath(newAngle, oldAngle){
	// normalize new angle relative to the old angle
	var newAngleN = (newAngle - oldAngle) % (Math.PI *2) + oldAngle;
	return Math.abs(newAngleN - oldAngle) > Math.PI ? newAngleN + Math.sign(oldAngle) * Math.PI *2 : newAngleN;
}