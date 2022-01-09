import React from "react";
import { HuffmanTree } from "../data_structure/HuffmanTree";
import G6, { TreeGraph } from "@antv/g6";
import { G6TreeData } from "../interface/ITree";
export default class TreeDisplayer extends React.Component<{huffmanTree:HuffmanTree,stopAtCode:string}>{
    treeGraph:TreeGraph = null;
    constructor(props:{huffmanTree:HuffmanTree,stopAtCode:string}){
        super(props);
    }
    initTreeGraph(huffmanTree:HuffmanTree){
        this.treeGraph = new G6.TreeGraph({
            container:"G6Node",
            fitView:true,
            animate: false,
            autoPaint:true,
            layout: {
                type: 'dendrogram',
                direction: 'TB', // H / V / LR / RL / TB / BT
            }
        })
        this.treeGraph.data(huffmanTree.G6TreeData);
        this.treeGraph.render();
    }
    componentDidMount(): void {
        this.initTreeGraph(this.props.huffmanTree);
    }
    componentDidUpdate(prevProps: Readonly<{ huffmanTree: HuffmanTree; }>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("stopAtCode>>>",this.props.stopAtCode);
        const markNode = (data:G6TreeData)=>{
            if(data.id!==''&&data.id === this.props.stopAtCode){
                data.style = {
                    fill:'blue'
                }
            }
            data.children = data.children.map(child=>markNode(child));
            return data;
        }
        this.treeGraph.changeData(markNode(this.props.huffmanTree.G6TreeData));
    }
    render(): React.ReactNode {
        return (
            <div className="w-full h-full p-5">
                <div id="G6Node" className="w-full h-full"></div>
            </div>
        )
    }
}