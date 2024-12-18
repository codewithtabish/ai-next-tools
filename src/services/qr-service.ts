
  
  export const qrCodeGeneratorUtils = async (qrText: string): Promise<any | null> => {
    try {
        const response = await fetch(`https://python-setup.onrender.com/api/v1/generate_qr`, {
            method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: qrText }),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch data');
      }
  
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.log('Error extracting tags:', err);
      return null;
    }
  };
  