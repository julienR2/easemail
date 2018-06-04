const jsToCss = (jsStyle) => {
  let cssString = "";
  for (let objectKey in jsStyle) {
    cssString += objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + jsStyle[objectKey] + ";\n";
  }

  return cssString;
}

const getPaddings = (paddingString) => {
  let paddings = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }

  if (!paddingString) {
    return paddings;
  }

  const paddingArray = paddingString.split(' ');
  switch (paddingArray.length) {
    case 1:
      return {
        top: paddingArray[0],
        bottom: paddingArray[0],
        right: paddingArray[0],
        left: paddingArray[0],
      };
    case 2:
      return {
        top: paddingArray[0],
        bottom: paddingArray[0],
        right: paddingArray[1],
        left: paddingArray[1],
      };
    case 3:
      return {
        top: paddingArray[0],
        bottom: paddingArray[2],
        right: paddingArray[1],
        left: paddingArray[1],
      };
    case 4:
      return {
        top: paddingArray[0],
        bottom: paddingArray[2],
        right: paddingArray[1],
        left: paddingArray[3],
      };
    default:
      return paddings;
  }
}

export {
  jsToCss,
  getPaddings,
}
