import { useState } from 'react';
import './Contact.css';

export default function Contact(){

    const initialFormState = {
        email: '',
        name: '',
        subject: '',
        message: ''
    }

    const [formData, setFormData] = useState(initialFormState);

    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });
    };

    const handleSubmit = (e) => {

            e.preventDefault();
            console.log('Form data:', formData);
            setFormData(initialFormState);
    
            
    }

    return(
        <>
        <h1>Contact</h1>
        <div className='contact-page'>
        <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="email">Email Address:</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.arisa} onChange={handleChange} required/>
            </div>
            <div className='form-group'>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required/>
                
            </div>
            <div className='form-group'>
                <label htmlFor="message">Message:</label>
                <textarea type="text" id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
            
                
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
        </div>
        </>
    )
}