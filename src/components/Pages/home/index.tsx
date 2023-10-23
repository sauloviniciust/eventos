import { IRepo } from "../../../interface/repos.interface"

interface IProps{
    listRepo: IRepo[]
}

const List = ({listRepo}: IProps) => {

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {listRepo.map(repo => (

                <a href={"https://github.com/" + repo.login} target="blank"  
                    key={repo.id} className="hover:ring-2 ring-zinc-600 
                    hover:shadow-zinc-700 bg-gradient-to-r hover:from-zinc-900
                    hover:to-zinc-700 from-zinc-700 to-zinc-900 my-4 p-5 
                    flex shadow-lg shadow-black">
                    <img src={repo.avatar_url} 
                    className="shadow-black hover:shadow-2xl rounded-full h-20"  
                    alt="User Avatar" />
                    <h1 className="ml-5 my-auto text-slate-300">{repo.login}</h1>
                </a>
            ))}
        </div>
 )
}

export {List}


