import styles from './Loader.module.scss'

export function Loader() {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.loader}>
				<div className={styles.spinner}></div>
				<span className={styles.text}>Загрузка...</span>
			</div>
		</div>
	)
}
