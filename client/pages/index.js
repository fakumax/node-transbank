import styles from '../styles/Home.module.css';

export default function Home() {
  const handleClick = async () => {
    try {
      const object = await fetch('http://localhost:5000/webpay_plus/create');

      // If status correct.
      if (object.status === 200) {
        const data = await object.json();
        console.log('data', data);
      } else if (object.status === 401) {
        console.log('No posee autorización para ver el contenido');
      } else if ((object.status = 404)) {
        console.log('El recurso no existe');
      } else {
        console.log('Ha sucedido un error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Pagar</button>
    </div>
  );
}
