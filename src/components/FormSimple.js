import React from 'react'

import './Form.css'

export default ({
  name = 'Simple Form',
  subject = 'Form submitted', // optional subject of the notification email
  action = '#'
}) => (
  <form
    className='Form'
    name={name}
    action={action}
    method="POST"
    data-netlify='true'
  >
    <label className='Form--Label'>
    <div style={{color: "var(--primary)", fontWeight: "700"}}>Name</div>
      <input
        className='Form--Input'
        type='text'
        placeholder='Name'
        name='name'
        required
      />
    </label>
    <label className='Form--Label'>
    <div style={{color: "var(--primary)", fontWeight: "700"}}>Email</div>
      <input
        className='Form--Input'
        type='email'
        placeholder='Email'
        name='email'
        required
      />
    </label>
    <label className='Form--Label has-arrow'>
      <select
        className='Form--Input Form--Select'
        name='type'
        defaultValue='Type of Enquiry'
        required
      >
        <option disabled hidden>
          Type of Enquiry
        </option>
        <option>Need to know more</option>
        <option>Found a bug</option>
        <option>Want to say hello</option>
      </select>
    </label>
    <label className='Form--Label'>
      <div style={{color: "var(--primary)", fontWeight: "700"}}>Message</div>
      <textarea
        className='Form--Input Form--Textarea'
        placeholder='Message'
        name='message'
        rows='10'
        required
      />
    </label>
    <input type='text' name='_gotcha' style={{ display: 'none' }} />
    {!!subject && <input type='hidden' name='subject' value={subject} />}
    <input type='hidden' name='form-name' value={name} />
    <input
      className='Button Form--SubmitButton'
      type='submit'
      value='Enquire'
    />
  </form>
)
