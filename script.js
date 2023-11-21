let div12 = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10", "div11", "div12", "div13", "div14", "div15", "div16", "div17", "div18", "div19", "div20"];

for (let i = 0; i <div12.length; i++) {
    const Div = document.getElementById(div12[i]);
    if ((i+1) % 2 === 0) {
        Div.style.backgroundColor = "red";
    }else{
        Div.style.backgroundColor="yellow";
    }
     if((i+1)%5===0){
        Div.style.backgroundColor="blue";
    }
 
}