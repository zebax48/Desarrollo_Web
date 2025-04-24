import React, { useState } from 'react';
import styles from '../styles/calculator.module.css';

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumarNumeros = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResultado(num1 + num2);
    } else {
      setResultado('Por favor ingrese números válidos');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Suma de dos números</h1>
      <input
        type="number"
        placeholder="Ingresa el primer número"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Ingresa el segundo número"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        className={styles.input}
      />
      <button onClick={sumarNumeros} className={styles.button}>
        Sumar
      </button>
      {resultado !== null && (
        <p className={styles.resultado}>Resultado: {resultado}</p>
      )}
    </div>
  );
}
