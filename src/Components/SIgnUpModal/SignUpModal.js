import React from 'react';
import SignUp from './SignUp';

const SignUpModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative max-w-[800px]">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=''>
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;