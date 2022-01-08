import { ITree, INode } from "../interface/ITree";
import { IHuffmanData } from "../interface/IHuffmanData";
class HuffmanNode implements INode<IHuffmanData>{
    left: INode<IHuffmanData> = null;
    right: INode<IHuffmanData> = null;
    data:IHuffmanData = {ch:'',freq:0,code:[]};
    constructor(ch='',freq=0){
        this.data.ch = ch;
        this.data.freq = freq;
    }
}
class HuffmanTree implements ITree<IHuffmanData>{
    private _root:INode<IHuffmanData>;
    private _leafs:INode<IHuffmanData>[];
    private constructor(root:INode<IHuffmanData>,leaf:INode<IHuffmanData>[]){
        this._root = root;
        this._leafs = leaf;
    }
    destroy(){
        delete this._root;
    };
    get root(){
        return this._root;
    }
    get dictionary(){
        const res = new Map<string,string>();
        this._leafs.forEach(val=>{
            res.set(val.data.ch,val.data.code.reduce((acc,cur)=>acc+cur.toString(),""));
        })
        return res;
    }
    get G6TreeData(){
        const transfer =(root:HuffmanNode):{id:string,children:Array<any>,label:string}=>{
            if(root === null){
                return null
            }
            const left = transfer(root.left);
            const right = transfer(root.right);
            const children = [];
            if(left!==null){
                children.push(left);
            }
            if(right!=null){
                children.push(right);
            }
            return{
                id: root.data.ch,
                label: root.data.ch === null?undefined:root.data.ch,
                children:children
            }
        }
        return transfer(this._root);
    }
    static generateFrom(inputString: string){
        const freqs = new Map<string,number>();
        const chArr = Array.from(inputString);
        const leafs:Array<HuffmanNode> = [];
        const updateCodeForAllNodes =(root:HuffmanNode,digit:0|1)=>{
            if(root == null){
                return;
            }
            root.data.code.push(digit);
            updateCodeForAllNodes(root.left,digit);
            updateCodeForAllNodes(root.right,digit);
        }
        chArr.forEach(
            (ch:string)=>{
                if(freqs.get(ch)){
                    freqs.set(ch,freqs.get(ch)+1);
                }else
                {   
                    freqs.set(ch,1);
                }
            }
        )
        freqs.forEach((val,key)=>{
            leafs.push(new HuffmanNode(key,val));
        })
        if(leafs.length <= 1){
            return null;
        }
        const temp = Array.from(leafs);
        while(temp.length!=1){
            temp.sort((a,b)=>{
                return a.data.freq - b.data.freq;
            })
            const left = temp[0];
            const right = temp[1];
            temp.splice(0,2);
            updateCodeForAllNodes(left,0);
            updateCodeForAllNodes(right,1);
            const root = new HuffmanNode('',left.data.freq + right.data.freq);
            root.left = left;
            root.right = right;
            temp.push(root);
        }
        return new HuffmanTree(temp[0],leafs);
    }
    translate(inputString:string):string{
       return Array.from(inputString).map((ch)=>this.dictionary.get(ch)).reduce((acc,cur)=>acc+cur.toString(),'');
    }
}
export { HuffmanTree, HuffmanNode }