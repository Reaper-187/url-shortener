import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UrlList } from "@/components/URL-List/UrlList";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-self-center space-y-5 p-2">
        <h1 className="text-center text-sm md:text-xl lg:text-4xl lg:mt-5">
          Verwandeln Sie Ihre langen <br /> Links in leistungsstarke URLs
        </h1>
        <div className="flex gap-3 w-full items-center">
          <Input
            className="border-2 p-5"
            placeholder="paste the loooong URL here 👇"
          />
          <Button>trimm it !</Button>
        </div>
        <UrlList />
      </div>
    </>
  );
};
