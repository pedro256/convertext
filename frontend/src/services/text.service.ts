import { MorseCodeGenerator } from "./morse-code.generator"
import { UnicodeGenerator } from "./unicode.generator"
import ZalgoGenerator from "./zalgo.generator"

export class TextService{

    unicodeGenerator = new UnicodeGenerator()
    morseCodeGenerator = new MorseCodeGenerator()
    zalgoCodeGenerator = new ZalgoGenerator()

    public getService(id:number,str:string):string{
        switch(id){
            case 1:
                return this.simpleSentence(str)
            case 2:
                return this.lowerCase(str)
            case 3:
                return this.upperCase(str)
            case 4:
                return this.alternateCase(str)
            case 5:
                return this.TitleCase(str)
            case 6:
                return this.inverseCase(str)
            case 7:
                return this.versalete(str)
            case 8:
                return this.amplo(str)
            case 9:
                return this.tachado(str)
            case 10:
                return this.revert(str)
            case 11:
                return this.cabecaparabaixo(str)
            case 12:
                return this.morse(str)
            case 13:
                return this.binary(str)
            case 14:
                return this.bold(str)
            case 15:
                return this.italic(str)
            case 16:
                return this.superscript(str)
            case 17:
                return this.underline(str)
            case 18:
                return this.mirror(str)
            case 19:
                return this.cicled(str)
            case 20:
                return this.cicledReverse(str)
            case 21:
                return this.zalgo(str)
            case 22:
                return this.invisible(str)
            case 23:
                return this.removeDSpaces(str)
            case 24:
                return this.addSpace(str)

            default:
                return this.simpleSentence(str)
        }

    }

    private trimText(str:string):string{
        return str.trim()
    }
    private simpleSentence(str:string){
        str = this.trimText(str)
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    private lowerCase(str:string){
        str = this.trimText(str)
        return str.toLowerCase()
    }
    private upperCase(str:string){
        str = this.trimText(str)
        return str.toUpperCase()
    }
    private alternateCase(str:string){
        str = this.trimText(str)
        const chars = str.toLowerCase().split("")
        for (let i=0; i<chars.length; i++){
            if(i%2){
                chars[i]=chars[i].toUpperCase()
            }
        }
        return chars.join("")
    }
    private TitleCase(str:string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    private inverseCase(str:string){
        str = this.upperCase(str)
        return str.split(" ").map((item)=>{
            return item.charAt(0).toLowerCase() + item.slice(1)

        }).join(" ")
    }
    private tachado(str:string){
        const item = str.split("").map(i =>{
            return i+"̶"
        })
        return item.join("")
    }
    private underline(str:string){
        const item = str.split("").map(i =>{
            return i+"̲"
        })
        return item.join("")
    }
    private revert(str:string){
        const schar = str.split("")
        return schar.reverse().join("")
    }

    private zalgo(str:string){
        return this.zalgoCodeGenerator.generate(str)
    }

    private morse(str:string){
        return this.morseCodeGenerator.generateMorseCode(str)
    }

    private versalete(str:string){
        return this.unicodeGenerator.generateUnicode(1,str)
    }
    private amplo(str:string){
        return this.unicodeGenerator.generateUnicode(2,str)
    }
    private cabecaparabaixo(str:string){
        return this.unicodeGenerator.generateUnicode(3,str)
    }
    private bold(str:string){
        return this.unicodeGenerator.generateUnicode(4,str)
    }
    private italic(str:string){
        return this.unicodeGenerator.generateUnicode(5,str)
    }
    private superscript(str:string){
        return this.unicodeGenerator.generateUnicode(6,str)
    }
    private mirror(str:string){
        return this.revert(this.unicodeGenerator.generateUnicode(7,str))
    }
    private cicled(str:string){
        return this.unicodeGenerator.generateUnicode(8,str)
    }
    private cicledReverse(str:string){
        return this.unicodeGenerator.generateUnicode(9,str)
    }
    private binary(str:string){
        const textSplit = str.split("")
        const bText = textSplit.map(i =>{
            return i.charCodeAt(0).toString(2)+" "
        })
        return bText.join("")
    }

    private invisible(str:string){
        return str.split("").map(()=> 'ㅤ ').join("")
    }

    private removeDSpaces(str:string){
        const valueSplited = str.split(" ").filter((v)=> v.length>0)
        return valueSplited.join(" ")
    }

    private addSpace(str:string){
        const valueSplited = str.split(" ").filter((v)=> v.length>0)
        var space = " "
        for(let i = 0;i<this.zalgoCodeGenerator.random(20);i++) space+=" "
        return valueSplited.join(space)
    }

    
    
}