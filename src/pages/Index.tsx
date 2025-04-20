import React, { useState, useEffect } from "react";
import { BookmarkIcon } from "lucide-react";
import LinkForm from "@/components/LinkForm";
import LinkCard from "@/components/LinkCard";
import { Link } from "@/types/Link";

const Index = () => {
  // Получаем ссылки из localStorage при инициализации
  const [links, setLinks] = useState<Link[]>(() => {
    const savedLinks = localStorage.getItem("links");
    return savedLinks ? JSON.parse(savedLinks) : [];
  });

  // Обновляем localStorage при изменении списка ссылок
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  // Добавление новой ссылки
  const handleAddLink = (title: string, url: string) => {
    const newLink: Link = {
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
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-center">
            <BookmarkIcon className="h-6 w-6 text-primary mr-2" />
            <h1 className="text-2xl font-bold">Мои Ссылки</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <div className="flex flex-col items-center mb-10">
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
    </div>
  );
};

export default Index;
