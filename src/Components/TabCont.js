import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LineChart from './LineChart';
import Tabl from './Tabl';
import './person.css'
function TabCont() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="LineChart">
      <div style={{width:"600px",height:"300px",padding:'20px'}}>
      <LineChart/>
       </div>
      
      </Tab>
      <Tab eventKey="profile" title="Table">
        <Tabl/>
      </Tab>
      <Tab eventKey="personalInfo" title="Info">
        <>
        <div class="personal-data">
        <h2>Personal Information</h2>
        <p class="data-item"><strong>Name:</strong> Akhil Gaddam</p>
        <p class="data-item"><strong>Email:</strong> akhilgadddam00@gmail.com</p>
        <p class="data-item"><strong>phone No:</strong> 9390667322</p>
    </div>

        </>
      </Tab>
    </Tabs>
  );
}

export default TabCont;