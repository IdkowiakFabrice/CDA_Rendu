export default function transcription(ch) {
    var rna = "" ;

	for(var i = 0; i < ch.length; i ++) {
		if (ch[i] === 'G') {
			rna += ch[i].replace('G','C');
		} else if(ch[i] === 'C') {
			rna += ch[i].replace('C','G');
		} else if(ch[i] === 'T') {
			rna += ch[i].replace('T','A');
		}else if (ch[i] === 'A'){
			rna += ch[i].replace('A','U');
        }else {
			throw 'Nucleotide Z does not exist'
        }
	}
	return rna
}