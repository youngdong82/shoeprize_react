export const withComma = (number) => {
  const strNumber = String(number).split('').reverse()
  const newArray = [];
  for(let i=0; i<strNumber.length; i++){
    newArray.push(strNumber[i]);
    //3의 배수인데, 마지막이 아닐 경우 
    if((i+1) % 3 == 0 && (i+1) !== strNumber.length){
      newArray.push(',');
    }
  }
  return newArray.reverse().join('');
}