import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext"
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countedownButton}
                >
                    Ciclo encerrado
                    <img src="icons/check.svg" alt="check" />
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button type="button"
                                className={`${styles.countedownButton} ${styles.countedownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                                <img src="icons/close.svg" alt="Close" />
                            </button>
                        ) : (
                                <button type="button"
                                    className={styles.countedownButton}
                                    onClick={startCountdown}
                                >
                                    <img src="icons/play_arrow.svg" alt="Play" />
                                    Iniciar ciclo
                                </button>
                            )}
                    </>
                )}
        </div>

    );
}