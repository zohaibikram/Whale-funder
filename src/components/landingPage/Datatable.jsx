import React, { useState } from "react";
import { Grid2, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tabs, Tab, Typography } from "@mui/material";


const tableData = {
  Forex: [
    ["Trading Period", "unlimited", "unlimited", "unlimited", "unlimited", "unlimited"],
    ["Minimum trading days", "4 days", "4 days", "4 days", "4 days", "4 days"],
    ["Maximum Daily Loss", "$500", "$500", "$1,000", "$1,000", "$1,000"],
    ["Maximum Loss", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Profit Target", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Refundable Fee", "€250", "€250", "€250", "€250", "€250"],
  ],
  Indices: [
    ["Trading Period", "unlimited", "unlimited", "unlimited", "unlimited", "unlimited"],
    ["Minimum trading days", "4 days", "4 days", "4 days", "4 days", "4 days"],
    ["Maximum Daily Loss", "$500", "$500", "$1,000", "$1,000", "$1,000"],
    ["Maximum Loss", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Profit Target", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Refundable Fee", "€250", "€250", "€250", "€250", "€250"],
  ],
  Crypto: [
    ["Trading Period", "unlimited", "unlimited", "unlimited", "unlimited", "unlimited"],
    ["Minimum trading days", "4 days", "4 days", "4 days", "4 days", "4 days"],
    ["Maximum Daily Loss", "$500", "$500", "$1,000", "$1,000", "$1,000"],
    ["Maximum Loss", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Profit Target", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Refundable Fee", "€250", "€250", "€250", "€250", "€250"],
  ],
  Commodities: [
    ["Trading Period", "unlimited", "unlimited", "unlimited", "unlimited", "unlimited"],
    ["Minimum trading days", "4 days", "4 days", "4 days", "4 days", "4 days"],
    ["Maximum Daily Loss", "$500", "$500", "$1,000", "$1,000", "$1,000"],
    ["Maximum Loss", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Profit Target", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Refundable Fee", "€250", "€250", "€250", "€250", "€250"],
  ],
  Custom: [
    ["Trading Period", "unlimited", "unlimited", "unlimited", "unlimited", "unlimited"],
    ["Minimum trading days", "4 days", "4 days", "4 days", "4 days", "4 days"],
    ["Maximum Daily Loss", "$500", "$500", "$1,000", "$1,000", "$1,000"],
    ["Maximum Loss", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Profit Target", "$1,000", "$1,000", "$1,000", "$1,000", "$1,000"],
    ["Refundable Fee", "€250", "€250", "€250", "€250", "€250"],
  ],
};

const categories = Object.keys(tableData);

const Datatable = () => {
  const [selectedTab, setSelectedTab] = useState("Forex");

  return (
    <Box sx={{ p: 4 }} className="dataTable">
      {/* Tabs for selecting category */}
      <Grid2 container spacing={3} justifyContent="center" size={12}>
       <Grid2 item size={12}>
       <Tabs
        value={selectedTab}
        onChange={(e, newValue) => setSelectedTab(newValue)}
        textColor="inherit"
        variant="fullWidth"
        sx={{
          backgroundColor: "#000",
          borderRadius: "10px 10px 0 0",
          "& .Mui-selected": {
            backgroundColor: "#1E88E5",
            color: "#fff",
            borderRadius: "20px",
          },
        }}
      >
        {categories.map((category) => (
          <Tab key={category} label={category} value={category} sx={{ color: "#fff" }} />
        ))}
      </Tabs>
       </Grid2>
       <Grid2 item size={12}>
          {/* Table */}
      <TableContainer component={Paper} sx={{ backgroundColor: "#0E1B2E", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
        <Table>
          <TableBody>
            {tableData[selectedTab].map((row, rowIndex) => (
              <TableRow key={rowIndex} sx={{ "&:nth-of-type(even)": { backgroundColor: "#131727" } , "&:nth-of-type(odd)": { backgroundColor: "#142035" }, border:'none', }}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} sx={{ color: "#fff" , "&:nth-of-type(odd)": { backgroundColor: "#29353f" }, opacity:'0.7',border:'none'}}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       </Grid2>
      </Grid2>
    </Box>
  );
};

export default Datatable;
