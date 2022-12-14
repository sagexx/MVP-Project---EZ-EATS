var lat;
var long;
var data;
var search = document.querySelector(".search")
var hero = document.querySelector(".hero")
var sectionEl= document.querySelector(".section")
var sectionTwo= document.querySelector(".section2")
var restEl = document.querySelector(".restocontainer")


//fetch user location on after permission
function fetchLocation(){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ed69b556bbmsh2fe21d88c21eaf9p107fd6jsndd43c6198cec',
			'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
		}
	};
	fetch('https://ip-geo-location.p.rapidapi.com/ip/check?format=json', options)
	.then(function(res){
		return res.json();
	})
	.then(function(data){
	   console.log(data);
	   console.log(data.location.latitude);
	   console.log(data.location.longitude);

	lat= data.location.latitude;
	long= data.location.longitude;
		return
		
	}) .then(fetchRes)


};


function fetchRes(){

	
	const options2 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ed69b556bbmsh2fe21d88c21eaf9p107fd6jsndd43c6198cec',
			'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
		}
	};
	var baseUrl ='https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?';
	var param = `latitude=${lat}&longitude=${long}`
	var endPoint = '&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US'
	// console.log("baseurl",baseUrl+param+endPoint)
	fetch(baseUrl+param+endPoint, options2)
	.then(function(res2){
		return res2.json();
	})
	.then(function(data){
		console.log(data)
		for(i=0; i<data.data.length; i++){
			console.log(data.data[i].name)
			var resNameEl= document.createElement('p')
			var resAddEl = document.createElement('p')
			var resWebEl = document.createElement('a')
			var resAdd = data.data[i].address
			var resWeb = data.data[i].website
			var resName =data.data[i].name
			resNameEl.append(resName)
			resWebEl.append(resWeb)
			resAddEl.append(resAdd)
			restEl.appendChild(resNameEl)
			restEl.appendChild(resAddEl)
			restEl.appendChild(resWebEl)
			
		}
		// console.log(data.data[0].name)
		return data
	})
	
	
	
};


// function myFunction(){
//     fetchLocation();
// 	// setTimeout(() => {
// 	// 	fetchRes();
		
// 	//   }, "750")
 	
// }

search.addEventListener("click",function(event){
	event.preventDefault();
	fetchLocation()
	hero.style.display="none"
	sectionEl.style.display="none"
	sectionTwo.style.display="block"
	
	 
	
	
})

//api url reference
// 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=47.608013&longitude=-122.335167&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US
