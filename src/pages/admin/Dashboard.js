import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/admin/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setStats(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Total Donations Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Donations
              </Typography>
              <Typography variant="h4">
                ₹{stats?.totalDonations?.total.toLocaleString() || 0}
              </Typography>
              <Typography color="textSecondary">
                {stats?.totalDonations?.count || 0} donations
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Donations Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Monthly Donations
              </Typography>
              <Typography variant="h4">
                ₹{stats?.monthlyDonations?.total.toLocaleString() || 0}
              </Typography>
              <Typography color="textSecondary">
                {stats?.monthlyDonations?.count || 0} donations this month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Quick Actions
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{ mb: 1 }}
                onClick={() => navigate('/admin/donations')}
              >
                View All Donations
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate('/admin/analytics')}
              >
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Donations by Category Chart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Donations by Category
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={stats?.donationsByCategory || []}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="_id" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Donations */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Donations
            </Typography>
            {stats?.recentDonations?.map((donation) => (
              <Box key={donation._id} sx={{ mb: 2, p: 2, bgcolor: 'background.paper' }}>
                <Typography variant="subtitle1">
                  {donation.name} - ₹{donation.amount}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {new Date(donation.timestamp).toLocaleDateString()} - {donation.causeCategory}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;