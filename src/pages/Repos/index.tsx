import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { get } from "../../services/api.service";
import {List} from "../../components/List";
import { IRepo } from "../../interface/repos.interface";


const Repos = () => {

    const [listRepos, setListRepos] = useState<IRepo[]>([]);

    const {username} = useParams();

    useEffect(() => {
        const onMount = async () => {
            const result = await get(`users/${username}/repos`)
            console.log(result)
    
            setListRepos(result.data)
    
        }
        onMount();
    }, [])

    return (
        <div className="flex flex-col items-center">
    
          <h1 className="mb-10 text-4xl text-slate-400">
            Explore Repositorios Github</h1>
    
          <section className="flex gap-2">
            
          </section>
    
          <section>
            {listRepos.map(item => (
            <List  key={item.id} id={item.id} image={item.avatar_url} title={item.full_name} login={""}            />
            ))}
          </section>
    
        </div>
      );


}
export {Repos}


