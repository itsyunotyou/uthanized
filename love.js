let lovesMeState = true;


const petalNumbers = Math.floor(Math.random() * (15 - 5 + 1)) + 5;


const flower = document.getElementById("flower");
for (var i = 0; i < petalNumbers; i++){
  const rotate = i /petalNumbers * 360;
  flower.innerHTML += '<div class="petal-container-wrapper" style="transform: rotate('+rotate+'deg"><div class="petal-container"><div class="petal" id = "petal-'+i+'" onClick="toggleLovesMe('+i+')"></div></div></div>'
} 


window. toggleLovesMe = (petalKey)=>{
  lovesMeState = !lovesMeState;
  console.log("Toggle Love", petalKey);
  document.getElementById("lovesMe").innerHTML = "She   Loves Me" + (lovesMeState ? "."  : "  Not.")
  const petal = document.getElementById('petal-'+petalKey);
  petal.className += "disappears";
  console.log("New petal!",petal);
}
