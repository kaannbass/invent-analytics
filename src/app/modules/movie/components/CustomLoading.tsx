import React, { useState } from 'react';

const CustomLoading = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className='card mb-5 mb-xl-10'>
            <div className='card-body pt-9 pb-0'>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                        <div className='flex-grow-1'>
                            <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
                                <div className='card-body p-9'>
                                    {loading && (
                                        <span className='indicator-progress' style={{ display: 'block' }}>
                                            Please wait...{' '}
                                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CustomLoading;
