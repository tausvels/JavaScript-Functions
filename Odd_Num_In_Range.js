function myfunction(){
	var num1 = (document.getElementbyId('num1')).value;
	var num2 = (document.getElementbyId('num2')).value;
	var event = document.getElementbyId('btn');

	// event.addEventListener('click', oddNumber);
	console.log("Button Clicked");
}

//This function lists all the odd numbers present within a range
// function oddNumber(a, b){

// 	var num=[];
// 	for (var i = a; i <=b; i++) {
// 		if(i%2 !=0){
// 			num.push(i);
// 		}
// 		return num;
// 	}
//   console.log(num);
// }