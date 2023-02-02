import React from 'react';
import Login from './Login';

const LoginModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative max-w-[800px]">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=''>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;