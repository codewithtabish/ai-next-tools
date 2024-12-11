export const generateImage = async (prompt: string): Promise<string | null> => {
    try {
      const response = await fetch(`https://python-setup.onrender.com/api/v1/create_image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate image');
      }
  
      const data = await response.json();
      // Extract and return the image URL from the API response
      return data ;
    } catch (err) {
      console.error('Error generating image:', err);
      return null;
    }
  };
  