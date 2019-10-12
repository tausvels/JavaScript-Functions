function oddEven(num1, num2){
    var arr = [];
    var outcome = [];
    for(let i=num1; i<num2; i++){
        if(i % 2 != 0){
            arr.push(i);
        } continue;
    }
    var totalEvenNumbers = num2 - arr.length;
    var totalOddNumbers = arr.length;
    console.log('Total number of ODD NUMBERS: '+totalOddNumbers);
    console.log('Total number of EVEN NUMBERS: '+totalEvenNumbers);
    console.log('The ODD NUMBERS are: '+arr);
    return outcome = [totalEvenNumbers, totalOddNumbers, arr];
}