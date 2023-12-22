import React, { useEffect, useState} from 'react';
import {Listbox} from "@headlessui/react";
import classNames from "classnames";
import {FiCheck} from "react-icons/fi";
import {CgChevronDown} from "react-icons/cg";
interface Props {
    options:SelectBoxInterface[];
    defKey?:string
    onChange:(value:SelectBoxInterface)=>void
    className?:string;
    title?:string;
    name?:string;
    noLabel?:boolean;
    noActiveEffect?:boolean;
}
interface SelectBoxInterface {
    key:string;
    name:string;
}
const SelectBox:React.FC<Props> = ({options,defKey=options[0].key ,onChange ,className="" ,title ,name=`SelectBox.${Math.round(Math.random()*100)}.${Math.round(Math.random()*100000000)}`,noLabel=false ,noActiveEffect=false}) => {

    const [Selected, setSelected] = useState<SelectBoxInterface>(options[
        (options.findIndex(value => value.key === defKey)) >=0
            ?(options.findIndex(value => value.key === defKey)):0])


    const findFilter = (option:SelectBoxInterface)=>{
        return Selected.key === option.key;
    }




    return (
        <Listbox value={Selected}  name={name} onChange={(value)=>{
            setSelected(value)
            onChange(value)}
        }
        >
            {({ open }) => (
                <div className="relative">
                    <Listbox.Button className={classNames("relative w-full cursor-default rounded-md border border-base-content/20  py-3 pl-3 pr-10 text-left shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm",{"bg-base-100":!className},{"py-1":title},className)}>
                        {title && <span className={classNames("text-2xs ",{"text-base-content/50":!noLabel})}>{title}</span>}
                         <span className="block truncate font-bold">{Selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <CgChevronDown className={classNames("h-5 w-5 text-base-content transition-all duration-200",{"rotate-[-180deg]":open})} aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Listbox.Options
                        className="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {options.map((option,index) => (
                            <Listbox.Option
                                key={index}
                                className={({active ,selected}) => classNames(
                                    'relative cursor-default select-none py-2 pr-3 pl-1 text-base-content'
                                    ,{"text-primary bg-base-300":selected || active || findFilter(option) && !noActiveEffect })}
                                value={option}>

                                {({active ,selected })=>(
                                    <>
                                       <span className={classNames('block truncate')}>{option.name}</span>

                                        {((selected || findFilter(option)) && !noActiveEffect) &&
                                            <span className={classNames({"text-base-content":!selected},{"text-primary":selected}, 'absolute inset-y-0 right-0 flex items-center pr-4')}>
                                                        <FiCheck className={classNames("w-5 h-5")} aria-hidden="true" />
                                            </span>
                                        }
                                    </>
                                )}

                            </Listbox.Option>
                        ))}
                    </Listbox.Options>

                </div>
            )}
        </Listbox>
    );
};

export default React.memo(SelectBox);