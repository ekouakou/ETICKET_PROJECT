import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = ({ heading, breadcrumbs }) => {
    return (
        <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
            <p className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                {heading}
            </p>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index} className="breadcrumb-item text-muted">
                        {breadcrumb.isBullet ? (
                            <span className="bullet bg-gray-500 w-5px h-2px" />
                        ) : breadcrumb.link ? (
                            <Link
                                to={breadcrumb.link}
                                className="text-muted text-hover-primary"
                            >
                                {breadcrumb.text}
                            </Link>
                        ) : (
                            breadcrumb.text
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PageTitle;
