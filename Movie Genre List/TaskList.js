var inputs=document.getElementById("submitButton"),
    x=inputs.length;
document.getElementById("submitButton").addEventListener("click",function(event){
    while(x--)inputs[x].checked=0;
    event.preventDefault();
},0);