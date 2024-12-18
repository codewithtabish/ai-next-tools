
  
  export const fetachAllBlogsService = async (): Promise<any | null> => {
    try {
        const response = await fetch(`https://python-setup.onrender.com/api/v1/blogs`, {
        headers: {
          'Content-Type': 'application/json',
        },
        cache:'default'
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch blogs');
      }
  
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.log('Error extracting blogs:', err);
      return null;
    }
  };



  export const fetchBlogBySlug = async (slug: string): Promise<any | null> => {
    try {
      const response = await fetch(`https://python-setup.onrender.com/api/v1/blog/${slug}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'force-cache', // Optional, you can remove this if not required
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch blog by slug');
      }
  
      const data: any = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching blog by slug:', err);
      return null;
    }
  };
  

