import { HuffmanTree } from "../data_structure/HuffmanTree";
interface IAppState{
     huffmanTree: HuffmanTree;
     sourceString: string;
     codedString:string;
     outputString: string;
     stopAtCode:string;
}
export { IAppState }