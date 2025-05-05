import { useState } from 'react';
import Calculator from '../components/Calculator';
import styles from '../styles/calculator.module.css';

export default function Home() {
  const [resultado, setResultado] = useState(null);
  const [historial, setHistorial] = useState([]);

  const manejarOnResult = (objeto) => {
    setResultado(objeto.res);
    setHistorial((prev) => [...prev, objeto]);
  }

  const changeOp = (op) => {
    switch (op) {
      case 'sumar' : return '+';
      case 'restar' : return '-';
      case 'multiplicar' : return '*';
      case 'dividir' : return '/';
      default: return '';
    }
  }

  return (
    <div className={styles.container}>
      <Calculator 
        titulo="Mi calculadora personalizada"
        onResult={manejarOnResult}
      />
      {resultado != null && (
        <p className={styles.resultado}>Resultado: {resultado}</p>
      )}

      {historial.length > 0 && (
        <div className={styles.container}>
          <h2 className={styles.header}>Historial</h2>
          <ul>
            {historial.map((item, index) => (
              <li key={index}>#{index + 1}: {item.num1} {changeOp(item.operacion)} {item.num2} = {item.res}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}