interface INode<T>{
    left:INode<T> | null;
    right:INode<T> | null;
    data:T
}
interface ITree<T>{
    root:INode<T>
    destroy:()=>void
}
export { ITree, INode }