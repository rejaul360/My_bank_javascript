//hendling Submit-Area 
const btn = document.getElementById("btn").addEventListener("click", () => {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const tarnsationArea = document.getElementById('transation-area').style.display = 'block';

});

// Deposit button event handller-----------//

 document.getElementById('addDeposit').addEventListener('click', () => {
    const depositAmmountNumber = getInputNumber("depositAmmount");

    updateSpanText("currentdeposit", depositAmmountNumber );
    updateSpanText("currentblance", depositAmmountNumber );

    document.getElementById('depositAmmount').value = "";
});

function updateSpanText (id, depositAmmountNumber ){
    const currentBlance = document.getElementById(id).innerText;
    const blanceNumber = parseFloat(currentBlance);
    const totalBlance = depositAmmountNumber + blanceNumber;
    document.getElementById(id).innerText = totalBlance;
};


// Withdraw button event handller-----------// 
document.getElementById('addWithdraw').addEventListener('click', ()=>{
    const withdrawAmountNumber = getInputNumber ('withdrawAmount');
    console.log(withdrawAmountNumber);

    updateSpanText('currentWithdraw', withdrawAmountNumber);
    updateSpanText('currentblance', -1*withdrawAmountNumber);

    document.getElementById('withdrawAmount').value = "";
});

function getInputNumber (id){
    const wdAmount = document.getElementById(id).value;
    const AmountNumber = parseFloat(wdAmount);
    return AmountNumber;
};
