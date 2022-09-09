import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try { importAll(require.context('icons', true, /\.svg$/)); } catch (error) { console.log(error); }
//从一个目录下把svg文件全部引入

type Props = {
    name:string
}
const Icon = (prop:Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#'+prop.name}/>
        </svg>
    )
}

export default Icon