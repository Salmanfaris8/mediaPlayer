import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

const History = () => {
  const [allVideoHistory,setAllVideoHistory] = useState([])

  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async ()=>{
    try{
      const response = await getHistoryAPI()
      setAllVideoHistory(response.data)
    }
    catch(err){
      console.log(err);      
    }
  }
  // console.log(allVideoHistory);

  const deleteHistory = async (id)=>{
    await removeHistoryAPI(id)
    getAllHistory()
  }

  return (
    <div>
        <div className="container" style={{paddingTop:'100px'}}>
          <div className="d-flex justify-content-between mb-5">
            <h3 className='fw-bold fs-2'>Watch History</h3>
            <Link to={'/home'} style={{textDecoration:'none'}}>Back To Home</Link>
          </div>
          <table className='table my-5 shadow'>
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>Link</th>
                <th>Time Stamp</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {
                allVideoHistory?.length>0?
                allVideoHistory?.map((item,index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{item?.caption}</td>
                    <td><a style={{textDecoration:"none"}} href={item?.link}>{item?.link}</a></td>
                    <td>{item?.timeStamp}</td>
                    <td><button onClick={()=>deleteHistory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                  </tr>
                ))
                :
                <div className='text-danger fw-bolder'>No Videos are Watched Yet!!!</div>
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default History