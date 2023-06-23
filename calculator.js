function display(a){
    document.getElementById("output").value += a;
}
function calcRes(){
        var val =  eval(document.getElementById("output").value);
        document.getElementById("output").value = val;
}
function clearance(){
    output.value = output.value.toString().slice(0,-1)
}