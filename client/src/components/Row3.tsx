import React from "react";
import DashboardBox from "./DashboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import BoxHeader from "./BoxHeader";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridCellParams } from "@mui/x-data-grid/models";

const Row3 = () => {
  const { data: transactionData } = useGetTransactionsQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: kpiData } = useGetKpisQuery();

  const { palette } = useTheme();

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt=".5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: `hidden`,
            },
          }}
        >
          <DataGrid
            rows={productData || []}
            columns={productColumns}
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">Dashboard</DashboardBox>
      <DashboardBox gridArea="i">Dashboard</DashboardBox>
      <DashboardBox gridArea="j">Dashboard</DashboardBox>
    </>
  );
};

export default Row3;
