function calculateMaturityAmount(){
    
    //get input values from the form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const intrestRate = parseFloat(document.getElementById('intrestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //perform calculations

    const MaturityAmount = principle + (principle * intrestRate *tenure)/100;

    //display result
    document.getElementById('result').innerText = `MaturityAmount: ${MaturityAmount.toFixed(2)}`;


}


//attach the event listner to the calculate button

document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);