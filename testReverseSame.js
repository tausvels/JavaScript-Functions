var input = "aba";
	
		function testReverseSame(input){
			var temp = input.split("");
			let reverse = [];
			for(var i = input.length-1; i>=0; i--){
				reverse.push(input[i]);
			}
			console.log(temp);
			console.log(reverse);			
			for(var i = 0; i<reverse.length; i++){
				if(reverse[i] == temp[i]){return true;}
				else{return false}
			}
		}
	console.log(test = testReverseSame(input));