import React from 'react'
import DashboardBox from './DashboardBox';

const Row1 = () => {
  return (
    <div>
      <DashboardBox gridArea="a">Dashboard</DashboardBox>
      <DashboardBox gridArea="b">Dashboard</DashboardBox>
      <DashboardBox gridArea="c">Dashboard</DashboardBox>
    </div>
  );
}

export default Row1