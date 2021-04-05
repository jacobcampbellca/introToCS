function getDriverAge(driverAge) {
	var driverAge = Number(prompt('Enter Age of Primary Driver:'));
	return driverAge;
}

function getDriverAgeSurcharge(driverAge) {
	if (driverAge < 15) {
		document.write('Driver Age Surcharge: Driving Illegally <br><br>');
	}
	else if (driverAge >= 15 && driverAge <= 18) {
		var driverAgeSurcharge = (899.99);
		document.write('Driver Age Surcharge: $899.99<br><br>')
	}
	else if (driverAge >= 19 && driverAge <= 25) {
		var driverAgeSurcharge = (699.99);
		document.write('Driver Age Surcharge: $699.99<br><br>')
	}
	else if (driverAge >= 26 && driverAge <= 35) {
		var driverAgeSurcharge = (199.99);
		document.write('Driver Age Surcharge: $199.99<br><br>')
	}
	else if (driverAge >= 36 && driverAge <= 70) {
		var driverAgeSurcharge = (0.00);
		document.write('Driver Age Surcharge: $0.00<br><br>')
	}
	else if (driverAge >= 71 && driverAge <= 80) {
		var driverAgeSurcharge = (199.99);
		document.write('Driver Age Surcharge: $199.99<br><br>')
	}
	else if (driverAge >= 91) {
		var driverAgeSurcharge = (999.99)
		document.write('Driver Age Surcharge: $999.99<br><br>')
	}
	return driverAgeSurcharge;
}

function getVehicleAge(vehicleAge) {
	var vehicleYear = Number(prompt('Enter Year of Vehicle Being Insured:'));
	var vehicleAge = 2017 - vehicleYear
	return vehicleAge
}

function getVehicleAgeDiscount(vehicleAge) {
	if (vehicleAge <= 5) {
		var vehicleAgeDiscount = (0.00);
		document.write('Vehicle Age Discount: -($0.00)<br><br>')
	}
	else if (vehicleAge >= 6 && vehicleAge <=10) {
		var vehicleAgeDiscount = (125.99);
		document.write('Vehicle Age Discount: -($125.99)<br><br>')
	}
	else if (vehicleAge >= 11 && vehicleAge <= 15) {
		var vehicleAgeDiscount = (199.99);
		document.write('Vehicle Age Discount: -($199.99)<br><br>')
	}
	else if (vehicleAge > 15){
		var vehicleAgeDiscount = (0.00);
		document.write('Vehicle Age Discount: -($0.00)<br><br>')
	}
	return vehicleAgeDiscount;
}

function getVehicleType() {
	var vehicleType = prompt('Please Enter Vehicle Type:\n' +
								'   "M" for Motorcycle\n' +
								'   "P" for Passenger Vehicle\n' +
								'   "S" for Sports Car\n' +
								'   "V" for Van\n' +
								'   "T" for Truck\n' +
								'   "C" for Commercial Vehicle\n' +
								'   "R" for Recreational Vehicle');
	return vehicleType;
}

function getVehicleSubtype(vehicleType) {
	if (vehicleType == 'P' || vehicleType == 'p') {
		var vehicleSubtype = prompt('Please Enter Type of Passenger Vehicle:\n' +
									'   "S" for Sedan\n' +
									'   "L" for Luxury\n');
	}
	else if (vehicleType == 'V' || vehicleType == 'v') {
		var vehicleSubtype = prompt('Please Enter Type of Van:\n' +
									'   "M" for Minivan\n' +
									'   "P" for Passenger Van');
	}
	else if (vehicleType == 'T' || vehicleType == 't') {
		var vehicleSubtype = prompt('Please Enter Type of Truck:\n' +
									'   "P" for Pickup Truck\n' +
									'   "S" for SUV');
	}
	else if (vehicleType == 'C' || vehicleType == 'c') {
		var vehicleSubtype = prompt('Please Enter Type of Commercial Vehicle:\n' +
									'   "S" for Semi-Truck\n' +
									'   "B" for Bus\n' +
									'   "T"  for Taxi');
	}
	else if (vehicleType =='R' || vehicleType == 'r') {
		var vehicleSubtype = prompt('Please Enter Type of Recreational Vehicle:\n' +									
									'	"T" for Truck Camper\n' +
									'	"M" for Motorhome');
	}
	return vehicleSubtype;
}

function getRecreationalVehicleClass (vehicleType, vehicleSubtype) {
	if (vehicleType == 'R'  || vehicleType == 'r' && vehicleSubtype == 'M' || vehicleSubtype == 'm') {
		var vehicleClass = prompt('Please Enter The Class of Motorhome:\n' +
									'	"A" for Class A\n' +
									'	"B" for Class B\n' +
									'	"C" for Class C\n');
	}
	return vehicleClass
}

function defineAndShowVehicleTypeCost(vehicleType, vehicleSubtype, vehicleClass) {
	if (vehicleType == 'M' || vehicleType == 'm') {
		var baseInsuranceFee = (129.99)
		var surcharge = (0.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $129.99 <br><br>')
		document.write('Vehicle Surcharge: $0.00 <br><br>')
	}
	else if (vehicleType == 'P' || vehicleType == 'p' && vehicleSubtype == 'S' || vehicleSubtype == 's') {
		var baseInsuranceFee = (434.99);
		var surcharge = (0.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge
		document.write('Base Insurance Fee: $434.99 <br><br>')
		document.write('Vehicle Surcharge: $0.00<br><br>')
	}
	else if (vehicleType == 'P' || vehicleType == 'p' && vehicleSubtype == 'L' || vehicleSubtype == 'l') {
		var baseInsuranceFee = (434.99);
		var surcharge = (249.99);
		var vehicleTypeCost = baseInsuranceFee + surcharge
		document.write('Base Insurance Fee: $434.99 <br><br>')
		document.write('Vehicle Surcharge: $249.99<br><br>')
	}
	else if (vehicleType == 'S' || vehicleType == 's') {
		var baseInsuranceFee = (975.99)
		var surcharge = (0.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $975.99 <br><br>')
		document.write('Vehicle Surcharge: $0.00 <br><br>')
	}
	else if (vehicleType == 'V' || vehicleType == 'v' && vehicleSubtype == 'M' || vehicleSubtype == 'm') {
		var baseInsuranceFee = (509.99);
		var surcharge = (0.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $509.99 <br><br>')
		document.write('Vehicle Surcharge: $0.00<br><br>')
	}
	else if (vehicleType == 'V' || vehicleType == 'v' && vehicleSubtype == 'P' || vehicleSubtype == 'p') {
		var baseInsuranceFee = (509.99);
		var surcharge = (74.99);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $509.99 <br><br>')
		document.write('Vehicle Surcharge: $74.99<br><br>')
	}
	else if (vehicleType == 'T' || vehicleType == 't' && vehicleSubtype == 'P' || vehicleSubtype == 'p') {
		var baseInsuranceFee = (579.99);
		var surcharge = (0.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $579.99 <br><br>')
		document.write('Vehicle Surcharge: $0.00 <br><br>')

	}
	else if (vehicleType == 'T' || vehicleType == 't' && vehicleSubtype == 'S' || vehicleSubtype == 's') {
		var baseInsuranceFee = (579.99);
		var surcharge = (95.99);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $579.99 <br><br>')
		document.write('Vehicle Surcharge: $95.99 <br><br>')
	}
	else if (vehicleType == 'C' || vehicleType == 'c' && vehicleSubtype == 'S' || vehicleSubtype == 's') {
		var baseInsuranceFee = (1225.99);
		var surcharge = (329.99);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $1225.99 <br><br>')
		document.write('Vehicle Surcharge: $329.99 <br><br>')
	}
	else if (vehicleType == 'C' || vehicleType == 'c' && vehicleSubtype == 'B' || vehicleSubtype == 'b') {
		var baseInsuranceFee = (1225.99);
		var surcharge = (59.99);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $1225.99 <br><br>')
		document.write('Vehicle Surcharge: $59.99 <br><br>')
	}
	else if (vehicleType == 'C' || vehicleType == 'c' && vehicleSubtype == 'T' || vehicleSubtype == 't') {
		var baseInsuranceFee = (1225.99);
		var surcharge = (269.99);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $1225.99 <br><br>')
		document.write('Vehicle Surcharge: $269.99 <br><br>')
	} 
	else if (vehicleType == 'R' || vehicleType == 'r' && vehicleSubtype == 'T' || vehicleSubtype == 't') {
		var baseInsuranceFee = (850.00);
		var surcharge = (100.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $850.00 <br><br>')
		document.write('Vehicle Surcharge: $100.00 <br><br>')
	}
	else if (vehicleType == 'R' || vehicleType == 'r' && vehicleSubtype == 'M' || vehicleSubtype == 'm' && vehicleClass == 'A' || vehicleClass == 'a') {
		var baseInsuranceFee = (850.00);
		var surcharge = (350.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $850.00 <br><br>')
		document.write('Vehicle Surcharge: $350.00 <br><br>')
	}
	else if (vehicleType == 'R' || vehicleType == 'r' && vehicleSubtype == 'M' || vehicleSubtype == 'm' && vehicleClass == 'B' || vehicleClass == 'b') {
		var baseInsuranceFee = (850.00);
		var surcharge = (300.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $850.00 <br><br>')
		document.write('Vehicle Surcharge: $300.00 <br><br>')
	}
	else if (vehicleType == 'R' || vehicleType == 'r' && vehicleSubtype == 'M' || vehicleSubtype == 'm' && vehicleClass == 'C' || vehicleClass == 'c') {
		var baseInsuranceFee = (850.00);
		var surcharge = (950.00);
		var vehicleTypeCost = baseInsuranceFee + surcharge;
		document.write('Base Insurance Fee: $850.00 <br><br>')
		document.write('Vehicle Surcharge: $950.00 <br><br>')
	}
	return vehicleTypeCost;
}

function showDriverAge() {
	var driverAge = getDriverAge();
	document.write('<hr>')
	document.write('Driver Age: ' +driverAge+ '<br><br>');
	return driverAge;
}

function showVehicleAge() {
	var vehicleAge = getVehicleAge();
	document.write('Vehicle Age: ' +vehicleAge+ '<br><br>');
	return vehicleAge;
}

function showVehicleType(vehicleType, vehicleSubtype, vehicleClass) {
	if (vehicleType == 'M' || vehicleType == 'm') {
		document.write('Vehicle Type: Motorcycle<br><br>');
	}
	else if (vehicleType == 'P' || vehicleType == 'p' && vehicleSubtype == 'S' || vehicleSubtype == 's') {
		document.write('Vehicle Type: Passenger Vehicle <br><br>');
		document.write('Vehicle Subtype: Sedan <br><br>');
	}
	else if (vehicleType == 'P' || vehicleType == 'p' && vehicleSubtype == 'L' || vehicleSubtype == 'l') {
		document.write('Vehicle Type: Passenger Vehicle <br><br>');
		document.write('Vehicle Subtype: Luxury <br><br>');
	}
	else if (vehicleType == 'S' || vehicleType == 's') {
		document.write('Vehicle Type: Sports Car <br><br>');
	}
	else if (vehicleType == 'V' || vehicleType == 'v' && vehicleSubtype == 'M' || vehicleSubtype == 'm') {
		document.write('Vehicle Type: Van <br><br>');
		document.write('Vehicle Subtype: Minivan <br><br>');
	}
	else if (vehicleType == 'V' || vehicleType == 'v' && vehicleSubtype == 'P' || vehicleSubtype == 'p') {
		document.write('Vehicle Type: Van <br><br>');
		document.write('Vehicle Subtype: Passenger Van <br><br>')
	}
	else if (vehicleType == 'T' || vehicleType == 't' && vehicleSubtype == 'P' || vehicleSubtype == 'p') {
		document.write('Vehicle Type: Truck <br><br>');
		document.write('Vehicle Subtype: Pickup Truck <br><br>');
	}
	else if (vehicleType =='T' || vehicleType == 't' && vehicleSubtype == 'S' || vehicleSubtype == 's') {
		document.write('Vehicle Type: Truck <br><br>');
		document.write('Vehicle Subtype: SUV <br><br>');
	}
	else if (vehicleType == 'C' || vehicleType == 'c' && vehicleSubtype == 'S' || vehicleSubtype == 's'){
		document.write('Vehicle Type: Commercial Vehicle <br><br>');
		document.write('Vehicle Subtype: Semi-Truck <br><br>');
	}
	else if (vehicleType == 'C' || vehicleType == 'c' && vehicleSubtype == 'B' || vehicleSubtype == 'b'){
		document.write('Vehicle Type: Commercial Vehicle <br><br>');
		document.write('Vehicle Subtype: Bus <br><br>');
	}
	else if (vehicleType == 'C' || vehicleType == 'c' && vehicleSubtype == 'T' || vehicleSubtype == 't'){
		document.write('Vehicle Type: Commercial Vehicle <br><br>');
		document.write('Vehicle Subtype: Taxi <br><br>');
	}
	else if (vehicleType == 'R' || vehicleType == 'r' && vehicleSubtype == 'T' || vehicleSubtype == 't') {
		document.write('Vehicle Type: Recreational Vehicle <br><br>');
		document.write('Vehicle Subtype: Truck Camper <br><br>');
	}
	else if (vehicleType == 'R' || vehicleType == 'r' && vehicleSubtype == 'M' || vehicleSubtype == 'm' && vehicleClass == 'A' || vehicleClass == 'a') {
		document.write('Vehicle Type: Recreational Vehicle <br><br>');
		document.write('Vehicle Subtype: Motorhome <br><br>');
		document.write('Motorhome Class: Class A <br><br>');
	}
	else if (vehicleType == 'R' || vehicleType == 'r' && vehicleSubtype == 'M' || vehicleSubtype == 'm' && vehicleClass == 'B' || vehicleClass == 'b') {
		document.write('Vehicle Type: Recreational Vehicle <br><br>');
		document.write('Vehicle Subtype: Motorhome <br><br>');
		document.write('Motorhome Class: Class B <br><br>');
	}
	else if (vehicleType == 'R' || vehicleType == 'r' && vehicleSubtype == 'M' || vehicleSubtype == 'm' && vehicleClass == 'C' || vehicleClass == 'c') {
		document.write('Vehicle Type: Recreational Vehicle <br><br>');
		document.write('Vehicle Subtype: Motorhome <br><br>');
		document.write('Motorhome Class: Class C <br><br>');
	}
}
	

function calculateInsurance() {
	var driverAge = showDriverAge();
	var vehicleAge = showVehicleAge();
	var vehicleType = getVehicleType();
	var vehicleSubtype = getVehicleSubtype(vehicleType);
	var vehicleClass = getRecreationalVehicleClass (vehicleType, vehicleSubtype)
	showVehicleType(vehicleType, vehicleSubtype, vehicleClass);
	var vehicleTypeCost = defineAndShowVehicleTypeCost(vehicleType, vehicleSubtype, vehicleClass)
	var driverAgeSurcharge = getDriverAgeSurcharge(driverAge);
	var vehicleAgeDiscount = getVehicleAgeDiscount(vehicleAge);
	var totalInsuranceFee = vehicleTypeCost + driverAgeSurcharge - vehicleAgeDiscount;
	document.write('Total Insurance Fee: $' +totalInsuranceFee.toFixed(2)+ '<hr>');
}

calculateInsurance();