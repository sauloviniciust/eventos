import { useState } from "react";
import { IRepo } from "../../interface/repos.interface";
import { List } from "../../components/List";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { get } from "../../services/api.service";

const Home = () => {
    
        const [listUser, setListUser] = useState<IRepo[]>([])

        const [inputValue, setInputValue] = useState('');
      
        const handleClick = async () => { 
          const lista = await get (`${inputValue}`) ; 
          
          setListUser(previous => [...previous, lista.data])
          }
      
        return (
          <div className="flex flex-col items-center">
      
            <h1 className="text-4xl mt-10 text-slate-400">
              Explore Repositorios Github</h1>
      
            <section className="flex gap-4 items-center">
              <Input value={inputValue}  onChange={setInputValue}/>
              <Button handleClick={handleClick}/>
            </section>
      
            <section>
              <List listRepo={listUser}/>
            </section>
      
          </div>
    )
}

export { Home }