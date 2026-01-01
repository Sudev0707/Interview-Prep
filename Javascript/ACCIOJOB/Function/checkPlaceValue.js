
// 
function placeValue(num) {
  let str = num.toString();
  let len = str.length;

  for (let i = 0; i < len; i++) {
    let digit = Number(str[i]);
    let value = digit * Math.pow(10, len - i - 1);
    console.log(`${digit} → ${value}`);
  }
}

placeValue(538);
