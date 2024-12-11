export const domainService = async (domain: string): Promise<any | null> => {
    try {
      const response = await fetch(`https://python-setup.onrender.com/api/v1/domain_info?domain=${domain}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch domain info');
      }
  
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching domain info:', err);
      return null;
    }
  };
  