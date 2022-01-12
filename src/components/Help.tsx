import React from "react";
export default class Help extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="flex flex-row w-full h-full flex-center bg-slate-500 font-noto-sans-sc text-white">
                <div className="flex flex-col justify-center ml-5">
                <h1>操作步骤</h1>
                <ol className="list-inside list-decimal">
                    <li>将源文本内容复制贴上，程序根据源文件计算字符出现频率与字符集，生成哈夫曼树</li>
                    <li>输入该哈夫曼树的编码</li>
                    <li>完成解码</li>
                </ol>
                </div>
            </div>)
    }
}