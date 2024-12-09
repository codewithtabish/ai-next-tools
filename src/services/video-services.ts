import { TagsResponse } from "@/types";

  
  export const extractTags = async (url: string): Promise<TagsResponse | null> => {
    try {
      const response = await fetch('http://localhost:9000/api/v1/tags_extractor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to fetch data');
      }
  
      const data: TagsResponse = await response.json();
      return data;
    } catch (err) {
      console.error('Error extracting tags:', err);
      return null;
    }
  };
  