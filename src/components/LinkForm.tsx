import React, { useState } from 'react';
import '../pages/index.css';

export default function LinkForm({ refreshLinks }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const resetForm = () => {
        setName('');
        setDescription('');
        setUrl('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { name, url, description };
        try {
            const res = await fetch('/.netlify/functions/createLink', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            resetForm();
            refreshLinks();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="card">
            <div className="card-header" style={{textAlign:'center',color: "#eeeee4"}}>ADD YOUR BOOKMARKS</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" style={{textAlign:'center'}}>Site</label>
                        <input
                            required
                            type="text"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url" style={{textAlign:'center'}}>URL</label>
                        <input
                            required
                            type="text"
                            name="url"
                            className="form-control"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                  
                    <button type="submit" className="btn button1 btn-primary" style={{width:'100%'}}>
                        ADD
                    </button>
                </form>
            </div>
        </div>
    );
}