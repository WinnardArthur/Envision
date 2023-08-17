import { useMemo } from "react";
import DashboardBox from "./DashboardBox";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import BoxHeader from "./BoxHeader";
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import Loader from "./Loader";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row2 = () => {
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { palette } = useTheme();

  const pieColors = [palette.primary[800], palette.primary[300]];

  // Operational Expenses Data
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.charAt(0).toUpperCase().concat(month.substring(1, 3)),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  // Product Expense Data
  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText="+2.4%"
        />
        {operationalData ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={operationalExpenses}
              margin={{
                top: 20,
                right: 0,
                left: -10,
                bottom: 55,
              }}
            >
              <CartesianGrid vertical={false} stroke={palette.grey[800]} />

              <XAxis
                dataKey="name"
                tickLine={false}
                style={{ fontSize: "10px" }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tickLine={false}
                axisLine={false}
                style={{ fontSize: "10px" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                style={{ fontSize: "10px" }}
              />
              <Tooltip />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Non Operational Expenses"
                stroke={palette.tertiary[500]}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Operational Expenses"
                stroke={palette.primary.main}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <Loader size={70} />
        )}
      </DashboardBox>

      <DashboardBox gridArea="e">
        <BoxHeader title="Campaigns & Targets" sideText="+7%" />
        <FlexBetween mt=".25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{ top: 0, right: -10, left: 10, bottom: 0 }}
          >
            <Pie
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m=".3rem 0" variant="h3" color={palette.primary[300]}>
              128
            </Typography>
            <Typography variant="h6">
              Financial aim of the campaign desired
            </Typography>
          </Box>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 18%</Typography>
            <Typography variant="h5" mt=".4rem">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 33% from last month
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>

      <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices vs Expenses" sideText="+15%" />
        {productData ? 
        <ResponsiveContainer width="100%" height={"100%"}>
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -25,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
          </ResponsiveContainer>
          :
          <Loader size={70} />
        }
      </DashboardBox>
    </>
  );
};

export default Row2;
