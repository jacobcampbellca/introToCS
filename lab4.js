function tableHeaderRow() {
	document.write('<table border = "1"><tr>');
	document.write('<th><i>i</i></th>');
	document.write('<th><i>x<sub>i</i></th>');
	document.write('<th><i>x<sub>i</sub><sup>2</sup></i></th>');
	document.write('<th><i>SUM(x<sub>i</sub>)</i></th>');
	document.write('<th><i>SUM(x<sub>i</sub><sup>2</sup>)</i></th>');
	document.write('<th><i>min(x<sub>i</sub>)</i></th>')
	document.write('<th><i>min(x<sub>i</sub>)</i></th>')
	document.write('</tr>')
}

function tableSecondRow() {
	document.write('<tr>');
	document.write('<td align = "center">---</td>');
	document.write('<td align = "center">---</td>');
	document.write('<td align = "center">---</td>');
	document.write('<td align = "center">0</td>');
	document.write('<td align = "center">0</td>');
	document.write('<td align = "center">0</td>');
	document.write('<td align = "center">0</td>');
	document.write('</tr>')
}

function closeTable() {
	document.write('</table><br>')
}

function standardDeviationTutorial() {
	tableHeaderRow();
	tableSecondRow();
	var valuesEntered = 0;
	var valueSquared = 0;
	var sumValues = 0;
	var sumValuesSquared = 0;
	var values;
	var enterValues = 'Enter value and Press Return. Enter "done" when finished:';
	var number = prompt(enterValues);
	var minimumValue = 1000000000;
	var maximumValue = -1000000000;
	while (number != 'done') {
		valuesEntered++;
		values = Number(number);
		number = prompt(enterValues);
		valueSquared = Math.pow(values, 2);
		sumValues = sumValues + values;
		sumValuesSquared = sumValuesSquared + valueSquared;
		if (values < minimumValue) {
			minimumValue = values;
		}
		if (values > maximumValue) {
			maximumValue = values;
		}
		document.write('<tr>');
		document.write('<td align = "center">' +valuesEntered+ '</td>');
		document.write('<td align = "center">' +values+ '</td>');
		document.write('<td align = "center">' +valueSquared+ '</td>');
		document.write('<td align = "center">' +sumValues+ '</td>');
		document.write('<td align = "center">' +sumValuesSquared+ '</td>');
		document.write('<td align = "center">' +minimumValue+ '</td>');
		document.write('<td align = "center">' +maximumValue+ '</td>');
		document.write('</tr>');
	}
	closeTable();
	var mean = sumValues / valuesEntered;
	var variance = (sumValuesSquared - (Math.pow(sumValues, 2) / valuesEntered)) / (valuesEntered - 1)
	var standardDeviation = Math.sqrt(variance)
	var range = maximumValue - minimumValue;
	var cVar = (standardDeviation / mean) * 100;
	var standardDeviationApprox = range / 4;
	var smallest = mean - (2 * standardDeviationApprox);
	var largest = mean + (2 * standardDeviationApprox);
	document.write('Total Number of Values Entered: ' +valuesEntered+ '<br><br>');
	document.write('Mean of the Values Entered: ' +mean.toFixed(1)+ '<br><br>');
	document.write('Variance of the Values Entered: ' +variance.toFixed(2)+ '<br><br>')
	document.write('Standard Deviation of the Values Entered: ' +standardDeviation.toFixed(2)+ '<br><br>')
	document.write('Range of the Values Entered: ' +range+ '<br><br>');
	document.write('Cofficient of Variation for the Values Entered: ' +cVar.toFixed(2)+ '<br><br>');
	document.write('Approximate Standard Deviation of the Values Entered: ' +standardDeviationApprox.toFixed(1)+ '<br><br>');
	document.write('Smallest of the Values Entered: ' +smallest.toFixed(0)+ '<br><br>');
	document.write('Largest of the Values Entered: ' +largest.toFixed(0)+ '<br><br>');
	
}

standardDeviationTutorial()

