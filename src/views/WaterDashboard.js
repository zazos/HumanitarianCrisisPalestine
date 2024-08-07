import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';
import SalinityChart from '../components/SalinityChart';
import WaterAvailabilityGazaChart from '../components/WaterAvailabilityGazaChart';
import WaterTankChart from '../components/WaterTankChart';
import WaterAvailabilityWorldChart from '../components/WaterAvailabilityWorldChart';
import { Helmet } from 'react-helmet';
import ToiletBarChartD3 from '../components/ToiletBarChartD3';
import BeforeWarChart from '../components/BeforeWarChart';

function WaterDashboard(props) {
  const [selectedMonth, setSelectedMonth] = useState('Sep-23');

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  return (
    <>
      <Helmet>
        <title>Water Problems in Palestine</title>
      </Helmet>
      <div className="content">
        {/* Title Row */}
        <Row>
          <Col xs="12">
            <Card className="card-chart" style={{ backgroundColor: '#27293D', color: 'cornflowerblue' }}>
              <CardBody style={{ textAlign: 'center', marginBottom: '5px'}}>
                <h2 style={{ fontSize: '1.5rem', color: 'cornflowerblue', fontWeight: 'bold', marginBottom: '10px' }}>
                  <br></br>Understanding the Severe Water Crisis Faced by Palestinians: A Call to Action!
                </h2>
                <h3 style={{ fontSize: '1.3rem', color: 'cornflowerblue' }}>
                  What If You Were in Their Position?
                </h3>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Row 1: Salinity Chart (70%) and Text Card (30%) */}
        <Row>
          <Col xs="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h2">What If There Was No Fresh Water Available and You Only Had Sea Water to Drink?</CardTitle>
                <h5 className="card-category">
                  sources: <a href="https://docs.google.com/spreadsheets/d/1UZOoiCXtN9lRFkOcfhKid82Oa5oMxxJD/edit?gid=288547202#gid=288547202">ReliefWeb, Amnest, Who, Ochaopt</a>
                </h5>
              </CardHeader>
              <CardBody>
                <SalinityChart />
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="card-chart" style={{ backgroundColor: '#27293D', color: 'cornflowerblue', height: '95%' }}>
              <CardBody style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '1.2rem', color: 'cornflowerblue', textAlign: 'left', marginBottom: '1rem' }}>
                  Health Risks Due to Increased Water Salinity in Gaza
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'white' }}>
                 The scarcity of safe water in Palestine has led Palestinians to consume water from polluted agricultural wells, which are nearly as salty as seawater.
                  This water significantly exceeds the safe salinity limits set by the World Health Organization (WHO), posing severe health risks, especially for vulnerable groups such as infants, pregnant women, and those with kidney disease.
                  Consuming this polluted water also raises the likelihood of disease outbreaks, including diarrhea and cholera. Furthermore, the lack of electricity and fuel necessary to operate water and sanitation facilities exacerbates the situation, likely leading to an increase in disease spread within Palestine.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Row 2: Water Availability in Different Regions */}
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h2">Have You Ever Thought How Much More Water You Are Consuming in Comparison to Palestinians?</CardTitle>
                Sources: <a href="https://www.worldometers.info/water/#google_vignette">Worldometers</a>
              </CardHeader>
              <CardBody>
                <WaterAvailabilityWorldChart />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Row 3: Water Availability in Gaza (60%) and Text Card (40%) */}
        <Row>
          <Col xs="7">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h2">What If You Only Had 3L per Day to Cover Your Needs?</CardTitle>
                Sources: <a href="https://docs.google.com/spreadsheets/d/1UZOoiCXtN9lRFkOcfhKid82Oa5oMxxJD/edit?gid=288547202#gid=288547202">ReleifWeb, Who, Ochaopt</a>
              </CardHeader>
              <CardBody>
                <WaterAvailabilityGazaChart />
              </CardBody>
            </Card>
          </Col>
          <Col xs="5">
            <Card className="card-chart" style={{ backgroundColor: '#27293D', color: 'cornflowerblue', height: '95%' }}>
              <CardBody style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '1.2rem', color: 'cornflowerblue', textAlign: 'left', marginBottom: '1rem', fontWeight: 'bold' }}>
                  Critical Water Shortage in Gaza: A Humanitarian Crisis
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'white' }}>
                  The water consumption in Palestine is significantly below the average consumption of any continent and even falls short of the World Health Organization's safe limit.
                  The situation is even worse for people in Gaza with only 3L per day to cover all their needs.
                  Prior to the escalation of violence in October 2023, Palestinians in Gaza already faced severe challenges in accessing clean water. Gaza’s freshwater resources were contaminated due to the Israeli blockade and repeated bombardments, forcing residents to spend a third or more of their income on water from unregulated sources, hoping it was safe.
                  This dire situation has now worsened exponentially, with people in Gaza losing almost 97% of their average daily water consumption for essential needs such as hydration, hygiene, and cooking.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Row 4: Water Tank Chart (35%), Toilet Chart (65%) */}
        <Row>
          <Col xs="12" md="6">
            <Card className="card-chart" style={{ height: '95%' }}>
              <CardHeader>
                <CardTitle tag="h2">Water Availability in Gaza</CardTitle>
                Sources: <a href="https://www.ochaopt.org/content/hostilities-gaza-strip-and-israel-flash-update-12">Ochaopt</a>
              </CardHeader>
              <CardBody>
                <WaterTankChart />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card className="card-chart" style={{ height: '95%' }}>
              <CardHeader>
                <CardTitle tag="h2">Do You Know about the Unsanitary Conditions in Gaza and Rafah?</CardTitle>
                Sources: <a href="https://reliefweb.int/report/occupied-palestinian-territory/hostilities-gaza-strip-and-israel-flash-update-150-enarhe">ReliefWeb, Who</a>
              </CardHeader>
              <CardBody>
                <ToiletBarChartD3 />
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Row for Text Card */}
        <Row>
          <Col xs="12">
            <Card className="card-chart" style={{ backgroundColor: '#27293D', color: 'cornflowerblue' }}>
              <CardBody style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '1.2rem', color: 'cornflowerblue', textAlign: 'left', marginBottom: '1rem', fontWeight: 'bold' }}>
                  Severe Sanitation Crisis in Rafah and Gaza: One Toilet for Every 850 People
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'white', textAlign: 'left' }}>
                  In Rafah and Gaza, the current situation regarding toilet facilities poses a severe risk of infectious disease due to the alarming ratio of one toilet per 850 people. This vastly exceeds the global humanitarian standard, which recommends a maximum of 20 individuals per toilet during crises to mitigate health risks effectively.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h2">Are These Water Problems New?The Answer is NO!</CardTitle>
                Sources: <a href="https://visualizingpalestine.org/visual/not-enough-water-in-west-bank/">VisualizingPalestine</a>
              </CardHeader>
              <CardBody>
              <BeforeWarChart/>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card className="card-chart" style={{ backgroundColor: '#27293D', color: 'cornflowerblue' }}>
              <CardBody style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '1.2rem', color: 'cornflowerblue', textAlign: 'left', marginBottom: '1rem', fontWeight: 'bold' }}>
                  The Permanance of the Water Problems in Palestine
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'white', textAlign: 'left' }}>
                Ramallah, a Palestinian city in the West Bank, receives more rainfall annually than London which is one of the world's most renowned rainy cities. Despite this, the average West Bank Palestinian has struggled to access a sufficient water supply for many years prior to the onset of the conflict in 2023. This disparity is primarily due to Israel's allocation of 80% of the water from the West Bank aquifer each year, leaving only 20% for Palestinian use.

Adding to the challenges, Israeli authorities have not approved any new Palestinian wells since 1967 in the most productive aquifer. Moreover, the situation has been exacerbated by the demolition of essential water-related infrastructure by the Israeli military. In 2011 alone, 89 water structures, including 21 wells and 34 rainwater cisterns vital for agriculture and herding, were demolished. From 2012 to 2020, Israeli authorities demolished an additional 506 Palestinian water, sanitation, and hygiene (WASH) structures in the occupied West Bank, as documented by OCHA data.

The conditions were dire even before the outbreak of conflict, but we did nothing to improve the situation. Moving forward, urgent action is required to rectify these longstanding injustices and ensure equitable access to water resources for all inhabitants of the region. It is time we take action! </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
       
      </div>
    </>
  );
}

export default WaterDashboard;
