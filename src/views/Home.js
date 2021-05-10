import React from 'react';
import { Link } from 'react-router-dom';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroSplit from '../components/sections/HeroSplit';
import GenericSection from '../components/sections/GenericSection';
import FeaturesTiles from '../components/sections/FeaturesTiles';

class Home extends React.Component {

  state = {
    videoModalActive: false
  }
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }

  render() {

    const genericSection01Header = {
      title: 'Are you ready to save on trades?',
    }

    return (
      <React.Fragment>
        <HeroSplit className="illustration-section-01" />
        <FeaturesTiles topDivider className="center-content" />
        <GenericSection topDivider className="center-content">
          <SectionHeader data={genericSection01Header} className="reveal-from-bottom" />
          <div className="reveal-from-bottom">
            <a href="https://app.orders.finance" className="button button-primary button-wide-mobile button-sm">
              Open your first order
            </a>
          </div>
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Home;