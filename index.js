const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const availableNotes=[2000,500,100,20,10,5,1];
const noOfNotes=document.querySelectorAll(".no-ofnotes")
checkButton.addEventListener("click",function validateBillAndCashAmount() {
    hideMessage();
    if((cashGiven.value)<0 || (billAmount.value)<0){
        showMessage("Invalid Bill Amount ");
    }
    else{
        var input=(cashGiven.value)-(billAmount.value);
        if(input<0){
            
            showMessage("Do you wanna wash plats?");
        }
        else{
            calculateChange(input);
         
        }
    }
});

function calculateChange(amountToBeReturned ) {
    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes=Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }
}

function hideMessage() {
    message.style.display="none";
}

function showMessage(msg) {  
    message.style.display="block";
    message.innerText=msg;
}