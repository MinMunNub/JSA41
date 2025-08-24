// fetch("https://geocoding-api.open-meteo.com/v1/search?name=hanoi")
// .then(function (response) {
// return response.json();
// })
// .then(function (data) {
//     console.log(data);

//     let latitude = data.results[0].latitude
//     let longitude = data.results[0].longitude

//     console.log("Latitude:"+ latitude)
//     console.log("Longitude:"+ longitude)
//   });

  


const input = document.getElementById("cityInput")
const place = document.getElementById("place")
const temp  = document.getElementById("temp")
const wind  = document.getElementById("wind")
const desc  = document.getElementById("desc")
const card  = document.querySelector(".card")
const hist  = document.getElementById("historyList")
const KEY="hist4"

function bg(code){
  if([0,1].includes(code)) return "clear.jpg"
  if([2,3,45,48].includes(code)) return "cloudy.jpg"
  if([51,53,55,61,63,65,80,81,82].includes(code)) return "rainy.jpg"
  return "snowy.jpg"
}

function showHist(){
  hist.innerHTML=""
  JSON.parse(localStorage.getItem(KEY)||"[]").forEach(c=>{
    let li=document.createElement("li")
    li.textContent=c
    li.onclick=()=>search(c)
    hist.appendChild(li)
  })
}

async function search(city){
  let g=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`).then(r=>r.json())
  if(!g.results) return
  let {latitude,longitude,name,country}=g.results[0]
  let w=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`).then(r=>r.json())
  let cw=w.current_weather

  place.textContent=`${name}, ${country}`
  temp.textContent=`Temperature: ${cw.temperature}°C`
  wind.textContent=`Windspeed: ${cw.windspeed} km/h`
  card.style.backgroundImage=`url(${bg(cw.weathercode)})`

  let list=[city,...(JSON.parse(localStorage.getItem(KEY)||"[]").filter(x=>x.toLowerCase()!=city.toLowerCase()))].slice(0,10)
  localStorage.setItem(KEY,JSON.stringify(list))
  showHist()
}

input.addEventListener("keydown",e=>{if(e.key==="Enter")search(input.value)})
showHist()
