import { useEffect, useState } from "react";
import "./player.css"

const Player = () => {

  const [page, setPage] = useState(0);
  const [videodata, setVideoData] = useState([])
  const [loading, setLoading] = useState(false)

  async function getData() {
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`)
      const result = await response.json();
      // console.log(result);
      setVideoData(result.data.posts.splice(0,8))
      setLoading(true);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [page])

  console.log(videodata);


  return (

    <div className="wrapper">
    
      {
        loading ? <div className="all-cards">
        {
          videodata?.map(function (data, index) {
            return <div key={index}>
              <img src={data.submission.thumbnail} alt="user-poster" />
            </div>
          })
        }
        </div> : <div>
            <h1 className="loading">Loading...</h1>
        </div>
      }
      

      
      {
        loading ? <div className="btn-div">
          <button disabled={page==0} className="sr.scroll-to-top" onClick={() => { setPage(page - 1); window.scrollTo(0, 0) }}>Prev</button>
          <span>{page}</span>
          <button className="sr.scroll-to-top" onClick={() => { setPage(page + 1); window.scrollTo(0, 0) }}>Next</button>
        </div> :  ""
      }

    </div>
  )
}

export default Player