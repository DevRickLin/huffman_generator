interface INode<T>{
    left:INode<T> | null;
    right:INode<T> | null;
    data:T
}
interface ITree<T>{
    root:INode<T>
    destroy:()=>void
}
interface G6TreeData{
    id: string;
    children: G6TreeData[];
    label: string;
    style?:{};
}
export { ITree, INode, G6TreeData }