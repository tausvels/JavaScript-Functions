window.addEventListener('load', ()=>{
	
	function assendingOrder(arr){
		return arr.sort();
	}
	function descendingOrder(arr){
		return arr.reverse();
	}
	function numericSortAscending(arr){
		return arr.sort( (a,b)=>{return a-b} );
	}
	function numericSortDescending(arr){
		return arr.sort( (a,b)=>{return b-a} );
	}
	
})