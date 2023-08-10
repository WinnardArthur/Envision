import React from 'react'
import DashboardBox from './DashboardBox';
import { useGetProductsQuery } from '@/state/api';

const Row2 = () => {
  const { data } = useGetProductsQuery();

  console.log(data);
  return (
    <>
      <DashboardBox gridArea="d">Dashboard</DashboardBox>
      <DashboardBox gridArea="e">Dashboard</DashboardBox>
      <DashboardBox gridArea="f">Dashboard</DashboardBox>
    </>
  );
}

export default Row2