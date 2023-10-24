import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IUser } from "../../interface/user.interface";
import { get } from "../../services/api.service";
import { List } from "../../components/List/index";
import { useNavigate } from "react-router-dom";


  const Home = () => {

    const navigate = useNavigate();

    const [listUser, setlistUser] = useState<IUser[]>([])

    const [inputValue, setInputValue] = useState('');

    const handleClick = async () => { 
    
      const lista = await get (`${inputValue}`) ; 
    setlistUser(previous => [...previous, lista.data])
    }

    const handleNavigateRepos = (username: string) => {
      navigate(`/repos/${username}`)
  }

  return (
    <div className="flex flex-col items-center">

      <h1 className="mb-10 text-4xl text-slate-400">
        Explore Repositorios Github</h1>

      <section className="flex gap-2">
        <Input value={inputValue} onChange={setInputValue}/>
        <Button handleClick={handleClick}/>
      </section>

      <section>
        {listUser.map(item => (
        <List 
        id={item.id} 
        image={item.owner.avatar_url} 
        title={item.name} 
        onClick={() => handleNavigateRepos(item.login)} 
        login={""}
        />
        ))}
      </section>

    </div>
  );
}

export { Home }
 