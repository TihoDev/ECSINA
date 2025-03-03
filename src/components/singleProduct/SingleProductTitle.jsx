import React from 'react'
// import HelpToDownloadCard from '../HelpToDownloadCard'
import DownloadGuideButton from '../UI/DownloadGuideButton'

const SingleProductTitle = ({title}) => {
  return (
    <div className='container flex items-center justify-between py-18'>
        <h1 className='font-extrabold text-2xl'>
            {title}
        </h1>

        <DownloadGuideButton topSpace="top-[335px]">راهنمای دانلود قالب ها</DownloadGuideButton>
        {/* <HelpToDownloadCard /> */}
    </div>
  )
}

export default SingleProductTitle