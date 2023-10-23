import { ChangeEvent, KeyboardEvent } from "react";

interface IProps {
    value: string;
    onChange: (value: string) => void;
}

const Input = ({ value, onChange }: IProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
         console.log("apertou")
            {handleInputChange}
        }
    };

    return (
        <input
            type="text"
            className="ring-inset my-10 shadow-lg shadow-black hover:ring-1 ring-zinc-800 px-2 bg-zinc-300"
            value={value}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
        />
    );
};

export { Input };