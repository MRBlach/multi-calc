document.getElementById('navbar').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div data-toggle="collapse" data-target=".navbar-collapse.show">
  <a href="index.html">
    <img src="images/calc-icon.png" alt="calculator icon" width="50%" />
  </a>
    </div>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#home" id="homeBtn">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#" id="calcBtn">Basic Calculator</a>
      </li>
      <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a class="nav-link" href="#" id="scientificBtn" disabled>Scientific Calculator</a>
      </li>
      <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
      <a class="nav-link" href="#" id="converterBtn">Unit Converter</a>
    </li>
    <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
    <a class="nav-link" href="#about" id="loanBtn">Loan Interest</a>
  </li>
  <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
  <a class="nav-link" href="#about" id="tipBtn">Tip Amount</a>
</li>
    </ul>
  </div>

  
</nav>
`