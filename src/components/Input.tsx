import React from "react";
export default class Input extends React.Component<{inputString:string,label:string,onChange:Function}>{
    render(): React.ReactNode {
        return (
            <div className="w-full h-full pl-5">
                <div className="w-full h-1/3 font-bold text-xl text-justify">{this.props.label}</div>
                <textarea className="w-full h-2/3 resize-none" value={this.props.inputString} onChange={(e)=>this.props.onChange(e)}/>
            </div>
        )
    }
}