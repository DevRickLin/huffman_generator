import React from "react";
export default class Output extends React.Component<{outputString:string}>{
    render(): React.ReactNode {
        return (
            <div className="w-full h-full p-5">
                <div className="w-full h-1/6 font-bold text-5xl text-center">输出编码</div>
                <textarea className="w-full h-5/6 resize-none" value={this.props.outputString}/>
            </div>
        )
    }
}