interface IProps {
  id: number;
  image: string;
  title: string;
  login: string;
  onClick?: () => void;
}

const List = ({ image, onClick, title,  }: IProps) => {

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 gap-4">
           
        <div className="hover:ring-2 ring-zinc-600 flex my-4 p-5 
                    hover:shadow-zinc-700 bg-gradient-to-r shadow-lg
                    hover:to-zinc-700 from-zinc-700 to-zinc-900 
                    hover:from-zinc-900 shadow-black" onClick={handleClick}>

          <img className="shadow-black hover:shadow-2xl rounded-full h-20"
               src={image}alt="User Avatar"/>

          <h1 className="ml-5 my-auto text-slate-300">{title}</h1>

        </div>
    </div>
  );
};

export { List };
