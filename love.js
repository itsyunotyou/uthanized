
let lovesMeState = true;


const petalNumbers = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
var clicks = 0;


const flower = document.getElementById("flower");
for (var i = 0; i < petalNumbers; i++){
  const rotate = i /petalNumbers * 360;
  flower.innerHTML += '<div class="petal-container-wrapper" style="transform: rotate('+rotate+'deg"><div class="petal-container"><div class="petal" id = "petal-'+i+'" onClick="toggleLovesMe('+i+')"></div></div></div>'

  

  window. toggleLovesMe = (petalKey)=>{

    lovesMeState = !lovesMeState;
    document.getElementById("lovesMe").innerHTML = (lovesMeState ? "Loves Me"  : "Loves Me Not")
    const petal = document.getElementById('petal-'+ petalKey);
    petal.className += "disappears";
    clicks += 1
  
    if (petalNumbers == clicks){
      window.location.replace('danger.html');
    }
    
    
    }
  


  
} 


  