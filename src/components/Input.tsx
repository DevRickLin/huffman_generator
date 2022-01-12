import React, { ChangeEvent } from "react";
export default class Input extends React.Component<{ inputString: string, label: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }>{
    render(): React.ReactNode {
        return (
            <div className="w-full h-full pl-5">
                <label className="text-gray-700" htmlFor="name">{this.props.label}</label>
                <textarea className="flex-1 appearance-none resize-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    id="comment"
                    placeholder={this.props.label}
                    value={this.props.inputString}
                    onChange={(e) => this.props.onChange(e)}
                    name="comment"
                    rows={5}
                    cols={40}>
                </textarea>
            </div>
        )
    }
}