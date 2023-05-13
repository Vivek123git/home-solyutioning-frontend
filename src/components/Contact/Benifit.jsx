import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckIcon from '@mui/icons-material/Check';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Container } from 'react-bootstrap';
import 'animate.css';



const BenefitsPage = () => {
  const benefits = [
    {
      icon: <  CurrencyRupeeIcon sx={{ fontSize: 40 }}/>,
      title: 'Pay after service',
      description: 'We offer the convenience of paying after the job is completed to ensure customer satisfaction.'
    },
    {
      icon: <  AccessAlarmIcon sx={{ fontSize: 40 }}/>,
      title: 'Before 60 min. solution',
      description: ' Our fast and efficient service guarantees a solution within 60 minutes.'
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40 }}/>,
      title: 'Guarranty of all problem',
      description: 'We stand behind our work and offer a satisfaction guarantee for all the services we provide.'
    },
    {
      icon: <CheckIcon sx={{ fontSize: 40 }}/>,
      title: 'Verified workers',
      description: ' Our team of workers are verified and undergo background checks to ensure safety and security.'
    },
    {
      icon: <SentimentNeutralIcon sx={{ fontSize: 40 }}/>,
      title: 'Experinced worker',
      description: 'Our team of experienced professionals are equipped with the skills and knowledge to get the job done right the first time.'
    },
    {
      icon: <ThumbUpIcon sx={{ fontSize: 40 }}/>,
      title: 'Easy to book',
      description: 'With our user-friendly online booking system, scheduling your home maintenance and repair services has never been easier.'
    }
  ];

  return (
    <div className="benefits-container" >
      <div className="container-fluid">
        <h3 className="text-center mb-5 text-light">Benefits</h3>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className='animate__animated animate__bounce animate__infinite	infinite' style={{textAlign:"left"}}>{benefit.icon}</div>
              <h4 style={{textAlign:"left",fontSize:"large"}}>{benefit.title}</h4>
              <p style={{ fontSize:"16px",fontWeight:"100",fontFamily:"roboto",textAlign:"left"}}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;