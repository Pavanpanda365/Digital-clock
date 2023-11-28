const time = document.querySelector("#time")
const progressBar = document.querySelector("#progressBar")

setInterval(()=>{
	let day = new Date();

	let hh = day.getHours();
	let mm = day.getMinutes();
	let ss = day.getSeconds();

	progressBar.style.width = `${ss*5}px`
	time.innerText =`${hh}:${mm}:${ss}`;
})