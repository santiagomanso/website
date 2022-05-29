import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { AiOutlineAppstore } from 'react-icons/ai'
import { MdOutlineContactPage } from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <AiOutlineAppstore className='service__head-icon' />
            <h3>Web Applications Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backend - API Rest's MERN stack</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API consumption</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Global states</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Single Page Application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interactive / Intuitive user interfaces</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User authtentication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <MdOutlineContactPage className='service__head-icon' />
            <h3>Landing Pages</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Contact Forms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Validation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
