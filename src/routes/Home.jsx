import React from 'react'
import cover from '../assets/Cover.jpg'

function Home() {
  return (
    <div className="home">
      <img src={cover} alt="" />
      <h1>Clinical manager</h1>
      <p className='texto'>A solução de uma maneira simples e eficiente permitirá o gerenciamento hospitalar ,realocando seus pacientes, assim permitindo uma maior organização de dos recursos e de pacientes</p>
      <div className='lateral'>
        <div className='texto'>
          <h2>Oque é a solução?</h2>
          <p>Nossa solução se baseia em um software de gerenciamento hospitalar</p>
        </div>
        <div className='texto'>
          <h2>Oque fará?</h2>
          <p>ele permitirá você adicionar, atualizar e deletar pacientes da só seu banco de dados, fazendo assim uma gerenciamento inteligente do hospital.</p>
        </div>
        <div className='texto'>
          <h2>Como funciona?</h2>
          <p>O programa é desenvolvido em Python, conta com dicionários e arquivos db.jason como banco de dados, também conta com um menu interativo para o usuário do programa</p>
        </div>
      </div>
    <div className="vantagens">
      <h2>Vantagens</h2>
      <div className="blocos">
        <div className="bloco">
          <img src={cover} alt="" />
          <div className="texto">
            <h2>Simplicidade de usar</h2>
            <p></p>
          </div>
        </div>
        <div className="bloco">
          <img src={cover} alt="" />
          <div className="texto">
            <h2>Permitirá uma maior gestão de pacientes no hospital</h2>
            <p></p>
          </div>
        </div>
        <div className="bloco">
          <img src={cover} alt="" />
          <div className="texto">
            <h2>Facilitará o trabalho de gerenciamento</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home