module.exports = function anagram(str = '', strAnam = '') {
    let result
    if (str.length === strAnam.length) {
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < strAnam.length; j++) {
                if (str[i] != strAnam[j]) {
                    result = false
                } else {
                    result = true
                    break
                }
            }
        }
        return result
    }
    else {
        return result = false
    }
}
