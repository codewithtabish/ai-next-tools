'use client'; // Ensure this component is treated as a client-side component
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { extractTags } from "@/services/video-services"
import { TagsResponse } from "@/types"
import { useState } from "react"
import TagsResult from "./TagsResult"
import Loader from "@/components/custom/Loader"

export default function TagsInputBox() {
    const [url, setUrl] = useState<string>("")
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getAllServerTags = async () => {
        setLoading(true);
        setError(null);
    
        const result = await extractTags(url);
        if (result) {
            setData(result);
        } else {
            setError('Failed to fetch data. Please check the URL.');
            // Clear the error message after 3 seconds
            setTimeout(() => setError(null), 3000);
        }
    
        setLoading(false);
    }

    return (
        <>
            <div className="flex max-w-4xl md:flex-row flex-col px-5 md:px-0 items-center md:space-x-2">
                <Input type="email" className="w-full" value={url} onChange={(e: any) => setUrl(e.target.value)} placeholder="Tags Extractor ..." />
                {!loading &&
                    <Button type="submit" className={`dark:text-white w-full flex md:w-auto ${loading ? 'loader' : ''}`} onClick={getAllServerTags} disabled={!url}>
                        GET TAGS
                    </Button>
                }
                {loading && <Loader />}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {data !== null && <TagsResult data={data} />}
        </>
    )
}
