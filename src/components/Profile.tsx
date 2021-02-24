import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/nasc007.png" alt="Alessandro Nascimento" />
            <div >
                <strong>Alessandro Nascimento</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level 1</p>
            </div>
        </div>
    );
}