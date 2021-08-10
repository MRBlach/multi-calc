// Navbar Loan Calculator Button
document.getElementById('loanBtn').addEventListener('click', displayLoanCalc);

// Loan Calculator UI
function displayLoanCalc(e) {
document.getElementById('home').hidden = true;
document.getElementById('calculatorUI').hidden = true;
document.getElementById('scientificCalcUI').hidden = true;
document.getElementById('tipUI').hidden = true;
document.getElementById('converterUI').hidden = true;
document.getElementById('loanUI').hidden = false;
document.getElementById('loanUI').innerHTML = `
<div class="container">
<div class="row">
  <div class="col-md-6 mx-auto stencil-text">
    <div class="card card-body text-center mt-5 shadow-lg bg-silver">
      
      <div class="alert shimmer" hidden>Number Input Error Please Try Again</div>
      <form  id="loan-form">
      
      <h1 class="shimmer">Loan Interest</h1>
        <div class="input-group pb-4">
          <div class="input-group-prepend">
            <span class="spans bg-silver text-secondary input-group-text">$</span>
          </div> 
          <input type="number" class="inputs form-control" id="amount" placeholder="loan amount">
        </div>

        <div class="input-group pb-4">
          <div class="input-group-prepend">
            <span class="spans bg-silver text-secondary input-group-text">%</span>
          </div> 
           <input type="number" class="inputs form-control" id="interest" placeholder="interest rate">
        </div>

        <div class="form-group">
          <input type="number" class="inputs form-control" id="years" placeholder="years to repay">
        </div>

        <div class="form-group text-center">
          <input type="submit" class="inputs loanSubmit text-secondary operator" value="submit">
          <input href="#" class="inputs text-secondary operator" type="reset" value="reset" id="resetCalc">
        </div>
      </form>

      <div id="loading" hidden>
      <h1 class="shimmer pb-3">Calculating...</h1>
      </div>
      
      <div id="results" class="pt-4" hidden>
        <h5 class="shimmer">Results</h5>
        <div class="input-group pb-2">
          <div class="input-group-prepend">
            <span class="spans input-group-text bg-silver">Monthly $</span>
          </div>
          <input type="number" class="inputs form-control bg-white" id="monthly-payment" disabled>
      </div>

      <div class="input-group pb-2">
        <div class="input-group-prepend">
          <span class="spans input-group-text bg-silver">Total $</span>
        </div>
         <input type="number" class="inputs form-control bg-white" id="total-payment" disabled>
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="spans input-group-text bg-silver">Total %</span>
      </div>
      <input type="number" class="inputs form-control bg-white" id="total-interest" disabled>  
    </div>
  </div>
  </div>
</div>
</div>
`
darkModeCheck();

// Check for dark mode
function darkModeCheck() {
  if(document.getElementById('dark-mode-icon').hidden === true) {
    displayDarkMode();
  } else {
    displayLightMode();
  }
}

// Reset button function
document.getElementById('resetCalc').addEventListener('click', funcReset);
function funcReset(e) {
  document.getElementById('results').hidden = true;
}

// Listen for submit
document.querySelector('.loanSubmit').addEventListener('click', loader)
 function loader(e){
 
  // Show loader 
  document.getElementById('loading').hidden = false;
      // Set two second display time
      setTimeout(calculateResults, 2000);

  e.preventDefault();
}

// Calculate results function
function calculateResults(){
  document.getElementById('loading').hidden = true;
  document.getElementById('results').hidden = false;

  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) /100 /12;
  const calculatedPayments = parseFloat(years.value) *12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        // Show results
        document.getElementById('results').style.display = 'block';
        

  } else {
    showError();
  }

}


// Show error function
function showError(){
   // Hide results
   document.getElementById('results').style.display = 'none';
  
   // Show error
   document.querySelector('.alert').hidden = false;
  
      // Clear error after 3 seconds
      setTimeout(clearError, 3500);
}

// Clear error function
function clearError(){
  document.querySelector('.alert').hidden = true;
}

}