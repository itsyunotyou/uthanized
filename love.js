
let lovesMeState = true;


const petalNumbers = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
const petalCount = 0;



const flower = document.getElementById("flower");
for (var i = 0; i < petalNumbers; i++){
  const rotate = i /petalNumbers * 360;
  flower.innerHTML += '<div class="petal-container-wrapper" style="transform: rotate('+rotate+'deg"><div class="petal-container"><div class="petal" id = "petal-'+i+'" onClick="toggleLovesMe('+i+')"></div></div></div>'
} 

window. toggleLovesMe = (petalKey)=>{

  lovesMeState = !lovesMeState;
  document.getElementById("lovesMe").innerHTML = (lovesMeState ? "Loves Me"  : "Loves Me Not")
  const petal = document.getElementById('petal-'+petalKey);
  petal.className += "disappears";

  console.log("New petal!", petal)
  petalCount = console.count("Count");
  console.log("Count petals:", petalCount)
  console.log("Get to petals:", petalNumbers)
  
  if (petalCount == petalNumbers) {
      window.location.href = "best.html";

  }


}

