import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LinkForm } from "@/components/LinkForm";
import { LinkCard } from "@/components/LinkCard";
import { Link } from "@/types/Link";
import { HomeIcon, BookmarkIcon } from "lucide-react";

export const LinksPage = () => {
  const [links, setLinks] = useState<Link[]>([]);

  // Загрузка ссылок из локального хранилища при монтировании компонента
  useEffect(() => {
    const savedLinks = localStorage.getItem("links");
    if (savedLinks) {
      try {
        const parsedLinks = JSON.parse(savedLinks);
        // Преобразуем строки дат обратно в объекты Date
        const linksWithDates = parsedLinks.map((link: any) => ({
          ...link,
          createdAt: new Date(link.createdAt)
        }));
        setLinks(linksWithDates);
      } catch (error) {
        console.error("Ошибка при загрузке ссылок:", error);
      }
    }
  }, []);

  // Сохранение ссылок в локальное хранилище при их изменении
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  // Добавление новой ссылки
  const handleAddLink = (title: string, url: string) => {
    const newLink: Link = {
      id: Date.now().toString(),
      title,
      url,
      createdAt: new Date()
    };
    setLinks(prevLinks => [newLink, ...prevLinks]);
  };

  // Удаление ссылки
  const handleDeleteLink = (id: string) => {
    setLinks(prevLinks => prevLinks.filter(link => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookmarkIcon className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-2xl font-bold">Мои ссылки</h1>
            </div>
            <RouterLink to="/">
              <Button variant="outline">
                <HomeIcon className="h-4 w-4 mr-2" />
                На главную
              </Button>
            </RouterLink>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-xl mx-auto mb-8">
          <LinkForm onAddLink={handleAddLink} />
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
          {links.length > 0 ? (
            links.map(link => (
              <LinkCard key={link.id} link={link} onDelete={handleDeleteLink} />
            ))
          ) : (
            <div className="text-center p-8 bg-card rounded-lg border">
              <BookmarkIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Нет сохраненных ссылок</h3>
              <p className="text-muted-foreground mb-4">
                Добавьте свою первую ссылку с помощью формы выше
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-card mt-auto py-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Хранилище ссылок. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default LinksPage;
