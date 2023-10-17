interface IProps {
    handleClick: () => void;
}

const Button = ( {handleClick}: IProps) => {

    return(
     <button onClick={handleClick} 
     className="bg-slate-500 rounded-lg p-1
      border-black text-slate-200">Pesquisar</button>

        )
}

export {Button}



