import React from 'react';
import { TagsResponse } from '@/types'; // Ensure `TagsResponse` is correctly exported from '@/types'
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

  
type Props = {
  data: TagsResponse;
};

const TagsResult: React.FC<Props> = ({ data }) => {
    const {tags,title} = data.data;
    // const {}
  return (
    <div className=" max-w-4xl  mt-8 shadow-lg rounded-lg p-5 border">
        <h2 className="lg:text-xl font-semibold text-center pb-2 md:max-w-[80%] ">{title}</h2>
      <div className="flex flex-row mt-3 flex-wrap gap-4 items-center">

      {
        tags?.map((item,index)=>{
            return (
                <Button key={index} variant="outline" className="hover:outline-double"
                >
                    {item}
                </Button>
            )
        })
      }
      <div className="flex  w-full justify-end">
      <Tooltip>

    <TooltipTrigger>
    <Button variant="outline" className="rounded-lg ">
      <Copy />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
    <p  >Copy Tags</p>

   
    </TooltipContent>
  </Tooltip>

   
      </div>
      </div>
     
    </div>
  );
};

export default TagsResult;
