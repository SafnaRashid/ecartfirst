import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px' ,marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-between p-4'>
        <div style={{width:'400px'}} className='intro'>
          <h5 className='text-xl font-bold'><i className="fa-solid fa-truck-fast me-2"></i>E Cart</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors</p>
          <p>Code licenced Luminar,docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
        </div>
        <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Guides</h5>
          <a style={{textDecoration:'none', color:'white'}} target='blank'  href="https://react.dev/" >React</a>
          <a style={{textDecoration:'none', color:'white'}} target='blank'  href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} target='blank' href="https://www.npmjs.com/package/react-router-dom">React Router</a>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Contact Us</h5>
          <div className='flex'>
              <input type="text" placeholder='enter your email here..' className='rounded p-1' />
              <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='icons flex justify-between mt-3'>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://github.com/"><i class="fa-brands fa-github"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.call.com/"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <div>
      <p className='text-center mt-3'>Copyright &copy;  May 2024 Batch, E Cart. Build with React.</p>
    </div>
    </div>
  )
}

export default Footer