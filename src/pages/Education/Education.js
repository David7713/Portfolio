import React from 'react'
import './Education.css'

import { BsCalendarWeek } from 'react-icons/bs'
import { IoSchoolOutline } from 'react-icons/io5'

const Education = () => {
    return (
        <div className='education-part' id='Education'>

            <div className='education-header-text'>
                <h2>Education</h2>
                <span>My Personal Journey <IoSchoolOutline></IoSchoolOutline></span>
            </div>

            <div className='education-content'>
                <div className='education-data'>
                    <div>
                        <h3 className='education-title'>BasicSchoolN116</h3>
                        <span className='education-subtitle'>
                            Yerevan
                        </span>
                        <div className='education-calendar'><BsCalendarWeek></BsCalendarWeek> 2007-2016</div></div>

                    <div>
                        <span className="education-rounder"></span>
                        <span className='education-line'></span>
                    </div>
                </div>


                <div className='education-data'>
                    <div></div>
                    <div>
                        <span className="education-rounder"></span>
                        <span className='education-line'></span>
                    </div>
                    <div>
                        <h3 className='education-title'>Finance</h3>
                        <span className='education-subtitle'>
                            ANAU Collage-Yerevan
                        </span>
                        <div className='education-calendar'><BsCalendarWeek></BsCalendarWeek> 2016-2019</div></div>
                </div>


                <div className='education-data'>
                    <div>
                        <h3 className='education-title'>Information Technologies</h3>
                        <span className='education-subtitle'>
                            NPUA-Yerevan
                        </span>
                        <div className='education-calendar'><BsCalendarWeek></BsCalendarWeek>  2019-2026</div></div>

                    <div>
                        <span className="education-rounder"></span>
                        <span className='education-line'></span>
                    </div>
                </div>



                <div className='education-data'>
                    <div></div>
                    <div>
                        <span className="education-rounder"></span>
                        <span className='education-line'></span>
                    </div>
                    <div>
                        <h3 className='education-title'>Web Development</h3>
                        <span className='education-subtitle'>
                            SmartCode
                        </span>
                        <div className='education-calendar'><BsCalendarWeek></BsCalendarWeek> 2022 Feb-Sep</div></div>
                </div>



                <div className='education-data'>
                    <div>
                        <h3 className='education-title'>English Cources</h3>
                        <span className='education-subtitle'>
                            Education Centre
                        </span>
                        <div className='education-calendar'><BsCalendarWeek></BsCalendarWeek>  2022 Sep-Dec</div></div>
                    <div>
                        <span className="education-rounder"></span>
                        <span className='education-line'></span>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Education