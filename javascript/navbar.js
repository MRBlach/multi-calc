document.getElementById('navbar').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">



  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span>
    <img class="toggler" src="images/toggler-icon.png" alt="calculator icon" width="70%" />
    </span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item list" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#" id="homeBtn">Home
        </a>
      </li>
      <li class="nav-item list" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#" id="calcBtn">Basic Calculator</a>
      </li>
      <li class="nav-item list" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#" id="scientificCalcBtn">Scientific Calculator</a>
      </li>
      <li class="nav-item list" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#" id="converterBtn">Unit Converter</a>
      </li>    
      <li class="nav-item list" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#about" id="loanBtn">Loan Interest</a>
      </li>
      <li class="nav-item list" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#about" id="tipBtn">Tip Amount</a>
      </li>
    </ul>
  </div>

  
</nav>
`
;