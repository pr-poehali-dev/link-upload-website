import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookmarkIcon, LinkIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <LinkIcon className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-2xl font-bold">Хранилище ссылок</h1>
            </div>
            <nav>
              <Link to="/links">
                <Button variant="outline">
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  Мои ссылки
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Сохраняйте важные ссылки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Удобный способ хранить все важные ссылки в одном месте. Больше никаких потерянных закладок!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <Card className="shadow-lg border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Добавление
              </CardTitle>
              <CardDescription>
                Сохраняйте ссылки за считанные секунды
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Быстрое и удобное добавление ссылок с автоматическим получением иконок сайтов. Простой интерфейс позволяет легко управлять вашими закладками.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                Хранение
              </CardTitle>
              <CardDescription>
                Все ссылки сохраняются в вашем браузере
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Ваши ссылки надежно сохраняются в локальном хранилище браузера. Они будут доступны на вашем устройстве даже после перезагрузки страницы.</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Доступ
              </CardTitle>
              <CardDescription>
                Быстрый доступ к вашим ссылкам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Открывайте сохраненные ссылки одним кликом. Организуйте и управляйте своими закладками в удобном интерфейсе с визуальным представлением.</p>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-center">
          <Link to="/links">
            <Button size="lg" className="animate-pulse">
              <BookmarkIcon className="h-5 w-5 mr-2" />
              Перейти к моим ссылкам
            </Button>
          </Link>
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

export default Index;
