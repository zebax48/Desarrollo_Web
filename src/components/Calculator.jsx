import React, { useState, useEffect } from 'react';
import styles from '../styles/calculator.module.css';

export default function Calculator({
  titulo = 'Calculadora simple',
  operaciones = ['sumar', 'restar', 'multiplicar', 'dividir'],
  onResult
}) {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacion, setOperacion] = useState('');

  useEffect(() => {
    if (operacion) {
      calcular(operacion);
    }
  }, [operacion]);

  const calcular = (operacion) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (isNaN(num1) || isNaN(num2)) {
      onResult('Por favor ingrese números válidos');
      return;
    }

    let res;
    switch (operacion) {
      case 'sumar':
        res = num1 + num2;
        break;
      case 'restar':
        res = num1 - num2;
        break;
      case 'multiplicar':
        res = num1 * num2;
        break;
      case 'dividir':
        if (num2 === 0) {
          onResult('No se puede dividir entre 0');
          return;
        }
        res = num1 / num2;
        break;
      default:
        onResult('Operación no válida');
        return;
    }
    onResult({
      operacion,
      num1,
      num2,
      res
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{titulo}</h1>
      <div className={styles.inputContainer}>
        <input
          type="number"
          placeholder="Primer número"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Segundo número"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.buttonContainer}>
        {operaciones.map((op) => (
          <button
            key={op}
            onClick={() => calcular(op)}
            className={styles.button}
          >
            {op.charAt(0).toUpperCase() + op.slice(1)}
          </button>
        ))}
      </div>

      <select
        onChange={(e) => setOperacion(e.target.value)}
        className={styles.select}
        value={operacion}
        disabled={!numero1 || !numero2}
      >
        <option value="">Seleccione una operación</option>
        {operaciones.map((op) => (
          <option key={op} value={op}>
            {op.charAt(0).toUpperCase() + op.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}