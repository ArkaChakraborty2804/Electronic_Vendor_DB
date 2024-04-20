import React from 'react';
import Navbar from './Navbar';
import NitImage from '../assets/nitjsr.png';
import Animation from './Animation';
import './Animation.css'; // Import your CSS file for animations

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.textContainer}>
          <div>
            <h1 style={styles.heading}>DBMS Project</h1>
            {/* <h3 style={styles.subHeading}>Electronic Vendor Database</h3> */}
            <h3 style={styles.subHeading} className="animate-text">Electronic Vendor Database</h3>
            <Animation/>
          </div>
        </div>
        <div>
          <img src={NitImage} alt='NITJSR Logo' style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '50px',
  },
  textContainer: {
    textAlign: 'left',
    marginRight: '20px', // Adjust as needed
    marginTop: '100px'
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginLeft: '200px'
  },
  subHeading: {
    fontSize: '24px',
    color: '#666',
    marginLeft: '200px',
    marginTop: '40px'
  },
  image: {
    height: '350px',
    width: '350px',
    marginRight: '200px',
    marginTop: '100px'
  },
};

export default Home;
