import React from 'react'
import './sectionTitle.style.css';

export const SectionTitle = ({title}) => {
    return (
        <div class="section-title fs-3 fw-bold text-center">
            {title}
        </div>
    )
}
