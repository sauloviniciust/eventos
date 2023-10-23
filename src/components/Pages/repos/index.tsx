import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { get } from "../../../services/api.service";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { List } from "../home";


const Repos = () => {
  const [listRepos, setListRepos] = useState();
const {username} = useParams();

useEffect(() => {
  const onMount = async () => {
      const result = await get(`${username}/repos`)
      setListRepos(result.data)

  }
  onMount();
}, [])

  return (
    <div className="flex flex-col items-center">

    <h1 className="mb-10 text-4xl text-slate-400">
      Explore Repositorios Github</h1>

    <section>
      {/* <List listRepo={listRepo}/> */}
    </section>

  </div>
  )
};
export { Repos };
