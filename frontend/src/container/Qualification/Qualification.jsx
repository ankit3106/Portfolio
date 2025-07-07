import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Qualification.scss';

const Qualification = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';

    client.fetch(query).then((data) => {
      setEducation(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Qualification</h2>
      <h3 className='college-text'>My Educational Journey</h3>
      <div className="app__qualification qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__active" data-content id="education">
            {education.map((item, idx) => (
              <div className="qualification__data" key={item._id || idx}>
                {/* Left side for odd, right side for even */}
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="qualification__title">{item.grade}</h3>
                      <span className="qualification__subtitle">{item.name}</span>
                      <div className="qualification__calender">
                        <i className="uil uil-percentage"></i> {item.score}
                      </div>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> {item.year}
                      </div>
                    </div>
                    <div>
                      <span className="qualification__rounder"></span>
                      {idx !== education.length - 1 && (
                        <span className="qualification__line"></span>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="shift"></div>
                    <div>
                      <span className="qualification__rounder"></span>
                      {idx !== education.length - 1 && (
                        <span className="qualification__line"></span>
                      )}
                    </div>
                    <div>
                      <h3 className="qualification__title">{item.grade}</h3>
                      <span className="qualification__subtitle">{item.name}</span>
                      <div className="qualification__calender">
                        <i className="uil uil-percentage"></i> {item.score}
                      </div>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> {item.year}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Qualification, 'app__qualification'),
  'qualification',
  'app__whitebg'
);