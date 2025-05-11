import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, ChevronDown, Filter, Download, RefreshCw, MapPin, Globe, Link, Activity, Eye, Loader } from 'lucide-react';

export default function AnalyticsPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [groupBy, setGroupBy] = useState('day');
  const [dateRange, setDateRange] = useState({
    startDate: '', 
    endDate: new Date().toISOString().split('T')[0] // today
  });
  
  const [showFilters, setShowFilters] = useState(false);
  
  // Colors for charts
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  // Fetch analytics data
  useEffect(() => {
    if (!id) return;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/urlclicks/analytics?urlId=${id}&groupBy=${groupBy}&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch analytics');
        }
        
        const data = await response.json();
        setAnalytics(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching analytics:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id, groupBy, dateRange]);
  
  // Handle date range change
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle group by change
  const handleGroupByChange = (newGroupBy) => {
    setGroupBy(newGroupBy);
  };
  
  // Toggle filters panel
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  // Format data for chart display
  const formatChartData = (data) => {
    if (!data || !data.data) return [];
    
    return data.data.map(item => {
      if (groupBy === 'day') {
        const date = new Date(item.day);
        return {
          name: `${date.getDate()}/${date.getMonth() + 1}`,
          clicks: item.count,
          fullDate: item.day
        };
      }
      return {
        name: item[groupBy] || 'Unknown',
        clicks: item.count
      };
    });
  };
  
  // Export data as CSV
  const exportCSV = () => {
    if (!analytics) return;
    
    const headers = groupBy === 'day' ? ['Date', 'Clicks'] : [groupBy.charAt(0).toUpperCase() + groupBy.slice(1), 'Clicks'];
    
    const csvData = analytics.data.map(item => {
      const key = Object.keys(item).find(k => k !== 'count');
      return `"${item[key]}","${item.count}"`;
    }).join('\n');
    
    const csv = `${headers.join(',')}\n${csvData}`;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `url-analytics-${id}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  // If still loading router query
  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">URL Analytics Dashboard</h1>
              <p className="mt-1 text-blue-100">Track performance and insights for your shortened URL</p>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => router.push('/dashboard')}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Dashboard
              </button>
              <button 
                onClick={exportCSV}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* URL ID indicator */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <span className="text-gray-500 text-sm">URL ID</span>
              <h2 className="text-gray-800 font-mono text-lg">{id}</h2>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <button 
                onClick={() => {setLoading(true); setTimeout(() => setLoading(false), 500)}}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </button>
              <button 
                onClick={toggleFilters}
                className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Filter className="h-4 w-4 mr-1" />
                Filters
                <ChevronDown className={`h-4 w-4 ml-1 transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
          
          {/* Filters panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Group By</label>
                  <div className="flex flex-wrap gap-2">
                    {['day', 'country', 'city', 'referrer'].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleGroupByChange(option)}
                        className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                          groupBy === option
                            ? 'bg-indigo-100 text-indigo-800 border-indigo-200'
                            : 'bg-gray-100 text-gray-800 border-gray-200'
                        } border`}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                  <div className="flex items-center space-x-2">
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        name="startDate"
                        value={dateRange.startDate}
                        onChange={handleDateChange}
                        className="pl-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <span className="text-gray-500">to</span>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        name="endDate"
                        value={dateRange.endDate}
                        onChange={handleDateChange}
                        className="pl-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Stats overview */}
        {loading ? (
          <div className="flex justify-center items-center py-32">
            <Loader className="h-12 w-12 animate-spin text-indigo-500" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-8 rounded-lg text-center">
            <p className="text-lg font-medium">Failed to load analytics data</p>
            <p className="mt-1">{error}</p>
            <button 
              onClick={() => {setLoading(true); setTimeout(() => setLoading(false), 500)}}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Stats cards */}
            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Total Clicks</dt>
                        <dd className="text-3xl font-semibold text-gray-900">{analytics.totalClicks}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Average Daily</dt>
                        <dd className="text-3xl font-semibold text-gray-900">
                          {analytics.data.length > 0 
                            ? Math.round(analytics.totalClicks / analytics.data.length) 
                            : 0}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      {groupBy === 'country' || groupBy === 'city' ? (
                        <Globe className="h-6 w-6 text-white" />
                      ) : groupBy === 'referrer' ? (
                        <Link className="h-6 w-6 text-white" />
                      ) : (
                        <Calendar className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {groupBy === 'day' ? 'Days Tracked' : 
                           groupBy === 'country' ? 'Countries' : 
                           groupBy === 'city' ? 'Cities' : 'Referrers'}
                        </dt>
                        <dd className="text-3xl font-semibold text-gray-900">{analytics.data.length}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">Top {groupBy === 'day' ? 'Day' : groupBy}</dt>
                        <dd className="text-lg font-semibold text-gray-900 truncate">
                          {analytics.data.length > 0 
                            ? (() => {
                                const topItem = [...analytics.data].sort((a, b) => b.count - a.count)[0];
                                const key = Object.keys(topItem).find(k => k !== 'count');
                                return topItem[key];
                              })()
                            : 'N/A'}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Charts */}
            <div className="space-y-6">
              {/* Main Chart */}
              <div className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {groupBy === 'day' ? 'Daily Clicks' : 
                   groupBy === 'country' ? 'Clicks by Country' : 
                   groupBy === 'city' ? 'Clicks by City' : 'Clicks by Referrer'}
                </h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    {groupBy === 'day' ? (
                      <LineChart
                        data={formatChartData(analytics)}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value) => [`${value} clicks`, 'Clicks']}
                          labelFormatter={(label, payload) => payload[0]?.payload?.fullDate || label}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="clicks" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    ) : (
                      <BarChart
                        data={formatChartData(analytics).slice(0, 10)} // Limit to top 10 for readability
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value} clicks`, 'Clicks']} />
                        <Legend />
                        <Bar dataKey="clicks" fill="#8884d8">
                          {formatChartData(analytics).slice(0, 10).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Distribution Chart for non-day grouping */}
              {groupBy !== 'day' && analytics.data.length > 0 && (
                <div className="bg-white p-6 shadow rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Distribution</h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={formatChartData(analytics).slice(0, 6)} // Limit to top 6 for readability
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="clicks"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {formatChartData(analytics).slice(0, 6).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value} clicks`, 'Clicks']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
              
              {/* Data Table */}
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="text-lg font-medium text-gray-900">Detailed Data</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {groupBy === 'day' ? 'Date' : 
                           groupBy === 'country' ? 'Country' : 
                           groupBy === 'city' ? 'City' : 'Referrer'}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Clicks
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Percentage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {analytics.data.map((item, index) => {
                        const key = Object.keys(item).find(k => k !== 'count');
                        const percentage = (item.count / analytics.totalClicks * 100).toFixed(1);
                        
                        return (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item[key]}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {item.count}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center">
                                <span className="mr-2">{percentage}%</span>
                                <div className="w-16 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-blue-600 h-2 rounded-full" 
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-white shadow-inner mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            URL Analytics Dashboard • {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  );
}