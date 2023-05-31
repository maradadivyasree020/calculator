function Display(a){
    let val=document.querySelector("#result").value;
    console.log(val);
    result.value=val+a;
}

function Eval(){
    let num1=document.getElementById("result").value;
    let num2=eval(num1);
    console.log(num2);
    result.value=num2;
}

function Clear(){
    let x=document.getElementById("result").value;
    result.value="";
}

function Slice(){
    let x=document.getElementById("result").value;
    result.value=x.slice(0,-1);
}

