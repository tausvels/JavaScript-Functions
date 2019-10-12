function sumOfNumbersDivisibleby3and5 (firstNumber, lastNumber){
    var sum = 0;
    for(let i=firstNumber; i<=lastNumber; i++){
        if((i % 3 ==0 && i % 5 == 0)) {
            sum+=i
        }
    }
    return sum;
}