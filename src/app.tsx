import React, { ChangeEvent, EventHandler } from "react";
import ReactDom from "react-dom";
import { HuffmanTree } from "./data_structure/HuffmanTree";
import { IAppState } from "./interface/IAppState";
import Input from "./components/Input";
import Output from "./components/Output";
import TreeDisplayer from "./components/TreeDisplayer";
class App extends React.Component<null,IAppState>{
    constructor(){
        super(null);
        const defaultString = "输入点什么...";
        const defaultTree = HuffmanTree.generateFrom(defaultString);
        this.state = {
            inputString: defaultString,
            huffmanTree: defaultTree,
            outputString: defaultTree.translate(defaultString),
        }
    }
    updateInputString(value:string){
        const newTree = HuffmanTree.generateFrom(value);
        this.setState({
            inputString: value,
            huffmanTree: newTree,
            outputString: newTree === null? '没有编码' : newTree.translate(value)
        })
    }
    render(): React.ReactNode {
        return (
            <div className="flex flex-row w-full, h-full">
                <div className="flex flex-col w-1/2">
                    <div className="w-full h-1/2">
                        <Input inputString={this.state.inputString} onChange={(e:ChangeEvent<HTMLInputElement>)=>this.updateInputString(e.target.value)}/>
                    </div>
                    <div className="w-full h-1/2">
                        <Output outputString={this.state.outputString}/>
                    </div>
                </div>
                <div className="w-1/2 h-full">
                   {this.state.huffmanTree === null? null:<TreeDisplayer huffmanTree={this.state.huffmanTree}/>}
                </div>
            </div>
        )
    }
}
ReactDom.render(
    React.createElement(App),
    document.getElementById('root')
)