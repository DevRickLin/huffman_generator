import React from "react";
import { HuffmanTree } from "../data_structure/HuffmanTree";
import G6, { TreeGraph } from "@antv/g6";
export default class TreeDisplayer extends React.Component<{huffmanTree:HuffmanTree}>{
    treeGraph:TreeGraph = null;
    constructor(props:{huffmanTree:HuffmanTree}){
        super(props);
    }
    initTreeGraph(huffmanTree:HuffmanTree){
        this.treeGraph = new G6.TreeGraph({
            container:"G6Node",
            fitView:true,
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
        this.treeGraph.changeData(this.props.huffmanTree.G6TreeData);
    }
    render(): React.ReactNode {
        return (
            <div className="w-full h-full p-5">
                <div id="G6Node" className="w-full h-full"></div>
            </div>
        )
    }
}