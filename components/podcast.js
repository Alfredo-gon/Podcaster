import Image from "next/image"
import styles from "../styles/podcast.module.css"
import Link from "next/link"

export default function Podcast({podcast}) {
  return (
    <Link style={{textDecoration: "none"}} href={`/podcast/${podcast.id.attributes["im:id"]}`}>
      <div className={styles.podcast} style={{textAlign: "center"}}>
          <Image style={{borderRadius: '500px', overflow: 'hidden', textAlign: "center"}} src={podcast["im:image"][2].label} width={170} height={170} alt={"Imagen Podcast"}/>
          <div>
            <h5 style={{color:"black", textTransform:"uppercase"}}>{podcast["im:name"].label}</h5>
            <p style={{color:"#A9A9AA", fontSize:"15px"}}>Author: {podcast["im:artist"].label}</p>
          </div>
      </div>
    </Link>
  )
}
