import React from 'react'

import aboutUsStyles from './AboutUs.module.scss'

const AboutUs = (props) => {
    return (
        <section
            dangerouslySetInnerHTML={{__html: props.html}}
            id={props.title}
            className={aboutUsStyles.aboutUs}
        />
    )
}

export default AboutUs