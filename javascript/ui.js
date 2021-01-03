// Loan UI
document.getElementById('loanBtn').addEventListener('click', displayLoanCalc);

function displayLoanCalc(e) {
document.querySelector('#loanUI').innerHTML = `
<div class="container">
<div class="row">
  <div class="col-md-6 mx-auto">
    <div class="card card-body text-center mt-5">
      <h1 class="heading display-5 pb-3">Loan Calculator</h1>
      
      <form  id="loan-form">
      
        <div class="input-group pb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div> 
          <input type="number" class="form-control" id="amount" placeholder="Loan Amount">
        </div>

        <div class="input-group pb-4">
          <div class="input-group-prepend">
            <span class="input-group-text">%</span>
          </div> 
           <input type="number" class="form-control" id="interest" placeholder="Interest">
        </div>

        <div class="form-group">
          <input type="number" class="form-control" id="years" placeholder="Years To Repay">
        </div>

        <div class="form-group">
          <input type="submit" value="calculate" class="btn btn-dark btn-block mt-4 loanSubmit">
        </div>
      </form>

      <div id="loading">
        <img src="images/loading.gif" alt="">
      </div>
      
      <div id="results" class="pt-4">
        <h5>Results</h5>
        <div class="input-group pb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">Monthly Payment</span>
          </div>
          <input type="number" class="form-control" id="monthly-payment" disabled>
      </div>

      <div class="input-group pb-2">
        <div class="input-group-prepend">
          <span class="input-group-text">Total Payment</span>
        </div>
         <input type="number" class="form-control" id="total-payment" disabled>
    </div>

    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Total Interest</span>
      </div>
      <input type="number" class="form-control" id="total-interest" disabled>  
    </div>
  </div>
  </div>
</div>
</div>
`
}