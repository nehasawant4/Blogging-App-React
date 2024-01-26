import React from "react";
import styles from "./comments.module.css"
import Link from "next/link";
import Image from "next/image";
const Comments = () => {

    const status="authenticated";

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea className={styles.input} placeholder="Write a comment"/>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to comment</Link>
            )}

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image className={styles.image} src="/travel.png" alt="" width={50} height={50}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}>12.12.2023</span>
                        </div>
                    </div>
                    <div>
                        <p className={styles.desc}>
                            How you doin'?
                        </p>
                    </div>
                </div>

                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image className={styles.image} src="/culture.png" alt="" width={50} height={50}/>
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Vrushabh</span>
                            <span className={styles.date}>12.21.2023</span>
                        </div>
                    </div>
                    <div>
                        <p className={styles.desc}>
                            Happy New Year!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comments