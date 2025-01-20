import React from 'react';
import { Link } from 'react-router-dom';

const ActionButton = ({ text, link, onClick, isModal, modalTarget, className = '' }) => {
    return (
        <div className="d-flex align-items-center gap-2 gap-lg-3">
            {isModal ? (
                <button
                    type="button"
                    className={`btn btn-sm fw-bold ${className}`}
                    data-bs-toggle="modal"
                    data-bs-target={modalTarget}
                    onClick={onClick}
                >
                    {text}
                </button>
            ) : (
                <Link
                    to={link}
                    className={`btn btn-sm fw-bold ${className}`}
                    onClick={onClick}
                >
                    {text}
                </Link>
            )}
        </div>
    );
};

export default ActionButton;
