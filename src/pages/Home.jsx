import React, { useState } from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
import View from '../components/View'


const Home = () => {
  const [videoUploadResponse,setVideoUploadResponse] = useState("")
  const [removeVideoResponseFromCategory,setRemoveVideoResponseFromCategory] = useState("") 
  const [removeVideoResponseFromView,setRemoveVideoResponseFromView] = useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className='container mt-5 d-flex justify-content-between'>
        <Add setVideoUploadResponse={setVideoUploadResponse}/>
        <Link to={'/history'} style={{textDecoration:'none'}}>Watch History</Link>
      </div>
      <div className="container-fluid my-5 row">
        <div className="col-lg-6">
          <h3 className='fw-bold fs-2'>All Videos</h3>
          <View setRemoveVideoResponseFromView={setRemoveVideoResponseFromView} removeVideoResponseFromCategory={removeVideoResponseFromCategory} videoUploadResponse={videoUploadResponse}/>
        </div>
        <div className="col-lg-6">
          <Category removeVideoResponseFromView={removeVideoResponseFromView} setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory}/>
        </div>
      </div>
    </div>
  )
}

export default Home