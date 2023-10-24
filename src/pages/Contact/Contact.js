import React, { useRef, useState } from 'react';
import './Contact.css'

import emailjs from '@emailjs/browser';

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { AiOutlineMail } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { FiLinkedin } from "react-icons/fi"
import { FiInstagram } from "react-icons/fi"




const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);



  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",


    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Must be 15 Charecter or Less").required("Required"),
      email: Yup.string().email("Invalid Email Address").required("Required"),
      comment: Yup.string().max(100, "Must be 100 Charecter or Less").required("Required"),

    })


  })



  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the form is valid and fields are touched and not empty
    if (formik.isValid && formik.dirty && formik.values.name && formik.values.email && formik.values.comment) {
      emailjs
        .sendForm('service_mnfe0g9', 'template_5mdi5xf', form.current, 'oICT_JpN-7UIzpFkL')
        .then(() => {
          setIsSuccess(true);
          setMessage('Message Succesfully Sent!');
        })
        .catch((error) => {
          setIsSuccess(false);
          setMessage('Error sending email. Please try again later.');
          console.error('Error sending email:', error);
        });
    } else {
      setIsSuccess(false);
      setMessage('Form is not valid or some fields are empty.');
    }
  };





  return (
    <div className='contact-part' id='Contact'>
      <div className='contact-header-text'>
        <h2>Contact Me</h2>
        <span>Get in Touch <BiMessageDetail></BiMessageDetail></span>
      </div>



      <div className='contact-content-container'>
        <div className='contact-social-media-part'>
          <h4>Talk to me</h4>
          <div>
            <h4>Email</h4>
            <span>Davo00771330@gmail.com</span>
            <a href='mailto:Davo00771330@gmail.com' className='project-button'>
              Write me <BsArrowRightShort className='project-button-icon'></BsArrowRightShort>
            </a>
          </div>

          <div>
            <label> <FiLinkedin></FiLinkedin> </label>
            <h4>Linkedin</h4>
            <span>David Harutyunyan</span>
            <a href='https://www.linkedin.com/in/david-harutyunyan-2ab756238/' target='_blank' className='project-button'> Write me <BsArrowRightShort className='project-button-icon'></BsArrowRightShort></a>
          </div>
          <div>
            <label> <FiInstagram></FiInstagram> </label>
            <h4>Instagram</h4>
            <span>David Harutyunyan</span>
            <a href='https://www.instagram.com/davo1301/' target='_blank' className='project-button'> Write me <BsArrowRightShort className='project-button-icon'></BsArrowRightShort></a>
          </div>

        </div>



        <div className='contact-form-part'>
          <form ref={form} onSubmit={sendEmail}>
            <h4>Get In Touch</h4>
            {message && (
              <p className={`message ${isSuccess ? 'success' : 'error'}`}>
                {message}
              </p>
            )}
            <div className='input-container'>
              <input
                type='text'
                placeholder='Name'
                id='name'
                className='name'
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              ></input>
              {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
            </div>


            <div className='input-container'>
              <input
                type='email'
                className='email'
                placeholder='Email'
                id='email'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              ></input>
              <br></br>
              {formik.touched.email && formik.errors.email ? <p >{formik.errors.email}</p> : null}
            </div>


            <div className='input-container'>
              <textarea
                placeholder='Comment'
                id='comment'
                name='comment'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
                className='comment'>
              </textarea>
              {formik.touched.comment && formik.errors.comment ? <p className='boo'>{formik.errors.comment}</p> : null}
            </div>


            <button className='form-submit-button' type='submit'>Send
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#white"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#white"
                ></path>
              </svg>
            </button>
          </form>


        </div>


      </div>


    </div>

  )
}

export default Contact