// Navbar tip calculator button
document.getElementById('tipBtn').addEventListener('click', displayTipCalc);

function displayTipCalc(e) {
// Tip Calculator UI
document.getElementById('tipUI').hidden = false;
document.getElementById('home').hidden = true;
document.getElementById('loanUI').hidden = true;
document.getElementById('calculatorUI').hidden = true;
document.getElementById('scientificCalcUI').hidden = true;
document.getElementById('converterUI').hidden = true;
document.getElementById('tipUI').innerHTML = `
<div class="container">
  <div class="row">
    <div class="col-md-6 mx-auto stencil-text">
      <div class="card card-body text-center pt-3 mt-5 shadow-lg bg-silver">
    
      <div class="alert shimmer" hidden>Number Input Error Please Try Again</div>
      <h1 class="shimmer pb-2">Tip Calculator</h1>
        <form  id="loan-form" class="mx-auto">

          <div class="input-group pb-4">
            <div class="input-group-prepend">
              <span class="spans bg-silver text-secondary input-group-text py-0 px-3 bill-amount">$</span>
            </div> 
            <input type="text" class="inputs text-secondary px-4 numbersonly" id="billamt" placeholder="bill amount">
          </div>

          <div class="input-group pb-4">
            <div class="input-group-prepend">
              <span class="spans bg-silver text-secondary input-group-text px-2 py-0" style='font-size:25px;'>&#x26FE;</span>
              <select id="serviceQual" class="inputs text-secondary pl-3 pr-5">
                <option disabled selected value="0">-- service quality --</option>
                <option value="0.3">30&#37; &#45; Outstanding</option>
                <option value="0.2">20&#37; &#45; Good</option>
                <option value="0.15">15&#37; &#45; It was OK</option>
                <option value="0.1">10&#37; &#45; Bad</option>
                <option value="0.05">5&#37; &#45; Terrible</option>
              </select>
            </div>
          </div>

          <div class="input-group pb-4">
            <div class="input-group-prepend">
              <span class="spans bg-silver text-secondary input-group-text py-1 px-2">
                <img src="images/people-icon.png" class="peopleIcon-lightMode" hidden>
                <img src="images/people-icon-dark-mode.png" class="peopleIcon-darkMode" hidden>
              </span>
            </div> 
            <input type="text" class="inputs px-4 text-secondary numbersonly" id="peopleamt" placeholder="number of people">
          </div>

          
          <div class="form-group text-center">
            <input type="submit" class="inputs loanSubmit text-secondary operator" value="submit" id="calcTip">
            <input href="#" class="inputs text-secondary operator" type="reset" value="reset" id="resetTipCalc">
          </div>
     
        </form>

        <div id="loadingTip" hidden>
          <h1 class="shimmer pb-3">Calculating...</h1>
        </div>

        <div id="totalTip" class="pt-4">
          <h5 class="shimmer" id="tip-total">Results</h5>

          <div class="input-group pb-2">
            <div class="input-group-prepend  ml-4">
              <span class="spans input-group-text text-secondary bg-silver">Tip</span>
            </div>
            <input type="text" class="inputs px-4" bg-white text-secondary" id="tip">  
          </div>

          <div class="input-group pb-2">
           <div class="input-group-prepend ml-4">
             <span class="spans input-group-text pl-1 pr-2 text-secondary bg-silver">Total</span>
            </div>
            <input type="text" class="inputs px-4" bg-white text-secondary" id="totalBill">  
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

`;

darkModeCheck();

// Check for dark mode
function darkModeCheck() {
  if(document.getElementById('dark-mode-icon').hidden === true) {
    displayDarkMode();
  } else {
    displayLightMode();
  }
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";

// Reset button function
document.getElementById('resetTipCalc').addEventListener('click', funcResetTip);
function funcResetTip(e) {
  document.getElementById("totalTip").style.display = "none";
}

// Listen for submit
document.getElementById('calcTip').addEventListener('click', loader)
 function loader(e){
  document.getElementById("totalTip").style.display = "none";
  // Show loader while 'calculating'
  document.getElementById('loadingTip').hidden = false;
      // Set two second display time
      setTimeout(calculateTip, 1000);

  e.preventDefault();
}

// Function Calculate Tip
function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numOfPeople = document.getElementById("peopleamt").value;

    // Calculate tip
    let tip = (billAmt * serviceQual) / numOfPeople;
    // Round to two decimal places
    tip = Math.round(tip * 100) / 100;
    // Allow only two digits after decimal point
    tip = tip.toFixed(2);
    // Display the tip
    document.getElementById('loadingTip').hidden = true;
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").value = tip;
    
    // Calculate total tip <=1 person
    let totalTip = (billAmt * serviceQual) / numOfPeople;
    // Calculate total bill
    let totalBill = billAmt + totalTip;
     // Round to two decimal places
     totalBill = Math.round(totalBill * 100) / 100;
     // Allow only two digits after decimal point
     totalBill = totalBill.toFixed(2);
     // Display bill total
     document.getElementById('totalBill').value = totalBill;

    // Calculate total tip >1 person
    let totalTipPer = (billAmt * serviceQual) / numOfPeople;
    // Calculate total bill >1 person
    let totalPerPeron = billAmt / numOfPeople;
    // Calculate total bill
    let totalBillPer = totalPerPeron + totalTipPer;
     // Round to two decimal places
     totalBillPer = Math.round(totalBillPer * 100) / 100;
     // Allow only two digits after decimal point
     totalBillPer = totalBillPer.toFixed(2);
     // Display bill total
     document.getElementById('totalBill').value = totalBillPer;
  
  // Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === '' || numOfPeople <=1) {
    document.getElementById('tip-total').innerHTML = `Results`;
  } else {
    document.getElementById('tip-total').innerHTML = `Results Per Person`;
  }

   // Validate input
  if (billAmt === "" || serviceQual == 0) {
    showError();
  }

  e.preventDefault();
}

// Show error function
function showError(){
  // Hide results
  document.getElementById('totalTip').style.display = 'none';
 
  // Show error
  document.querySelector('.alert').hidden = false;
 
     // Clear error after 3 seconds
     setTimeout(clearError, 3500);
}

// Clear error function
function clearError(){
 document.querySelector('.alert').hidden = true;

 document.getElementById("billamt").value = '';
 document.getElementById("serviceQual").value = 0;
 document.getElementById("peopleamt").value = '';
}

};

