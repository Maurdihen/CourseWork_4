import styles from "./Tag.module.scss";

export const Tag = ({ id, label, type }) => {
  return (
    <div
      className={styles.Tag}
      onClick={() => {
        document.location = `/${type}/${id}`
      }}
    >
      {label}
    </div>
  )

}

export default Tag;