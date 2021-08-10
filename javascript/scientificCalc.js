// Navbar scientific calculator button
document.getElementById('scientificCalcBtn').addEventListener('click', displayScientificCalc);

// Basic Calculator UI
function displayScientificCalc(e) {
document.getElementById('scientificCalcUI').hidden = false;
document.getElementById('home').hidden = true;
document.getElementById('loanUI').hidden = true;
document.getElementById('tipUI').hidden = true;
document.getElementById('converterUI').hidden = true;
document.getElementById('calculatorUI').hidden = true;
document.getElementById('scientificCalcUI').innerHTML = `
<form name="sci-calc" class="calculator sci-calc mt-3 mb-3 pb-2">
  <div class="bend">
    <div id="result">
      <div class="result">
        <h1 id="greeting" class="shimmer pl-4 pt-4">Scientific Calculator</h1>
        <input class="output shimmer pt-3" id="display" name="display" value="0" hidden>
      </div>
    </div>
  </div>

 <table class="m-2">
   <tr>
     <td><input type="button" class="btnTop text-secondary operator" name="btnTop" value="C" onclick="this.form.display.value=  0 "></td>

     <td><input type="button" class="btnTop text-secondary operator" name="btnTop" value="CE" onclick="deleteChar(this.form.display)"></td>

     <td><input type="button" class="btnTop text-secondary operator" name="btnTop" value="=" onclick="if(checkNum(this.form.display.value)) { compute(this.form) }"></td>

     <td><input type="button" class="btnOpps text-secondary operator" name="btnOpps" value="&#960;" onclick="addChar(this.form.display,'3.14159265359')"></td>

     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="%" onclick=" percent(this.form.display)"></td>
   </tr>

   <tr>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="7" onclick="addChar(this.form.display, '7')"></td>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="8" onclick="addChar(this.form.display, '8')"></td>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="9" onclick="addChar(this.form.display, '9')"></td>
     <td><input type="button" class="btnOpps text-secondary operator" name="btnOpps" value="x&#94;" onclick="if(checkNum(this.form.display.value)) { exp(this.form) }"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="/" onclick="addChar(this.form.display, '/')"></td>
   <tr>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="4" onclick="addChar(this.form.display, '4')"></td>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="5" onclick="addChar(this.form.display, '5')"></td>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="6" onclick="addChar(this.form.display, '6')"></td>
     <td><input type="button" class="btnOpps text-secondary operator" name="btnOpps" value="ln" onclick="if(checkNum(this.form.display.value)) { ln(this.form) }"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="*" onclick="addChar(this.form.display, '*')"></td>
   </tr>
   <tr>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="1" onclick="addChar(this.form.display, '1')"></td>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="2" onclick="addChar(this.form.display, '2')"></td>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="3" onclick="addChar(this.form.display, '3')"></td>
     <td><input type="button" class="btnOpps text-secondary operator" name="btnOpps" value="&radic;" onclick="if(checkNum(this.form.display.value)) { sqrt(this.form) }"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="-" onclick="addChar(this.form.display, '-')"></td>
   </tr>
   <tr>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="&#177" onclick="changeSign(this.form.display)"></td>
     <td><input type="button" class="btnNum text-secondary number" name="btnNum" value="0" onclick="addChar(this.form.display, '0')"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="&#46;" onclick="addChar(this.form.display, '&#46;')"></td>
     <td><input type="button" class="btnOpps text-secondary operator" name="btnOpps" value="x&#50;" onclick="if(checkNum(this.form.display.value)) { square(this.form) }"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="+" onclick="addChar(this.form.display, '+')"></td>
   </tr>
   <tr>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="(" onclick="addChar(this.form.display, '(')"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value=")" onclick="addChar(this.form.display,')')"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="cos" onclick="if(checkNum(this.form.display.value)) { cos(this.form) }"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="sin" onclick="if(checkNum(this.form.display.value)) { sin(this.form) }"></td>
     <td><input type="button" class="btnMath text-secondary operator" name="btnMath" value="tan" onclick="if(checkNum(this.form.display.value)) { tan(this.form) }"></td>
  </tr>
 </tabel>
</form>
`
greetingTimeOut();
darkModeCheck();
}


// Time out greeting
function greetingTimeOut() {
	setTimeout(removeGreeting, 1500);
}
function removeGreeting() {
  document.getElementById('greeting').hidden = true;
  document.getElementById('display').hidden = false;
}

// Check for dark mode
function darkModeCheck() {
  if(document.getElementById('dark-mode-icon').hidden === true) {
    displayDarkMode();
  } else {
    displayLightMode();
  }
}

// Add characters
function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}
// Cosine
function cos(form) {
	form.display.value = Math.cos(form.display.value);
}
// Sine
function sin(form) {
	form.display.value = Math.sin(form.display.value);
}
// Tangent
function tan(form) {
	form.display.value = Math.tan(form.display.value);
}
// Square Root
function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}
// natural Logarithm
function ln(form) {
	form.display.value = Math.log(form.display.value);
}
// Exponents
function exp(form) {
	form.display.value = Math.exp(form.display.value);
}
// Delete characters
function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
// Percentage
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}
// Change sign
function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}
// Equals
function compute(form) {
    form.display.value = eval(form.display.value);
  }
// Square
function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

// Check that input is a number
function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}