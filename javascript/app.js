
// Display Landing Page
document.getElementById('home').innerHTML = `
<div class="container">
  <div class="row">
    <div class="col-md-6 mx-auto">
      <div class="card card-body text-center mt-5 shadow-lg bg-silver">
        <h1 class="stencil-text shimmer m-0"><strong>Multi-Calc</strong></h1>
        <img src="images/calc-lg.png" alt="multi-colored calculator" class="px-4"/>
        <h3 class="stencil-text shimmer"><strong><em>Math Made Easy</em></strong></h3>
      </div>
    </div>
  </div>
</div>
`;

// navbar Home button
document.getElementById('homeBtn').addEventListener('click', displayHome);

// Home UI
function displayHome(e) {
  document.getElementById('home').hidden = false;
  document.getElementById('loanUI').hidden = true;
  document.getElementById('tipUI').hidden = true;
  document.getElementById('converterUI').hidden = true;
  document.getElementById('calculatorUI').hidden = true;
  document.getElementById('scientificCalcUI').hidden = true;
}