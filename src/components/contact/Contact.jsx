import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mansi.manito@gmail.com</h5>
            <a href='mailto:mansi.manito@gmail.com' rel='norefer'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+491744538564</h5>
            <a
              href='https://api.whatsapp.com/send?phone=491744538564'
              rel='noreferrer'
              target='_blank'
            >
              Whatsapp me
            </a>
          </article>
        </div>

        <form action=''>
          <input type='text' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
