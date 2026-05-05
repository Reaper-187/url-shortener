import { Trash, Edit } from "lucide-react";
import { Button } from "../ui/button";

export const UrlListItem = () => {
  return (
    <>
      <div className="flex flex-col items-center p-3 md:flex-row gap-3 md:gap-5 border-b last:border-b-0">
        <img
          alt="QR_CODE"
          className="w-12 h-12 md:w-20 md:h-20 bg-muted rounded"
        />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          <p className="truncate">
            <span className="font-semibold">Title:</span>TESTTESTETST
          </p>
          <p className="truncate">
            <span className="font-semibold">Short:</span>http://localhost:5121
          </p>
          <p className="truncate hidden md:block">
            <span className="font-semibold">Original:</span>
            http://localhost:51212/#table=users&schema=public&view=table
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Edit className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
