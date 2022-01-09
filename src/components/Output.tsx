import React from "react";
export default class Output extends React.Component<{outputString:string, label:string}>{
    render(): React.ReactNode {
        return (
            <div className="w-full h-full pl-5">
                <div className="w-full h-1/3 font-bold text-xl text-justify">{this.props.label}</div>
                <textarea className="w-full h-2/3 resize-none" value={this.props.outputString}/>
            </div>
        )
    }
}