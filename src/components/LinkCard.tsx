import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trash } from "lucide-react";
import { Link } from "@/types/Link";

interface LinkCardProps {
  link: Link;
  onDelete: (id: string) => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, onDelete }) => {
  // Извлекаем домен из URL для отображения фавиконки
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch (e) {
      return "";
    }
  };

  const domain = getDomain(link.url);
  const faviconUrl = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` : "/placeholder.svg";

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <img
            src={faviconUrl}
            alt="Favicon"
            className="w-10 h-10 rounded-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
          <div className="flex-1 overflow-hidden">
            <h3 className="font-medium text-lg truncate mb-1">{link.title}</h3>
            <p className="text-sm text-muted-foreground truncate">{link.url}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => window.open(link.url, "_blank")}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Открыть
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="flex-1"
          onClick={() => onDelete(link.id)}
        >
          <Trash className="h-4 w-4 mr-2" />
          Удалить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LinkCard;
