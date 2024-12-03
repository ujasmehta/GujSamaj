import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  Button,
  MenuItem,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DonationsList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/admin/donations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setDonations(data.data);
      }
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/admin/export', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        // Convert to CSV and download
        const csvContent = convertToCSV(data.data);
        downloadCSV(csvContent, 'donations.csv');
      }
    } catch (error) {
      console.error('Error exporting donations:', error);
    }
  };

  const convertToCSV = (data) => {
    const headers = ['Name', 'Email', 'Amount', 'Category', 'Date', 'Status'];
    const rows = data.map(item => [
      item.name,
      item.email,
      item.amount,
      item.causeCategory,
      new Date(item.timestamp).toLocaleDateString(),
      item.status
    ]);
    return [headers, ...rows].map(row => row.join(',')).join('\\n');
  };

  const downloadCSV = (content, fileName) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 1,
      renderCell: (params) => `₹${params.value.toLocaleString()}`,
    },
    { field: 'causeCategory', headerName: 'Category', flex: 1 },
    {
      field: 'timestamp',
      headerName: 'Date',
      flex: 1,
      renderCell: (params) => new Date(params.value).toLocaleDateString(),
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            backgroundColor: 
              params.value === 'completed' ? 'success.light' :
              params.value === 'pending' ? 'warning.light' : 'error.light',
            padding: '4px 8px',
            borderRadius: '4px',
          }}
        >
          {params.value}
        </Box>
      ),
    },
  ];

  const filteredDonations = donations.filter(donation => {
    const matchesSearch = 
      donation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || donation.causeCategory === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Donations</Typography>
        <Button
          variant="contained"
          startIcon={<FileDownloadIcon />}
          onClick={handleExport}
        >
          Export
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            select
            label="Category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            size="small"
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Building Renovation">Building Renovation</MenuItem>
          </TextField>
        </Box>

        <DataGrid
          rows={filteredDonations}
          columns={columns}
          loading={loading}
          getRowId={(row) => row._id}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[10, 25, 50]}
          disableRowSelectionOnClick
          autoHeight
        />
      </Paper>
    </Container>
  );
};

export default DonationsList;