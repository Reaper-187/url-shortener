import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UrlList } from "@/components/URL-List/UrlList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [urlInput, setUrlInput] = useState("");
  const navigate = useNavigate();

  const handleTrimUrl = () => {
    if (!urlInput.trim()) return;
    navigate(`/create-new-link?url=${encodeURIComponent(urlInput)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleTrimUrl();
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-self-center space-y-5 p-2">
        <h1 className="text-center text-sm md:text-xl lg:text-4xl lg:mt-5">
          Verwandeln Sie Ihre langen <br /> Links in leistungsstarke URLs
        </h1>
        <div className="flex gap-3 w-full items-center">
          <Input
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border-2 p-5"
            placeholder="paste the loooong URL here 👇"
          />
          <Button onClick={handleTrimUrl}>trimm my url!</Button>
        </div>
        <UrlList />
      </div>
    </>
  );
};
