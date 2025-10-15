import { useState } from 'react'
import './App.css'

function ToList() {
  const [Valor, setValor] = useState("");
  const [list, setlist] = useState([]);

  const adicionarTarefa = () => {
    if (!Valor.trim()) return;
    const novaTarefa = {
      id: Date.now(),
      text: Valor,
    };
    setlist(prev => [...prev, novaTarefa]); // corrigido aqui
    setValor("");
  };

  const removerTarefa = (id) => {
    setlist(prev => prev.filter(tarefa => tarefa.id !== id));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={Valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar à lista</button>

      <div>
        {list.map((item) => (
          <ul key={item.id}>
            <li><button ></button>
              {item.text}
              <button onClick={() => removerTarefa(item.id)}>Remover</button>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default ToList;
