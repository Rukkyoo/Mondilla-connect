import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[var(--background)] px-4 py-10 lg:py-16'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8 lg:mb-12'>
          <h3 className='text-2xl lg:text-3xl font-bold text-gray-900 mb-2'>Contact us</h3>
          <p className='text-gray-600 text-sm lg:text-base'>Have questions? We're here to help.</p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Contact Form */}
          <div className='order-2 lg:order-1'>
            <form className='bg-white p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100'>
              <div className='space-y-6'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2' htmlFor='name'>
                    Name *
                  </label>
                  <input 
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm lg:text-base' 
                    type='text' 
                    id='name'
                    placeholder='Enter your full name'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2' htmlFor='email'>
                    Email *
                  </label>
                  <input 
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm lg:text-base' 
                    type='email' 
                    id='email'
                    placeholder='Enter your email address'
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2' htmlFor='message'>
                    Message *
                  </label>
                  <textarea 
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-sm lg:text-base' 
                    id='message' 
                    rows='5'
                    placeholder='Tell us how we can help you...'
                  ></textarea>
                </div>
                
                <button 
                  className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base' 
                  type='submit'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className='order-1 lg:order-2'>
            <div className='bg-white rounded-xl shadow-lg border border-gray-100 p-6 lg:p-8 h-fit'>
              <h4 className='text-lg lg:text-xl font-bold text-gray-900 mb-6'>Get in touch</h4>
              
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className='font-semibold text-gray-900 text-sm lg:text-base'>Email</h5>
                    <p className='text-gray-600 text-sm lg:text-base'>support@mondilla.com</p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className='font-semibold text-gray-900 text-sm lg:text-base'>Phone</h5>
                    <p className='text-gray-600 text-sm lg:text-base'>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className='flex items-start space-x-4'>
                  <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className='font-semibold text-gray-900 text-sm lg:text-base'>Address</h5>
                    <p className='text-gray-600 text-sm lg:text-base'>123 Mondilla St, Suite 100</p>
                  </div>
                </div>
              </div>
              
              <div className='mt-8 pt-6 border-t border-gray-200'>
                <p className='text-xs lg:text-sm text-gray-500 text-center'>
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm