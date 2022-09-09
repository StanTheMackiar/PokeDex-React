export const helpAddComma = (str) => {
    let newstr = str.toString().slice(0, -1) + "." + str.toString().slice(-1);
    newstr = parseFloat(newstr);
    return newstr;
}