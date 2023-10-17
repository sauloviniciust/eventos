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
        <input 
        type="text" 
        value={value }
        onChange={handleImputChange}/>
        // <input type="text" value="inputValue" onChange={(e) = setInputValue(e.target.value)}/>
    )
}

export {Input}



