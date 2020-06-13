import Link from 'next/link';
import {useSelector} from 'react-redux';

import Counter from './counter';
import Clock from './clock';
import styles from './Page.module.scss';

function Page({linkTo, NavigateTo, title}) {
  const placeholderData = useSelector((state) => state.placeholderData);
  const error = useSelector((state) => state.error);
  const light = useSelector((state) => state.light);
  const lastUpdate = useSelector((state) => state.lastUpdate);

  const renderItems = (item) => {
    return (
      <div key={item.id} className={styles.card}>
        <h3>{item.name}</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <span>{item.phone}</span>
        <div className={styles.action}>
          <button>Ver mais</button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.content}>

      {placeholderData && placeholderData.map(renderItems)}
      </div>
      {error && <p style={{color: 'red'}}>Error: {error.message}</p>}
    </div>
  );
}

export default Page;
