import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenIcon, LinkIcon, GraduationCapIcon, BookmarkIcon, BrainIcon, SparklesIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GraduationCapIcon className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-2xl font-bold">Школьный Помощник</h1>
            </div>
            <nav>
              <Link to="/links">
                <Button variant="outline">
                  <BookmarkIcon className="h-4 w-4 mr-2" />
                  Мои Ссылки
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Сборник нейросетей для учителей и учеников</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Удобный способ хранить все важные школьные ресурсы и ИИ-инструменты в одном месте. Больше никаких потерянных ссылок!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpenIcon className="h-5 w-5 mr-2 text-primary" />
                Учебные материалы
              </CardTitle>
              <CardDescription>
                Храните ссылки на учебники, задания и образовательные ресурсы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Добавляйте ссылки на электронные учебники, полезные статьи, видеоуроки и другие материалы для учебы.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LinkIcon className="h-5 w-5 mr-2 text-primary" />
                Школьные порталы
              </CardTitle>
              <CardDescription>
                Быстрый доступ к школьным сайтам и электронному дневнику
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Сохраняйте ссылки на школьный портал, электронный дневник, расписание и другие важные ресурсы.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <SparklesIcon className="h-5 w-5 mr-2 text-primary" />
                ИИ-инструменты
              </CardTitle>
              <CardDescription>
                Нейросети для обучения и подготовки к экзаменам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Собирайте полезные нейросети для создания материалов, проверки знаний и эффективной подготовки к занятиям.</p>
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
          <p>© 2024 Школьный Помощник. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
