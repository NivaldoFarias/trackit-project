function objToArr(obj) {
  let arr = [],
    i = 0;
  for (const value of Object.values(obj)) {
    if (value) arr.push(i);
    i++;
  }
  return arr;
}

export default objToArr;
