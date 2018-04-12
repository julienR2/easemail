export default (jsStyle) => {
  let cssString = "";
  for (let objectKey in jsStyle) {
    cssString += objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ": " + jsStyle[objectKey] + ";\n";
  }

  return cssString;
}
