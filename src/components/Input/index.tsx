import { ChangeEvent } from "react";

interface IProps {
    value: string;
    onChange:(value: string) => void;
}

const Input = ({value, onChange}: IProps) => {

    

    const handleImputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }
    
    
   

    return(
        <input type="text"  
        className="ring-inset my-10 shadow-lg shadow-black hover:ring-1
        ring-zinc-800 px-2 bg-zinc-300"
        value={value }
        onChange={handleImputChange}/>
        // <input type="text" value="inputValue" onChange={(e) = setInputValue(e.target.value)}/>
    )
}

export {Input}



