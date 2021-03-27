function changeBGC(color){
    var input_field = color.value;
    if (input_field == " ") {
        alert("enter valid hex code");
    }
    else if(input_field[0] != "#") 
    {
        alert("enter valid hex code");
    }
    else if(input_field.length !=7){
        alert("enter valid hex code");
    }
    else
    {
document.body.style.backgroundColor = document.getElementById('color').value;  
} } 