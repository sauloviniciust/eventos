import { IRepo } from "../../interface/repos.interface"

interface IProps{
    listRepo: IRepo[]
}

const List = ({listRepo}: IProps) => {

    return(
        <div>
            {listRepo.map(repo => (
                <div key={repo.id} className="bg-zinc-600 my-4 p-5 flex ">
                    <img src={repo.avatar_url} className="rounded-full h-20"  alt="User Avatar" />
                    <h1 className="ml-5 my-auto">{repo.full_name}</h1>
                    
                </div>
            ))}
        </div>
 )
}

export {List}


