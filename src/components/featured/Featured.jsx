import React from "react";
import styles from "./featured.module.css"
import Image from "next/image";
const Featured = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey there!</b>
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.png" alt="" fill/>
                </div>
                <div className={styles.imgContainer}>
                    <h1 className={styles.postTitle}>Title</h1>
                    <p className={styles.postDescription}>
                        California’s Golden Gate ranks as one of the most recognizable bridges ever built.
                        When completed in 1937, the Golden Gate was the longest and tallest suspension bridge on the planet.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured