module.exports = function countSubstring(str='',substr="", substring) {
    let count = 0
    substring = str.indexOf(substr);
    while (substring != -1){
    count++;
    substring = str.indexOf(substr, substring + 1);
    }
    return count
}