import Link from 'next/link'
import ClipLoader from "react-spinners/ClipLoader";

export default function Header({loading}) {
  return (
    <header>
        <div className="contenedor">
          <Link href={"/"} style={{textDecoration: "none"}}>
            <h4 style={{color:"#6E82DB", width: "60%", display: "inline-block"}}>Podcaster</h4>
            {loading ?
              <div style={{ width: "10%", display: "inline-block", verticalAlign: "top", marginLeft: "5%", marginTop: "2%"}}>
                <ClipLoader
                  color={"#6E82DB"}
                  loading={loading}
                  
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
              
            : null}
          </Link>
            
        </div>
    </header>
  )
}
