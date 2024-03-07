import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import "./singleplayer.css"

const SinglePlayer = () => {

  let {page,index}  = useParams();
  const [singledata,setSingleData] = useState([])
  const [loading,setLoading] = useState(false);

  //function to get allpost with page
  async function getSingleData(){
    try {
      const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`)
      const result = await response.json();
      setSingleData(result.data.posts)
      setLoading(true)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getSingleData();
  },[page])

  
  //function to get singlepost data
  function getPostsByCreatorId(posts, creatorId) {
    return posts.filter(post => post.postId === creatorId);
  }

  const postsForCreator = getPostsByCreatorId(singledata, index);
  console.log(postsForCreator);
  

  return (
    <div className="single-wrapper">
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} >
        {
          loading ?  <ReactPlayer url={postsForCreator[0].submission?.mediaUrl} controls={true} width='100%' height='100%' fullscreen={true} /> : <h1>Loading...</h1>
        }
      </div>
    </div>
  )
}

export default SinglePlayer