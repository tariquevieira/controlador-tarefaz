import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          console.log('h2 clicado');
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
            // tarefa={item.tarefa}
            // tempo={item.tempo}
            // selecionado={false}
            // completado={false}
            // id={''}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
