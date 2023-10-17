import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { get } from "./services/api.service";

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleClick = async () => { 
    const lista = await get (`${inputValue}/repos`) ; 
    console.log(lista.data)
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
        <List />
      </section>

    </div>
  );
}

export default App;
