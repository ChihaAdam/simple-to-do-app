
import { Animation } from '@mui/icons-material'
import styles from './loading.module.css'

function Loading() {
  return (
    <div className={styles.main}>
        <div className={styles.rotation}>
        <div className={styles.loading}></div>
        <Animation />
        </div>
    </div>     
  )
}

export default Loading
