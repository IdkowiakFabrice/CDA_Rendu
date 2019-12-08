module.exports = function trim(str="", whitespaceopt = " "){
    const regex =/([-])/

    return str.trim(regex)

}