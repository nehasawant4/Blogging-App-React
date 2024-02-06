"use client"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import styles from "./write.module.css"
import {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {app} from "@/utils/firebase";

const storage = getStorage(app);
const WritePage = () => {

    const [file, setFile] = useState(null);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const {status} = useSession();
    const router = useRouter();

    useEffect(() => {
        const upload=()=>{
            const name = new Date().getTime + file.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        };
        file && upload();
    }, [file]);

    if(status === "loading"){
        return <div className={styles.loading}>Loading...</div>
    }

    if(status === "unauthenticated"){
        router.push("/")
    }

    const slugify=(str)=>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    const handleSubmit = async () =>{
        const res = await fetch("/api/posts", {
            method: "POST",
            body:JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: "travel"
            }),
        });

        console.log(res);
    };

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Title" className={styles.input} onChange={e=>setTitle(e.target.value)}/>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16}/>
                </button>
                {open && (
                    <div className={styles.add}>
                        <input type="file" id="image"
                               onChange={e=>setFile(e.target.files[0])}
                               style={{display:"none"}}
                        />
                        <button className={styles.addButton}>
                            <label htmlFor="image">
                                <Image src="/image.png" alt="" width={16} height={16}/>
                            </label>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="" width={16} height={16}/>
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="" width={16} height={16}/>
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell Your Story..."
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default WritePage