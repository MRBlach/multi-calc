// navbar basic calculator button
document.getElementById('calcBtn').addEventListener('click', displayBasicCalc);

// Basic Calculator UI
function displayBasicCalc(e) {
document.getElementById('home').hidden = true;
document.getElementById('loanUI').hidden = true;
document.getElementById('tipUI').hidden = true;
document.getElementById('converterUI').hidden = true;
document.getElementById('scientificCalcUI').hidden = true;
document.getElementById('calculatorUI').hidden = false;
document.getElementById('calculatorUI').innerHTML = `
<div class="calculator mt-3">
			<div id="bend">
				<div class="result">
					<div id="history">
						<p class="" id="history-value"></p>
					</div>
					<div class="output">
						<p id="output-value">Basic Calculator</p>
					</div>
				</div>
			</div>
				<div id="keyboard">
					<button class="text-secondary operator" id="clear">C</button>
					<button class="text-secondary operator" id="backspace">CE</button>
					<button class="text-secondary operator" id="%">%</button>
					<button class="text-secondary operator" id="/">&#247;</button>
					<button class="text-secondary number" id="7">7</button>
					<button class="text-secondary number" id="8">8</button>
					<button class="text-secondary number" id="9">9</button>
					<button class="text-secondary operator" id="*">&times;</button>
					<button class="text-secondary number" id="4">4</button>
					<button class="text-secondary number" id="5">5</button>
					<button class="text-secondary number" id="6">6</button>
					<button class="text-secondary operator" id="-">-</button>
					<button class="text-secondary number" id="1">1</button>
					<button class="text-secondary number" id="2">2</button>
					<button class="text-secondary number" id="3">3</button>
					<button class="text-secondary operator" id="+">+</button>
					<button class="empty" id="empty">t</button>
					<button class="text-secondary number" id="0">0</button>
					<button class="empty" id="empty">t</button>
					<button class="text-secondary operator" id="=">=</button>
				</div>
			</div>
`
greetingTimeOut();

// time out greeting
function greetingTimeOut() {
	setTimeout(removeGreeting, 1500);
}
function removeGreeting() {
	document.getElementById('output-value').innerHTML = "0";
}
// Calculator function
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
}