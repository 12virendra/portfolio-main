import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' h-full bg-[#0a192f] flex justify-center items-center p-4'>
          <form method="POST" action="https://getform.io/f/azyllpeb" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p> 
                  <p className=' text-gray-300 py-3'>Submit the form below or shoot me an email - </p>
                  <p className='max-sm:text-[20px] text-gray-300 py-3'><a href="mailto:virendrakaira60@gmail.com">virendrakaira60@gmail.com</a></p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='Name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className=' bg-[#ccd6f6] p-2 h-[150px]' name="message" rows="10" placeholder='Message'></textarea>
                  <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-xl'>SUBMIT</button>

          </form>
         

    </div>
  )
}

export default Contact
