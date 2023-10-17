interface IProps {
    handleClick: () => void;
}

const Button = ( {handleClick}: IProps) => {

    return(
     <button onClick={handleClick} 
     className="bg-slate-600 rounded-lg p-1 px-2
      border-black text-slate-300 hover:bg-slate-500 hover:text-black">Pesquisar</button>

        )
}

export {Button}



