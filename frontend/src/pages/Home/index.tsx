import React, { useState } from 'react'
import Header from '../../components/Header'
import {ContentPage, InputSeacher, TextArea } from './styles'
import textServices from '../../mocks/text-services'
import { ITextServices } from "../../models/text-service";
import { TextService } from '../../services/text.service';

const Home:React.FC = ()=>{

    const dTitle="Selecione uma opção"
    const dDescr="após selecionar uma opção você pode prosseguir !"

    const serviceTxt = new TextService()

    const [typeService,setTypeService] = useState<ITextServices>({name:dTitle,descricao:dDescr,id:0})

    const [textResult,setTextResult] = useState<string>()


    function verSelection(value:string):void{
        const selection = textServices.find((i)=> i.name===value)
        if(selection){
            setTypeService(selection)
            const ntext = serviceTxt.getService(selection.id,textResult+"")
            setTextResult(ntext)

        }else{
            setTypeService(({name:dTitle,descricao:dDescr,id:0}))
        }
    }

    function renderTextResult(text:string):void{
        const result = serviceTxt.getService(typeService.id,text)
        setTextResult(result)
    }

    return(
        <div>
            <Header />
            <ContentPage>
                <div>
                    <InputSeacher 
                    list="ts" 
                    onChange={(e)=>verSelection(e.target.value)}
                    placeholder='Seleciona Modelo Aqui'
                    />
                    <datalist id="ts">
                        {
                            textServices.map((item)=>(
                                <option key={item.id} value={item.name}/>
                            ))
                        }
                    </datalist> 

                    <h1>{typeService.name}</h1>
                    <p>{typeService.descricao}</p>
                </div>
                <div>
                    <h3>anuncio</h3>
                </div>
            </ContentPage>
            <ContentPage>
                <div>
                    <TextArea
                    placeholder="Insira o texto aqui !"
                    onChange={(e)=>{renderTextResult(e.target.value)}}
                    >

                    </TextArea>
                </div>
                <div>
                    <TextArea
                    value={textResult}
                    placeholder='... ...'
                    readOnly={true}
                    >
                    </TextArea>
                </div>
            </ContentPage>

        </div>
    )
}

export default Home