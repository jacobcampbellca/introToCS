function computeArea(roomHeight, roomLength, roomWidth)	{
	var wall1area=roomHeight*roomLength;
	var wall2area=roomHeight*roomWidth;
	var wall3area=roomHeight*roomLength;
	var wall4area=roomHeight*roomWidth;
	var totalArea=(wall1area+wall2area+wall3area+wall4area);
	return totalArea;
}

function getRoomName()	{
	var roomName=prompt('Name of room to be painted:');
	return roomName;
}

function getRoomHeight()	{
	var roomHeight=Number(prompt('Wall height in feet:'));
	return roomHeight;
}

function getRoomWidth()	{
	var roomWidth=Number(prompt('Room width in feet:'));
	return roomWidth;
}

function getRoomLength()	{
	var roomLength=Number(prompt('Room length in feet:'));
	return roomLength;
}

function showRoomRow(roomName, roomHeight, roomLength, roomWidth, wallArea)	{
	document.write('<tr>');
	document.write('<td>' +roomName+ '</td>');
	document.write('<td>' +roomLength+ '</td>');
	document.write('<td>' +roomWidth+ '</td>');
	document.write('<td>' +roomHeight+ '</td>');
	document.write('<td>' +wallArea+ '</td>');
	document.write('</tr>');
}

function getAndShowRoomArea()	{
	var roomName=getRoomName();
	var roomLength=getRoomLength();
	var roomWidth=getRoomWidth();
	var roomHeight=getRoomHeight();
	var totalArea=computeArea(roomHeight, roomLength, roomWidth);
	showRoomRow(roomName, roomHeight, roomLength, roomWidth, totalArea)
	return totalArea;
}

function computeGallons(totalArea, gallonsPerSquareFeet)	{
	var gallonsNeeded=totalArea*gallonsPerSquareFeet;
	return gallonsNeeded;
}

function showTotals(totalArea, gallonsNeeded, totalCost)	{
	document.write('<br><h2 style="margin-top:-20px; margin-bottom:0px"><u>Totals</u></h2>');
	document.write('<b>Paintable Area: ' +totalArea+ ' ft<sup>2</sup></b><br>');
	document.write('<b>Gallons Needed: ' +gallonsNeeded+ '</b><br>');
	document.write('<b>Total Cost of Paint: $' +totalCost+ '</b><br>');
}

function closeTable()	{
	document.write('</table><br>');
}

function showHeaderRow()	{
	document.write('<tr>');
	document.write('<th style="width: 100px">Room Name:</th>');
	document.write('<th style="width: 100px">Room Length:</th>')
	document.write('<th style="width: 100px">Room Width:</th>');
	document.write('<th style="width: 100px">Room Height:</th>');
	document.write('<th style="width: 100px">Wall Area:</th>');
	document.write('</tr>');
}

function getGPSF()	{
	var squareFeetPerGallons=Number(prompt('Square feet covered by one gallon of paint:'));
	var gallonsPerSquareFeet=(1/squareFeetPerGallons);
	return gallonsPerSquareFeet;
}

function	 getCostPerGallon()	{
	costPerGallon=Number(prompt('Cost of one gallon of paint:'))
	return costPerGallon;
}

function computeFinalCost(gallonsNeeded, costPerGallon){
	var totalCost=gallonsNeeded*costPerGallon
	return totalCost;
}

function openTable()	{
	document.write('<table border="1">');
}

function calculatePaint()	{
	var totalArea=0;
	gallonsPerSquareFeet=getGPSF().toFixed(5);
	costPerGallon=getCostPerGallon().toFixed(2);
	document.write('<b>One gallon of paint costs $' +costPerGallon+ '.</b><br>');
	document.write('<b>Your brand of paint gets ' +gallonsPerSquareFeet+ ' gallon(s) per square foot.</b><br><br>');
	openTable();
	showHeaderRow();
	var area=getAndShowRoomArea();
	totalArea=totalArea+area;
	closeTable();
	gallons=computeGallons(totalArea, gallonsPerSquareFeet).toFixed(2);
	cost=computeFinalCost(gallons, costPerGallon).toFixed(2);
	showTotals(totalArea, gallons, cost);
}

calculatePaint();