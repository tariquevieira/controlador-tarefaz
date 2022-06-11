import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
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
        {tarefas.map((item, index) => (
          <Item
            key={index}
            tarefa={item.tarefa}
            tempo={item.tempo}
            selecionado={false}
            completado={false}
            id={''}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
