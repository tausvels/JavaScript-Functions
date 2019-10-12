function fractionPositiveNegativeZero (arr){
    var totalPositiveNumber = 0;
    var totalNegativeNumber = 0;
    var totalZeroNumber = 0;
    var output = [];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            totalPositiveNumber++;
        }else if(arr[i]<0){
            totalNegativeNumber++;
        }else{
            totalZeroNumber++;
        }
    }
    var postiveFraction = (totalPositiveNumber/arr.length).toFixed(6);
    var negativeFraction = (totalNegativeNumber/arr.length).toFixed(6);
    var zeroFraction = (totalZeroNumber/arr.length).toFixed(6);

    return [postiveFraction, negativeFraction, zeroFraction];

}
// -------------------- USING THE MAP FUNCTION --------------------------

function plusMinus(arr) {
    let positives = 0, negatives = 0, zeros = 0;
    const len = arr.length || 0;
     
    if (len > 0 && len <= 100) {
         arr.map((elem, key) => {
              if (elem > 0) {
                   positives++;
              } else if (elem < 0) {
                   negatives++; 
              } else {
                   zeros++;
              }
                 
              return elem; 
         }); 
    } 
    
    console.log((positives / len) || 0);
    console.log((negatives / len) || 0);
    console.log((zeros / len) || 0);      
}