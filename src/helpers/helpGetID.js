const helpGetID = (url) => {
    let arrayID = url.split("/")
    return arrayID[6]
}

export default helpGetID