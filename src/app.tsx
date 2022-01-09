import React, { ChangeEvent } from "react";
import ReactDom from "react-dom";
import { HuffmanTree } from "./data_structure/HuffmanTree";
import { IAppState } from "./interface/IAppState";
import Input from "./components/Input";
import Output from "./components/Output";
import TreeDisplayer from "./components/TreeDisplayer";
import Help from "./components/Help";
class App extends React.Component<null,IAppState>{
    constructor(){
        super(null);
        const defaultString = "输入点什么...";
        const defaultTree = HuffmanTree.generateFromString(defaultString);
        this.state = {
            sourceString: defaultString,
            codedString: defaultTree.encrypt(defaultString),
            huffmanTree: defaultTree,
            outputString: defaultString,
            stopAtCode:''
        }
    }
    updateInputString(value:string){
        const newTree = HuffmanTree.generateFromString(value);
        this.setState({
            sourceString: value,
            codedString: newTree === null? '没有编码' : newTree.encrypt(value),
            huffmanTree: newTree,
            outputString: value
        })
    }
    updateCodedString(value:string){
        const codeArr = Array.from(value).map(digit=>digit === '1'? 1:0);
        const { res, stopAtCode } = this.state.huffmanTree.decrypt(codeArr);
        this.setState({
            codedString:value,
            outputString: res,
            stopAtCode: stopAtCode
        })
    }
    render(): React.ReactNode {
        return (
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-row w-full flex-grow">
                    <div className="flex flex-col w-1/2 h-full">
                        <div className="w-full h-1/3">
                            <Input inputString={this.state.sourceString} label="源文件" onChange={(e:ChangeEvent<HTMLInputElement>)=>this.updateInputString(e.target.value)}/>
                        </div>
                        <div className="w-full h-1/3">
                            <Input inputString={this.state.codedString} label="输入编码" onChange={(e:ChangeEvent<HTMLInputElement>)=>this.updateCodedString(e.target.value)}/>
                        </div>
                        <div className="w-full h-1/3">
                            <Output outputString={this.state.outputString} label="输出译码"/>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                    {this.state.huffmanTree === null? null:<TreeDisplayer huffmanTree={this.state.huffmanTree} stopAtCode={this.state.stopAtCode}/>}
                    </div>
                </div>
                <div className="w-full h-40">
                    <Help/>
                </div>
            </div>
        )
    }
}
ReactDom.render(
    React.createElement(App),
    document.getElementById('root')
)