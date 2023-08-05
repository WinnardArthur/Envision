import DashboardBox from './DashboardBox';
import { useGetKpisQuery } from '@/state/api';

const Row1 = () => { 
    const { data } = useGetKpisQuery();

  return (
    <>
      <DashboardBox gridArea="a">Dashboard</DashboardBox>
      <DashboardBox gridArea="b">Dashboard</DashboardBox>
      <DashboardBox gridArea="c">Dashboard</DashboardBox>
    </>
  );
}

export default Row1