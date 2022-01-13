interface ICodeBase{
    char:string,
    translate:string
}
const MorseCodeList:ICodeBase[] = [
    {
        char:' ',
        translate: "/"
    },
    {
        char:'a',
        translate: '.-'
    },
    {
        char:'b',
        translate: '-...'
    },
    {
        char:'c',
        translate: '-.-.'
    },
    {
        char:'d',
        translate: '-..'
    },
    {
        char:'e',
        translate: '.'
    },
    {
        char:'f',
        translate: '..-.'
    },
    {
        char:'g',
        translate: '--.'
    },
    {
        char:'h',
        translate: "...."
    },
    {
        char:'i',
        translate: '..'
    },
    {
        char:'j',
        translate: '.---'
    },
    {
        char:'k',
        translate: '-.-'
    },
    {
        char:'l',
        translate: '.-..'
    },
    {
        char:'m',
        translate: '--'
    },
    {
        char:'n',
        translate: '-.'
    },
    {
        char:'o',
        translate: '---'
    },
    {
        char:'p',
        translate: '.--.'
    },
    {
        char:'q',
        translate: '--.-'
    },
    {
        char:'r',
        translate: '.-.'
    },
    {
        char:'s',
        translate: '...'
    },
    {
        char:'t',
        translate: '-'
    },
    {
        char:'u',
        translate: '..-'
    },
    {
        char:'v',
        translate: '...-'
    },
    {
        char:'x',
        translate: '-..-'
    },
    {
        char:'y',
        translate: '-.--'
    },
    {
        char:'z',
        translate: '--..'
    },
    {
        char:'0',
        translate: '-----'
    },
    {
        char:'1',
        translate: '.----'
    },
    {
        char:'2',
        translate: '..---'
    },
    {
        char:'3',
        translate: '...--'
    },
    {
        char:'4',
        translate: '....-'
    },
    {
        char:'5',
        translate: '.....'
    },
    {
        char:'6',
        translate: '-....'
    },
    {
        char:'7',
        translate: '--...'
    },
    {
        char:'8',
        translate: '---..'
    },
    {
        char:'9',
        translate: '----.'
    }
]

export class MorseCodeGenerator{

    generateMorseCode(text:string):string{
        const textSplit = text.split("")
        const encoded = textSplit.map(i => {
            return MorseCodeList.find(c => c.char===i[0].toLowerCase())?.translate 
        })
        return encoded.join("")
    }

}