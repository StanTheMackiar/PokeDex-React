const helpNamePokemons = (str) => {
    let newStr = str.charAt(0).toUpperCase() + str.slice(1);
  if (str.includes("-")) {
    let array = str.split("-");
    let arrayUC = array.map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1);
    });
    let result = arrayUC.join(" ");
    return result;
  } else return newStr
};

export default helpNamePokemons;
