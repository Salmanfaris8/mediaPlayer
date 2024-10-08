import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/player.jpeg'
import { Card } from 'react-bootstrap'
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'

const Landing = () => {
  return (
    <div style={{paddingTop:'80px'}} className='container'>
      {/* Landing Head */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3 className='fw-bold'>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nulla et eius saepe deleniti voluptatum aliquid ad voluptas. Similique facilis magni praesentium alias odit, nisi reiciendis dignissimos distinctio repellendus quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia dolorem distinctio tempore amet maxime dolore in officia veritatis fugiat, officiis ipsa vitae laudantium veniam? Repudiandae esse quia porro incidunt.</p>
          <Link to={'/home'} className='btn btn-dark'>Get STarted</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5 mt-5' width={'600px'} src="https://i.gifer.com/PurE.gif" alt="" />
        </div>
      </div>
      {/* Features */}
      <div className="my-5">
        <h3 className="text-center fw-bold">Features</h3>
        <div className="row mt-5 ms-5">
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={image1} />
              <Card.Body>
                <Card.Title className='fw-bold'>Managing Videos</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={image2} />
              <Card.Body>
                <Card.Title className='fw-bold'>Categories Videos</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={image3} />
              <Card.Body>
                <Card.Title className='fw-bold'>Managing History</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>
      {/* Youtube */}
      <div className="my-5 row align-items-center border p-5">
        <div className="col-lg-5">
          <h1>Simple, Fast and Powerful</h1>
          <p style={{textAlign:'justify'}}>
            <span className="fs-5">Play Everthing : </span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse quam, ducimus unde debitis deleniti dolores. Unde maxime illo inventore, optio illum commodi aliquid id, magni itaque cum, placeat ad.
          </p>
          <p style={{textAlign:'justify'}}>
            <span className="fs-5">Catogories Videos : </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, dicta ducimus! Nam repellendus eaque quisquam accusamus ipsam eligendi ab vel nulla adipisci quidem? Aperiam reiciendis necessitatibus a facere dolores voluptas.
          </p>
          <p style={{textAlign:'justify'}}>
            <span className="fs-5">Managing History : </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, dicta ducimus! Nam repellendus eaque quisquam accusamus ipsam eligendi ab vel nulla adipisci quidem? Aperiam reiciendis necessitatibus a facere dolores voluptas.
          </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6"><iframe className='rounded' width="497" height="360" src="https://www.youtube.com/embed/B2UBMTA57JI" title="Kiliye (Malayalam) |ARM | Tovino Thomas |Krithi Shetty |Jithin Laal |Dhibu Ninan Thomas|Magic Frames" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      </div>
    </div>
  )
}

export default Landing