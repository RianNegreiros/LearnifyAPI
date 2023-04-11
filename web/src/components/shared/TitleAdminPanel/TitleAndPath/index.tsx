import styles from './styles.module.css'

interface TitleAndPath {
    title: String,
    path: String
}

export default function TitleAndPath({ title, path }: TitleAndPath) {
  return (
    <>
      <h4>{ title }</h4>
      <span className={styles.styledPath}>{ path }</span>
    </>
  )
}