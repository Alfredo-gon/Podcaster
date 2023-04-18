import Layout from "@/components/layout"
import Podcast from "@/components/podcast"
import useSWR from 'swr'
import styles from "../styles/grid.module.css"
import { Input } from 'reactstrap';
import { useState, useEffect } from "react";


const CustomHeader = ({value, handleFilter, length}) => {
    
  return (
    <div  style={{marginBottom: "10px", display: "flex", justifyContent: "flex-end"}}>
      <div>
        {length}
        <Input value={value} placeholder="Filter podcast..." onChange={e => handleFilter(e)} />
        
      </div>
    </div>
  )
}

export default function Home() {

  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetcher = (...args) => fetch(...args).then(res => {
                                                           setLoading(false)
                                                          return(res.json())} );

  const { data: entry } = useSWR('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json', fetcher, {
    dedupingInterval: 86400000,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    })
  
  useEffect(() => {
    if(entry){
      setLoading(false)
    }
      
  }, []);

  const handleFilter = (e) => {
    setValue(e.target.value);
    let valor=e.target.value;

    if (valor.length) {
      let filteredData = entry.feed.entry.filter(item => {
        let startsWithCondition =
          item["im:name"].label.toLowerCase().startsWith(valor.toLowerCase()) ||
          item["im:artist"].label.toLowerCase().startsWith(valor.toLowerCase()) 
          
        let includesCondition =
          item["im:name"].label.toLowerCase().includes(valor.toLowerCase()) ||
          item["im:artist"].label.toLowerCase().includes(valor.toLowerCase()) 

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })
      setFilteredData(filteredData);
    }
  }
  
  return (
    <>
      <Layout
        loading={loading}>
          <main className="contenedor">
            <CustomHeader value={value} handleFilter={handleFilter} length={value.length? filteredData.length : 100} />
            <div className={styles.grid}>
              {entry ? 
                value.length ? 
                  filteredData.map((podcast, id) =>
                    <Podcast
                      key={id}
                      podcast={podcast}
                    />
                  )
                :
                  entry.feed.entry.map((podcast, id) =>
                    <Podcast
                      key={id}
                      podcast={podcast}
                    />
                    )
              : 
                null}
            </div>

          </main>
      </Layout>
    
    </>
      
  )
}


