import React from "react";
export default class Input extends React.Component<{inputString:string,onChange:Function}>{
    render(): React.ReactNode {
        return (
            <div className="w-full h-full p-5">
                <div className="w-full h-1/6 font-bold text-5xl text-center">输入内容</div>
                <textarea className="w-full h-5/6 resize-none" value={this.props.inputString} onChange={(e)=>this.props.onChange(e)}/>
            </div>
        )
    }
}