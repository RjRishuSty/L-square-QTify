import styles from "./SearchItem.module.css";

const SearchItem = ({ album }) => {
  console.log(album);
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftDiv}>
        <img src={album.image} alt={album.description} />
        <div className={styles.contentDiv}>
          <h5>{album.title}</h5>
          <p>{album.description}</p>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <p>{album.follows} Follows</p>
      </div>
    </div>
  );
};

export default SearchItem;
