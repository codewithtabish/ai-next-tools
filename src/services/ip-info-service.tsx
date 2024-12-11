export const ipInfoService = async (ip: string): Promise<any | null> => {
    try {
      const response = await fetch(`https://python-setup.onrender.com/api/v1/ip_info?ip=${ip}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch IP info');
      }
  
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.log('Error fetching IP info:', err);
      return null;
    }
  };
  