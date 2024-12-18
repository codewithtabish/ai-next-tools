export interface TagsResponse{
    data:{
        tags:string[];
        title:string


    }
}


export interface BlogInterface {
    id: string;
    slug: string;
    title: string;
    blog_content: string;
    blogKeywords: string[];
    blog_main_image: string;
    category: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  