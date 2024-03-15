function clearScreen(){
    document.getElementById('result').value = "";
}


function display(value) {
    document.getElementById("result").value += value;
}
 


function calculateResult(){
    const x = document.getElementById('result').value;
    const y = eval(x)
    document.getElementById('result').value = y;

}