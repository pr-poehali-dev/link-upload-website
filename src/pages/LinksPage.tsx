import React, { useState, useEffect } from "react";
import { BookmarkIcon, ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LinkForm from "@/components/LinkForm";
import LinkCard from "@/components/LinkCard";
import { Link as LinkType } from "@/types/Link";

const LinksPage = () => {
  // Получаем ссылки из localStorage при инициализации
  const [links, setLinks] = useState<LinkType[]>(() => {
    const savedLinks = localStorage.getItem("links");
    return savedLinks ? JSON.parse(savedLinks) : [];
  });

  // Обновляем localStorage при изменении списка ссылок
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  // Добавление новой ссылки
  const handleAddLink = (title: string, url: string) => {
    const newLink: LinkType = {
      id: Date.now().toString(),
      title,
      url,
      createdAt: new Date(),
    };
    setLinks((prevLinks) => [newLink, ...prevLinks]);
  };

  // Удаление ссылки
  const handleDeleteLink = (id: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookmarkIcon className="h-6 w-6 text-primary mr-2" />
              <h1 className="text-2xl font-bold">Мои Школьные Ссылки</h1>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="w-full max-w-xl mb-4">
            <h2 className="text-xl font-semibold mb-2">Добавьте новый школьный ресурс</h2>
            <p className="text-muted-foreground mb-4">
              Сохраняйте ссылки на учебные материалы, школьные порталы и полезные ресурсы
            </p>
          </div>
          <LinkForm onAddLink={handleAddLink} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            {links.length > 0 
              ? `Сохраненные ссылки (${links.length})` 
              : "У вас пока нет сохраненных ссылок"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <LinkCard 
                key={link.id} 
                link={link} 
                onDelete={handleDeleteLink} 
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-card mt-auto py-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Школьный Помощник. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default LinksPage;
