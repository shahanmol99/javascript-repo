var count = 0;
var diceValueFreq = [0,0,0,0,0,0];
var diceValue;

do {
    count++;
    console.log("Rolling dice")
    diceValue = Math.floor((Math.random() * 6)+1);
    console.log("Dice value = "+diceValue);
    
    diceValueFreq[diceValue-1] = diceValueFreq[diceValue-1] + 1;
    
    console.log();
}
while(count<10);

for(var i=0;i<6;i++) {
    console.log("Frequency for "+(i+1)+" = "+diceValueFreq[i]);
}