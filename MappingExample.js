window.addEventListener('load', ()=>{
	document.getElementById('heading').innerHTML = 'Javascript Function Running!';

	const person = [
		{firstname: 'Tausif', lastname: 'Khan'},
		{firstname: 'Ruthba', lastname: 'Nitia'},
		{firstname: 'Ezaj', lastname: 'Khan'}
	];
	//EXAMPLE OF MAP
	//Here, getFullName function is run for every element in the person array
	document.getElementById('result').innerHTML = person.map(getFullName);
})


function getFullName (item){
	const fullName = [item.firstname,item.lastname].join(' ');
	return fullName;
}