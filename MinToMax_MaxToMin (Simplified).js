window.addEventListener('load', ()=>{
	document.getElementById('heading').innerHTML = 'Javascript Function Running!';

	const myArray = [10,5,4,7];
	document.getElementById('arg1').innerHTML = 'The argument given is '+`${myArray}`+' and is of type: '+`${typeof(a)}`;
	document.getElementById('method').innerHTML = 'Sorting function is carried out on the argument!';
	sortingMaxToMin(myArray)
	//document.getElementById('result').innerHTML = 'The OUTPUT IS: ' + `${result}`;
})

function sortingMinToMax(arr) {
	const resultAssending = arr.sort( (a, b) => {return a-b} );
	document.getElementById('result').innerHTML = 'OutPut Min to Max is: ' + `${resultAssending}`;
}

function sortingMaxToMin(arr){
	const resultDescending = arr.sort( (a, b) => {return b-a} );  
	document.getElementById('result').innerHTML = 'OutPut Max to Min is: ' + `${resultDescending}`;
}