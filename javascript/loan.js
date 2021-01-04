// Loan UI
document.getElementById('loanBtn').addEventListener('click', displayLoanCalc);

function displayLoanCalc(e) {
// hide home page
document.getElementById('home').hidden = true;
document.getElementById('calculatorUI').hidden = true;
document.getElementById('loanUI').hidden = false;
document.querySelector('#loanUI').innerHTML = `
<div class="container">
<div class="row">
  <div class="col-md-6 mx-auto stencil-text">
    <div class="err card card-body text-center mt-5 shadow-lg bg-silver">
      <h1 class="heading shimmer display-5 pb-3">Loan Calculator</h1>
      
      <form  id="loan-form">
      
        <div class="input-group pb-4">
          <div class="input-group-prepend">
            <span class="bg-silver text-secondary input-group-text">$</span>
          </div> 
          <input type="number" class="form-control" id="amount" placeholder="Loan Amount">
        </div>

        <div class="input-group pb-4">
          <div class="input-group-prepend">
            <span class="bg-silver text-secondary input-group-text">%</span>
          </div> 
           <input type="number" class="form-control" id="interest" placeholder="Interest">
        </div>

        <div class="form-group">
          <input type="number" class="form-control" id="years" placeholder="Years To Repay">
        </div>

        <div class="form-group">
          <input type="button" class="btn btn-light text-secondary mt-4 shadow loanSubmit bg-silver" value="calculate">
          <input href="#" class="btn btn-light text-secondary mt-4 px-4 shadow bg-silver" type="reset" value="reset" id="resetLoan">
        </div>
      </form>

      <div id="loading" hidden>
        <img src="images/loading.gif" alt="">
      </div>
      
      <div id="results" class="pt-4" hidden>
        <h5>Results</h5>
        <div class="input-group pb-2">
          <div class="input-group-prepend">
            <span class="input-group-text bg-silver">Monthly Payment</span>
          </div>
          <input type="number" class="form-control bg-white" id="monthly-payment" disabled>
      </div>

      <div class="input-group pb-2">
        <div class="input-group-prepend">
          <span class="input-group-text bg-silver">Total Payment</span>
        </div>
         <input type="number" class="form-control bg-white" id="total-payment" disabled>
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text bg-silver">Total Interest</span>
      </div>
      <input type="number" class="form-control bg-white" id="total-interest" disabled>  
    </div>
  </div>
  </div>
</div>
</div>
`
// reset button function
document.getElementById('resetLoan').addEventListener('click', funcReset);
function funcReset(e) {
  document.getElementById('results').hidden = true;
}

//Listen for submit
document.querySelector('.loanSubmit').addEventListener('click', function(e){
 
  //show loader 
  document.getElementById('loading').hidden = false;
      //set two second display time
      setTimeout(calculateResults, 2000);

  e.preventDefault();
});

//Calculate results function
function calculateResults(){
  document.getElementById('loading').hidden = true;
  document.getElementById('results').hidden = false;

  //UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) /100 /12;
  const calculatedPayments = parseFloat(years.value) *12;

  //compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

        //show results
        document.getElementById('results').style.display = 'block';
        //hide loader 
        document.getElementById('loading').style.display = 'none';

  } else {
    showError('Check numbers for error');
  }

}


//Show error function
function showError(error){
   //hide results
   document.getElementById('results').style.display = 'none';
   //hide loader 
   document.getElementById('loading').style.display = 'none';
  
   //create a div
  const errorDiv = document.createElement('div');
    //get elements
    const card = document.querySelector('.err');
    const heading = document.querySelector('.heading');

  //add a class to the div
  errorDiv.className = 'alert alert-danger';
  //create text node and append to the div
  errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
    card.insertBefore(errorDiv, heading);
      //clear error after 3 seconds
      setTimeout(clearError, 3000);
}

//clear error function
function clearError(){
  document.querySelector('.alert').remove();
}

}