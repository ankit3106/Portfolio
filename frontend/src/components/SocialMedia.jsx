import React from 'react'
import { images } from '../constants';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <img src={images.linkedin} alt="linkedin" />
            </div>
            <div>
                <img src={images.github} alt="github" />
            </div>
            <div>
                <img src={images.leetcode} alt="leetcode" />
            </div>
            <div>
                <img src={images.codechef} alt="codechef" />
            </div>
            <div>
                <img src={images.codeforces} alt="codeforces" />
            </div>
        </div>
    )
}

export default SocialMedia