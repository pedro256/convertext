
interface IUnicoder{
    id:number
    name:string,
    upper:string,
    lower:string,
    number:string,
    spliter?:string
}

const uData:IUnicoder[] = [
    {
        id:1,
        name:'small-caps',
        lower:'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡXʏᴢ',
        upper:'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡXʏᴢ',
        number:'0123456789'
    },
    {
        id:2,
        name:'wide-text',
        lower:'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚｇ',
        upper:'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺＧ',
        number:'０１２３４５６７８９'
    },
    {
        id:3,
        name:'up-down',
        lower:'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz',
        upper:'∀BƆᗡƎℲפHIſK˥WNOԀQRS┴∩ΛMX⅄Z',
        number:'0ƖᄅƐㄣϛ9ㄥ86'
    },
    {
        id:4,
        name:'bold',
        lower:'𝗮 𝗯 𝗰 𝗱 𝗲 𝗳 𝗴 𝗵 𝗶 𝗷 𝗸 𝗹 𝗺 𝗻 𝗼 𝗽 𝗾 𝗿 𝘀 𝘁 𝘂 𝘃 𝘄 𝘅 𝘆 𝘇',
        upper:'𝗔 𝗕 𝗖 𝗗 𝗘 𝗙 𝗚 𝗛 𝗜 𝗝 𝗞 𝗟 𝗠 𝗡 𝗢 𝗣 𝗤 𝗥 𝗦 𝗧 𝗨 𝗩 𝗪 𝗫 𝗬 𝗭',
        number:'𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵',
        spliter:" "
    },
    {
        id:5,
        name:'italic',
        lower:'𝘢 𝘣 𝘤 𝘥 𝘦 𝘧 𝘨 𝘩 𝘪 𝘫 𝘬 𝘭 𝘮 𝘯 𝘰 𝘱 𝘲 𝘳 𝘴 𝘵 𝘶 𝘷 𝘸 𝘹 𝘺 𝘻',
        upper:'𝘈 𝘉 𝘊 𝘋 𝘌 𝘍 𝘎 𝘏 𝘐 𝘑 𝘒 𝘓 𝘔 𝘕 𝘖 𝘗 𝘘 𝘙 𝘚 𝘛 𝘜 𝘝 𝘞 𝘟 𝘠𝘡',
        number:'0 1 2 3 4 5 6 7 8 9',
        spliter: " "
    },
    {
        id:6,
        name:'superscript',
        lower:'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ',
        upper:'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ',
        number:'⁰¹²³⁴⁵⁶⁷⁸⁹'
    },
    {
        id:7,
        name:'mirror',
        lower:'ɒdɔbɘʇǫʜiႱʞlmnoqpɿƨƚuvwxyz',
        upper:'AᙠƆᗡƎᖷᎮHIႱᐴ⅃MИOꟼỌЯƧTUVWXYƸ',
        number:'012Ƹ456789'
    },
    {
        id:8,
        name:'CICLED',
        upper:'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
        lower:'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
        number:'⓪①②③④⑤⑥⑦⑧⑨'
    },
    {
        id:9,
        name:'CICLED_INVERSE',
        upper:'🅐 🅑 🅒 🅓 🅔 🅕 🅖 🅗 🅘 🅙 🅚 🅛 🅜 🅝 🅞 🅟 🅠 🅡 🅢 🅣 🅤 🅥 🅦 🅧 🅨 🅩',
        lower:'🅐 🅑 🅒 🅓 🅔 🅕 🅖 🅗 🅘 🅙 🅚 🅛 🅜 🅝 🅞 🅟 🅠 🅡 🅢 🅣 🅤 🅥 🅦 🅧 🅨 🅩',
        number:'⓿ ➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒',
        spliter:" "
    },
]

export class UnicodeGenerator{

    generateUnicode(id:number,text:string):string{
        const chars = text.split("")
        const unicodeI = uData.find(i => i.id===id) || uData[1]

        const spliter = unicodeI.spliter || ""

        var numASCIIComp:number = 0

        const nstring = chars.map((c) =>{
            const charCode = c.charCodeAt(0)
            var u:string[] = []
            if(charCode>=48 && charCode<=57){
                u = unicodeI.number.split(spliter) || []
                numASCIIComp=48
            }
            if(charCode>=65 && charCode<=90){
                u = unicodeI.upper.split(spliter) || []
                numASCIIComp=65
            }
            if(charCode>=97 && charCode<=122){
                u = unicodeI.lower.split(spliter) || []
                numASCIIComp=97
            }
            return u[charCode-numASCIIComp] || c
            
        })
        return nstring.join("")
    }
}