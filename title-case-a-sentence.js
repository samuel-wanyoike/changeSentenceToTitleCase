function titleCase(str) {
const newStr = str.split(" ");
const upperStr = [];
for (let st in newStr) {
  upperStr[st] = newStr[st][0].toUpperCase() +newStr[st].slice(1).toLowerCase();
}

  return upperStr.join(" ");
}

titleCase("I'm a little tea pot");