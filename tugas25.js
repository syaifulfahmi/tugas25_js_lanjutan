let data = [2,39,76,50,9,7,41,2,24,1,16]

let pilihFilter = data.filter(data => {
	return data > 10
})

console.log(pilihFilter.reverse())

function panggilSort (){
	console.log(("Sebelumnya : "),(data.toString()))
	console.log(("Ascending : " ),(data.sort().toString()))
	console.log(("Descending : " ),(data.reverse().toString()))
	console.log(("Filter > 10 : "),(pilihFilter.sort(function(a,b){return b-a}).toString()))
}

panggilSort()