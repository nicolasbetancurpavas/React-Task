import React from 'react'
import './progress.css'

export const ProgressBar = () => {
    return (
        <div className='container-progress'>
            <div className='border-progress'>
                <div className='percent'>
                    <svg>
                        <circle cx='70' cy={'70'} r='70'></circle>
                        <circle cx='70' cy={'70'} r='70'></circle>
                    </svg>
                    <div className='number'>
                        <h2>87 <span>%</span></h2>
                    </div>
                </div>
            </div>
            <h2>progress <span>promptly available</span></h2>
        </div>
    )
}
