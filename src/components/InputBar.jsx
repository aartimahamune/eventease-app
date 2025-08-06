import styles from '../styles/InputBar.module.css';

export default function InputBar({value, onChange, inputRef}) {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} value={value} onChange={onChange} ref={inputRef} />
    </div>
  );
}
