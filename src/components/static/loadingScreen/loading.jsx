import styles from './loading.module.css'
function Loading() {
  return (
    <div className={styles.main}>
        <div className={styles.loading} />
        <h4>loading ...</h4>
    </div>     
  )
}

export default Loading
