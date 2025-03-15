function Amount(){
    document.getElementById("amountRange").value=document.getElementById("Amount").value;
}
function AmountRange(){
document.getElementById("Amount").value=document.getElementById("amountRange").value;
document.getElementById("amountRange").value=document.getElementById("Amount").value;
}

function Year(){
    document.getElementById("yearRange").value=document.getElementById("Year").value;
}
function yearRange(){
    document.getElementById("Year").value=document.getElementById("yearRange").value;
    document.getElementById("yearRange").value=document.getElementById("Year").value;
}

function InterestRate(){
    document.getElementById("interestRange").value=document.getElementById("Interest").value;
}
function InterestRange(){
    document.getElementById("Interest").value=document.getElementById("interestRange").value;
    document.getElementById("interestRange").value=document.getElementById("Interest").value;
}


function CalculateEmi(){

    var p=parseInt(document.getElementById("Amount").value);
    var n=parseInt(document.getElementById("Year").value)*12;
    var r=parseFloat(document.getElementById("Interest").value)/2/100;

    var EMI=p*r*Math.pow(1+r,n)/Math.pow(1+r,n)-1

    document.getElementById("result").innerHTML="Your Monthy Installment Amount is <b><span class='text-primary'><i class='bi bi-currency-rupee'></i>"+Math.round(EMI)+"</span></b> for "+p+" in "+(n/12)+" Years.";

}