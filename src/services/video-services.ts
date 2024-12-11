import { TagsResponse } from "@/types";

export const extractTags = async (url: string): Promise<TagsResponse | null> => {
  try {
    const response = await fetch(`https://python-setup.onrender.com/api/v1/tags_extractor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    // print("The url is "+url)
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
