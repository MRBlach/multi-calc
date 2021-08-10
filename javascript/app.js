
// Display Landing Page
document.getElementById('navbar').hidden = true;
document.getElementById('home').innerHTML = `
<div class="container">
  <div class="row">
    <div class="col-md-6 mx-auto mt-5">
      <div class="card card-body text-center mt-5 shadow-lg bg-silver">
        <h1 class="stencil-text shimmer m-0"><strong>Multi-Calc</strong></h1>
        <img src="images/calc-lg.png" alt="multi-colored calculator" class="px-4"/>
        <h3 class="stencil-text shimmer"><strong><em>Math Made Easy</em></strong></h3>
      </div>
    </div>
  </div>
</div>
`;

homepageTimeOut();
// Time out greeting
function homepageTimeOut() {
	setTimeout(displayBasicCalc, 1000);
}
