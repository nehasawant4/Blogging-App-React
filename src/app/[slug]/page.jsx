import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage= () => {
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Hello World</h1>
                    <div className={styles.user}>
                        <div className={styles.userImage}>
                            <Image src="/p1.png" alt="" fill className={styles.avatar}/>
                        </div>
                        <div className={styles.userText}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}>11.12.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.png " alt="" fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.postDesc}>
                        <p>
                            This ambitious project completed by a subsidiary of Bethlehem Steel Corporation, the McClintic-Marshall Construction Company, following plans laid out by its architect Irving Morrow (1884-1952) and engineering design work by Charles Alton Ellis (1876-1949), Leon Solomon Moisseiff (1872-1943), and Joseph Strauss(1870-1938).
                        </p>
                        <h2>Sad Truth</h2>
                        <p>
                            Eleven workers died during the construction of the bridge, but that number would have been higher but for Strauss's insistence on installing a movable safety netting system below the construction site. This precaution, which Strauss is credited with inventing, likely saved the lives of the nineteen workers who fell into it, and thus earning themselves membership into the exclusive 'Half Way to Hell Club'.
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
}

export default SinglePage
