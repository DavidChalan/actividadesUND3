import HeroAutocomplete from './Heroes'; 
import styles from './aside.module.css';

function Aside() {
  return (
    <aside className={styles.aside}>
      <HeroAutocomplete />
      <div>
      <iframe // el iframe es para poner video youtube
          className={styles.iframe}//importante poner https://youtube.com/embed/ --> despues la url
          src="https://youtube.com/embed/HQIiYqOVTWo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe // el iframe es para poner video youtube
          className={styles.iframe}
          src="https://www.youtube.com/embed/wGxDfSWC4Ww?si=M8v6MB5VOe5Z156H"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </aside>
  );
}

export default Aside;
