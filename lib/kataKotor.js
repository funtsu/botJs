const sastrawi = require('sastrawijs');

const kataKasar = [
   
    'bgst',
    'bngst',
    'bangsat',
    'bngsd',
    'bangsad',
    'blowjob',
    'pussy',
    'dick',
    'damn',
    'ass',
    'ngentod',
    'khalifa',
    'meki',
    'peler',
    'busuk',
    'anjing',
    'goblok',
    'peju',
    'kelamin',
    'telek',
    'kusut',
    'babi',
    'buluk',
    'telaso',
    'noob',
    'jing',
    'jingan',
    'biadab',
    'asw',
    'lont',
    'kancut',
    'payudara',
    'toket',
    'ajg',
    'ajng',
    'bego',
    'bngsd',
    'bgsd',
    'anjg',
    'anj',
    'tempek',
    'ngancok',
    'mbalon',
    'kentu',
    'jancok',
    'puki',
    'jembot',
    'bawok',
    'ngateli',
    'ngocok',
    'gblk',
    'goblk',
    'gblok',
    'pongot',
    'pungut',
    'amnjing',
    'babu',
    'lhontew',
    'lomte',
    'anjim',
    'tod',
    'jablay',
    'blay',
    'kanjut',
    'fck',
    'persetan',
    'komtol',
    'bengek',
    'kenthu',
    'anjim',
    'kmtl',
    'kirik',
    'lonte',
    'lonet',
    'fucek',
    'jembut',
    'mbut',
    'tolol',
    'bgo',
    'bgsat',
    'anjng',
    'kntol',
    'mmek',
    'mmk',
    'ktl'
    //Tambahin Sendiri
];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariKasar = (kata) => new Promise((resolve) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})
