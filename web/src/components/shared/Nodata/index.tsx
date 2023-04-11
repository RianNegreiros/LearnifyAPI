import styles from './styles.module.css'

interface NoDataProps {
  message?: string
}

export default function NoData({ message = 'Do not found any data' }: NoDataProps) {
  return (
    <div className={styles.admin_panel}>
      <h3>{message}</h3>
    </div>
  )
}