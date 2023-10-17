import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { get } from "./services/api.service";
import { IRepo } from "./interface/repos.interface";

function App() {
  const [listRepo, setlistRepo] = useState<IRepo[]>([])

  const [inputValue, setInputValue] = useState('');

  const handleClick = async () => { 
    const lista = await get (`${inputValue}/repos`) ; 
    setlistRepo(lista.data)
    }

  return (
    <div className="flex flex-col items-center">

      <h1 className="text-4xl mt-10 text-slate-400">
        Explore Repositorios Github</h1>

      <section className="flex gap-4 items-center">
        <Input value={inputValue} onChange={setInputValue}/>
        <Button handleClick={handleClick}/>
      </section>

      <section>
        <List listRepo={listRepo}/>
      </section>

    </div>
  );
}

export default App;
