import { ChangeEvent } from "react";

interface IProps {
    value: string;
    onChange: (value: string) => void;
}

const Input = ({ value, onChange }: IProps) => {
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    
    };

    return (
        <input className="ring-inset my-10 shadow-lg px-2 
        shadow-black hover:ring-1 ring-zinc-800 bg-zinc-300"  
        type="text"value={value}onChange={handleInputChange}/>
    );
};

export { Input };