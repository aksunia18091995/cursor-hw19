import styles from './Publication.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faShareFromSquare, faHeart, faCircleDown } from '@fortawesome/free-solid-svg-icons';

export const Publication = ({ author, content, image, date }) => {
    return (
        <div className={styles.component}>
            <img className={styles.mainPhoto} src={author.photo.mainPhoto} alt="ava" />
            <div className={styles.main}>
                <div className={styles.header}>
                    <span className={styles.name}>{author.name}</span>
                    <span className={styles.nickDate}>{author.nickname}</span>
                    <span className={styles.nickDate}>{date}</span>
                </div>
                <p className={styles.content}>{content}</p>
                <img className={styles.money} src={image.img} alt="money" />
            </div>
            <div className={styles.footer}>
                <div className={styles.iconWithCount}>
                    <FontAwesomeIcon icon={faComment} />
                    <span>482</span>  
                </div> 
                 <div className={styles.iconWithCount}>
                    <FontAwesomeIcon icon={faShareFromSquare} />
                    <span>43</span>  
                </div>
                 <div className={styles.iconWithCount}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span>370</span>  
                </div>
                 <div className={styles.iconWithCount}>
                    <FontAwesomeIcon icon={faCircleDown} /> 
                </div>
            </div>
        </div>
    )
}