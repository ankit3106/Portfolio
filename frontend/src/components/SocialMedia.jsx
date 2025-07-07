import React from 'react'
import { images } from '../constants';

const socialLinks = [
    { img: images.linkedin, alt: "linkedin", url: "https://www.linkedin.com/in/ankit-bhandari-in/" },
    { img: images.github, alt: "github", url: "https://github.com/ankit3106" },
    { img: images.leetcode, alt: "leetcode", url: "https://leetcode.com/u/Ank_it13" },
    { img: images.codechef, alt: "codechef", url: "https://www.codechef.com/users/acex_13" },
    { img: images.codeforces, alt: "codeforces", url: "https://codeforces.com/profile/luffytarow13" },
];

const SocialMedia = () => {
    return (
        <div className='app__social'>
            {socialLinks.map(({ img, alt, url }) => (
                <div key={alt}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={alt} />
                    </a>
                </div>
            ))}
        </div>
    )
}

export default SocialMedia