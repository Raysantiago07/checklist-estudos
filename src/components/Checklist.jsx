import React, {useState} from 'react'
import './Checklist.css'

export default function Checklist() {
  const [tarefas, setTarefas] = useState([])
  const [texto, setTexto] = useState("")
  const [relevancia, setRelevancia] = useState("Alta Relevância ENEM")
  const [materia, setMateria] = useState("Matemática")

  const adicionarTarefa = () => {
    if (texto.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      materia,
      texto,
      relevancia,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
    setRelevancia("Alta Relevância ENEM")
    setMateria("Matemática")
  }

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((t) => t.id !== id))
  }

  return (
    <div className='page'>
      <div className='checklist'>
        <h1>Checklist de Estudos</h1>

        <select value={materia} onChange={(e) => setMateria(e.target.value)}>
          <option value="Matemática">Matemática</option>  
          <option value="Química">Química</option>
          <option value="Física">Física</option>
          <option value="Biologia">Biologia</option>
          <option value="Biologia">História</option>
          <option value="Biologia">Geografia</option>
          <option value="Biologia">Filosofia</option>
          <option value="Biologia">Sociologia</option>
          <option value="Biologia">Linguagens em Geral</option>
          
        </select>  

        <input
          type="text"
          placeholder="Digite a tarefa"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />

        <select
          value={relevancia}
          onChange={(e) => setRelevancia(e.target.value)}
        >
          <option value="Alta Relevância ENEM">Alta Relevância ENEM</option>
          <option value="Média Relevância ENEM">Média Relevância ENEM</option>
          <option value="Baixa Relevância ENEM">Baixa Relevância ENEM</option>
        </select>

        <button onClick={adicionarTarefa}>Adicionar</button>

        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              {tarefa.materia} - {tarefa.texto} - {tarefa.relevancia}
              <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
            </li>
          ))}
        </ul>

        <footer>Criado por Ray Santiago e Carlos Daniel</footer>
      </div>
    </div>
  )
}