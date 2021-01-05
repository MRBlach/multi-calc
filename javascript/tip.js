// navbar tip calculator button
document.getElementById('tipBtn').addEventListener('click', displayTipCalc);

function displayTipCalc(e) {
// Tip Calculator UI
document.getElementById('tipUI').hidden = false;
document.getElementById('home').hidden = true;
document.getElementById('loanUI').hidden = true;
document.getElementById('calculatorUI').hidden = true;
document.querySelector('#tipUI').innerHTML = `
<div class="container">
  <div class="row">
    <div class="col-md-6 mx-auto stencil-text">
      <div class="card card-body text-center pt-5 mt-5 shadow-lg bg-silver">
    
      <div class="alert shimmer" hidden>Number Input Error Please Try Again</div>
        <form  id="loan-form">

          <div class="input-group pb-4">
            <div class="input-group-prepend">
              <span class="bg-silver text-secondary input-group-text py-0 px-3">$</span>
            </div> 
            <input type="text" class="text-secondary px-4" id="billamt" placeholder="bill amount">
          </div>

          <div class="input-group pb-4">
            <div class="input-group-prepend">
              <span class="bg-silver text-secondary input-group-text px-2 py-0" style='font-size:25px;'>&#x26FE;</span>
              <select id="serviceQual" class="text-secondary pl-3 pr-5">
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
              <span class="bg-silver text-secondary input-group-text py-1 px-2"><img src="images/people-icon.png"></span>
            </div> 
            <input type="text" class="px-4 text-secondary" id="peopleamt" placeholder="number of people">
          </div>

          
          <div class="form-group text-center">
            <input type="submit" class="loanSubmit text-secondary operator" value="submit" id="calcTip">
            <input href="#" class="text-secondary operator" type="reset" value="reset" id="resetCalc">
          </div>
     
        </form>

        <div id="loading" hidden>
          <h1 class="shimmer pb-3">Calculating...</h1>
        </div>

        <div id="totalTip" class="pt-4">
          <h5 class="shimmer">Tip Total</h5>
          <div class="input-group pb-2">
          <div class="input-group-prepend">
            <span class="input-group-text text-secondary bg-silver">$</span>
          </div>
          <input type="text" class="px-4 bg-white text-secondary" id="tip">  <h3 class="pl-2 text-secondary" id="each">each</h3>
        </div>

          
          
        </div>
      </div>
    </div>
  </div>
</div>

`;

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// reset button function
document.getElementById('resetCalc').addEventListener('click', funcReset);
function funcReset(e) {
  document.getElementById("totalTip").style.display = "none";
}

//Listen for submit
document.getElementById('calcTip').addEventListener('click', loader)
 function loader(e){
 
  //show loader 
  document.getElementById('loading').hidden = false;
      //set two second display time
      setTimeout(calculateTip, 2000);

  e.preventDefault();
}

//Calculate Tip


function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numOfPeople = document.getElementById("peopleamt").value;

    //Calculate tip
    var total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip
    document.getElementById('loading').hidden = true;
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").value = total;


  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

   //validate input
   if (billAmt === "" || serviceQual == 0) {
    showError();
  }


  e.preventDefault();
}

//Show error function
function showError(){
  //hide results
  document.getElementById('totalTip').style.display = 'none';
 
  //show error
  document.querySelector('.alert').hidden = false;
 
     //clear error after 3 seconds
     setTimeout(clearError, 3500);
}

//clear error function
function clearError(){
 document.querySelector('.alert').hidden = true;

 document.getElementById("billamt").value = '';
 document.getElementById("serviceQual").value = 0;
 document.getElementById("peopleamt").value = '';
}

};

