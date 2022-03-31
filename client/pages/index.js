import styles from '../styles/Home.module.css';

export default function Home() {
  const handleClick = async () => {
    const data = await fetch('http://localhost:5000/create');
    console.log('data', data);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Pagar</button>
    </div>
  );
}
