function compute()
{
    p = document.getElementById("principal").value;
    q = document.getElementById("rate").value;
    console.log("Rate is:"+q);
    r = document.getElementById("years").value;
    intRate=parseInt(r);
    /* calculation amount here */
    a = (p*q*r)/100;
    console.log("Interest mamount is:"+a);
    yr=new Date().getFullYear();
    maturityYear = (yr+intRate); 
    console.log(maturityYear);
    const para = document.createElement("span");
    var node = document.createTextNode("If you deposit " +p+",");
    para.appendChild(node);
    var linebreak = document.createElement('br');
    para.appendChild(linebreak);
    var node = document.createTextNode("at an interest rate of "+intRate+".");
    para.appendChild(node);
    var linebreak = document.createElement('br');
    para.appendChild(linebreak);
    var node = document.createTextNode("You will receive an amount of "+a+",");
    para.appendChild(node);
    var linebreak = document.createElement('br');
    para.appendChild(linebreak);
    var node = document.createTextNode("in the year "+maturityYear);
    para.appendChild(node);
    var linebreak = document.createElement('br');
    para.appendChild(linebreak);
    const element = document.getElementById("result");
    element.appendChild(para);
 
}

function myFunction() {
  var x = document.getElementById("rate").value;
  document.getElementById("demo").innerHTML = x+ "%";
}




        