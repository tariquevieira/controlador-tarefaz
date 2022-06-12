import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}> {
  render(): React.ReactNode {
    const { type = 'button', onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
