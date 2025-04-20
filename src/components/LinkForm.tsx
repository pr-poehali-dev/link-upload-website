import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkIcon, Plus } from "lucide-react";

type LinkFormProps = {
  onAddLink: (title: string, url: string) => void;
};

const LinkForm: React.FC<LinkFormProps> = ({ onAddLink }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!title.trim()) {
      setError("Название не может быть пустым");
      return;
    }

    if (!url.trim()) {
      setError("URL не может быть пустым");
      return;
    }

    // Проверка формата URL
    try {
      // Если URL не содержит протокол, добавляем https://
      const urlToValidate = url.startsWith('http') ? url : `https://${url}`;
      new URL(urlToValidate);
      
      const finalUrl = url.startsWith('http') ? url : `https://${url}`;
      onAddLink(title, finalUrl);
      setTitle("");
      setUrl("");
      setError(null);
    } catch (e) {
      setError("Некорректный URL");
    }
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <LinkIcon className="mr-2" />
          Добавить новую ссылку
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Название ссылки"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <Input
              placeholder="URL (например, https://example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full"
            />
          </div>
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button type="submit" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Добавить ссылку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LinkForm;
