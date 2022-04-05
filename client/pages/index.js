import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('buyOrder')} />
        <input {...register('sessionId')} />
        <input {...register('amount', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.amount && <span>This field is required</span>}

        <button type="submit">Pagar</button>
      </form>
      {/* <button onClick={handleClick}>Pagar</button> */}
    </div>
  );
}
