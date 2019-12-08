module.exports = function parseIni(content) {
    const lines = content.split("\n");
    const iniO = {}
    const ini = {}
    const regexValue = /(^([\w].+)=(.+))/gm;
    const regexKey = /^\[(.+)\]$/gm;

    let titreMatch = ""
    let keyMatch = ""
    let valueMatch = ""

    for(const line of lines) {
        let verifMatchTitre = regexKey.exec(line);
        let verifMatchKey = regexValue.exec(content);
        let verifMatchValue = regexValue.exec(content);
        if(verifMatchTitre !== null) {
            //where (verifMatchKey.spl)
            titreMatch = verifMatchTitre[1]
            keyMatch = verifMatchKey[2]
            valueMatch = verifMatchValue[3]
        } else {
            ini[keyMatch] = valueMatch;
            iniO[titreMatch] = [ini]; }
    }
    return JSON.stringify(iniO,ini,2)
}
//            ini[keyMatch] = [{keyMatch:`${valueMatch}`}]}
// ini[keyMatch] = [`${valueMatch}:`+`${valueMatch2}`]}
// ini[keyMatch] = [{"test":valueMatch+valueMatch2}]}