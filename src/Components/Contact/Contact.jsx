import React from 'react'
import './contact.css'
import { FaTelegramPlane } from 'react-icons/fa'

const Contact = () => {
    return (
        <div id='contact' className='contact' data-aos="fade-in"  data-aos-delay="50" data-aos-duration="1000">
            <form action="https://formsubmit.co/288ed2cc2edb896d711cec20bbb08ae0" method="POST">
                <input type="hidden" name="_subject" value="Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <h1>Send me a message</h1>
                <div className="inputbox">
                    <input required name='First_name' type="text" />
                    <label>First Name</label>
                </div>
                <div className="inputbox">
                    <input required name='Last_name' type="text" />
                    <label>Last Name</label>
                </div>
                <div className="inputbox">
                    <input required name='email' type="email" />
                    <label>Email</label>
                </div>
                <div className="inputbox message">
                    <textarea required name="message"></textarea>
                    <label>Message</label>
                </div>
                <div className="submit">
                    <button type='submit'><FaTelegramPlane /></button>
                </div>
            </form>

        </div>
    )
}

export default Contact