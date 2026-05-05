import { Card } from "../ui/card";
import { UrlListItem } from "../url-comp/UrlListItem";

export const UrlList = () => {
  return (
    <Card className="p-4 w-full">
      <UrlListItem />
      <UrlListItem />
      <UrlListItem />
    </Card>
  );
};
