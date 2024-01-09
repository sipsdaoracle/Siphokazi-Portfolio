import React from 'react'
import "./Profile.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile-img-container'>
            <div className='profile-img'>
                {/* do not insert anything in here */}
            </div>
        </div>

        <div className='profile-info'>
            <div className='name-bio'>
            <h4>Siphokazi <span>Dolo</span></h4>
            <p className='title'>DevOps | SRE | Cloud Engineer</p>

            <div className='social-icons'>

             {/* GitHub Icon with Link */}
      <a href='https://github.com/sipsdaoracle' target='_blank' rel='noopener noreferrer'>
        <GitHubIcon style={{ fontSize: 'large' }} className='social-icon' />
      </a>

      {/* LinkedIn Icon with Link */}
      <a href='https://www.linkedin.com/in/siphokazidolo/' target='_blank' rel='noopener noreferrer'>
        <LinkedInIcon style={{ fontSize: 'large' }} className='social-icon' />
      </a>

      {/* Twitter Icon with Link */}
      <a href='https://twitter.com/dolo_sips' target='_blank' rel='noopener noreferrer'>
        <TwitterIcon style={{ fontSize: 'large' }} className='social-icon' />
      </a>

        </div>
            
            <hr/>

            <section>
            <div className='details email'>
                <p className='detail'>EMAIL</p>
                <a href='mailto:siphokazidolo@gmail.com' className='email-address'>Siphokazidolo@gmail.com</a>
                <EmailOutlinedIcon style={{ fontSize: 'medium' }} className='email-icon'/>
            </div>

            <div className='details place'>
                <p className='location-detail'>LOCATION</p>
                <p className='location'>South Africa</p>
            </div>

            <div className='details cv'>
                <p className='detail'>CV</p>
                <a href='#' className='cv-download'>Download</a>
                <FileDownloadOutlinedIcon style={{ fontSize: 'medium' }} className='download-icon'/>
            </div>
            </section>
            

        </div>
            
        </div>
    </div>
  )
}

export default Profile