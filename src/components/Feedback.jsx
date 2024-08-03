import React, { useState } from 'react';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form
        if (name && email && message) {
            // Reset form
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className='card' style={{ marginTop: "5rem" }}>
            <div className='card-body'>
                <h4>Feedback Form</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputName" className='text-white'>Name</label>
                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputEmail4" className='text-white'>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4" className='text-white'>Message</label>
                            <textarea value={message} placeholder='message' onChange={(e) => setMessage(e.target.value)} required className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default Feedback;
