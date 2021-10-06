

function compute()
{
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;

    var year = new Date().getFullYear() + parseInt(years);

    var res1 = "If you deposit " + principal + ",<br />";
    var res2 = "at an interest rate of " + rate + "%. <br />";
    var res3 = "You will receive an amount of " + interest + ",<br />";
    var res4 = "In the year " + year + "<br />";
    
    document.getElementById("result").innerHTML = res1 + res2 + res3 + res4;
}

function updateRate() {

    var rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = rateval;
        
}   

        
