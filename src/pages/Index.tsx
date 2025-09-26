import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const templates = [
    {
      id: 1,
      title: 'Travel Vlog',
      description: 'Dynamic cuts for your adventures',
      category: 'travel',
      image: '/img/c0ae2479-db53-4057-a903-d44690e177f2.jpg',
      duration: '0:45',
      features: ['Auto Rhythm', 'Color Grading', 'Text Overlays']
    },
    {
      id: 2,
      title: 'Urban Lifestyle',
      description: 'Modern city vibes template',
      category: 'lifestyle',
      image: '/img/fb28de4d-c47c-42e0-8d96-9dcbc9c5fec4.jpg',
      duration: '0:30',
      features: ['Beat Sync', 'Transitions', 'Music Match']
    },
    {
      id: 3,
      title: 'Product Showcase',
      description: 'Professional product presentation',
      category: 'business',
      image: '/img/e8284e7a-d059-4ef4-8fe9-8fcc4544fa37.jpg',
      duration: '0:60',
      features: ['Auto Focus', 'Brand Colors', 'Call to Action']
    },
    {
      id: 4,
      title: 'Food Review',
      description: 'Appetizing food content template',
      category: 'food',
      image: '/img/c0ae2479-db53-4057-a903-d44690e177f2.jpg',
      duration: '0:35',
      features: ['Close-ups', 'Taste Moments', 'Reviews']
    },
    {
      id: 5,
      title: 'Workout Energy',
      description: 'High-energy fitness content',
      category: 'fitness',
      image: '/img/fb28de4d-c47c-42e0-8d96-9dcbc9c5fec4.jpg',
      duration: '0:40',
      features: ['Motivation', 'Progress Track', 'Music Sync']
    },
    {
      id: 6,
      title: 'Tech Review',
      description: 'Modern tech presentation style',
      category: 'tech',
      image: '/img/e8284e7a-d059-4ef4-8fe9-8fcc4544fa37.jpg',
      duration: '0:55',
      features: ['Specs Display', 'Comparisons', 'Demos']
    }
  ];

  const categories = [
    { id: 'all', name: 'Все шаблоны', count: templates.length },
    { id: 'travel', name: 'Путешествия', count: 1 },
    { id: 'lifestyle', name: 'Lifestyle', count: 1 },
    { id: 'business', name: 'Бизнес', count: 1 },
    { id: 'food', name: 'Еда', count: 1 },
    { id: 'fitness', name: 'Фитнес', count: 1 },
    { id: 'tech', name: 'Технологии', count: 1 }
  ];

  const features = [
    {
      icon: 'Music',
      title: 'Автомонтаж по ритму',
      description: 'ИИ анализирует музыку и создает идеальные переходы в такт'
    },
    {
      icon: 'Zap',
      title: 'Умные переходы',
      description: 'Автоматические переходы, синхронизированные с битом'
    },
    {
      icon: 'Palette',
      title: 'Цветокоррекция',
      description: 'Профессиональная обработка цвета одним кликом'
    },
    {
      icon: 'Type',
      title: 'Динамические тексты',
      description: 'Анимированные подписи и заголовки в стиле TikTok'
    }
  ];

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              REELS MAKER
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создавай вирусные видео с автоматическим монтажом по музыкальному ритму. 
              Профессиональное качество за считанные минуты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6 animate-scale-in">
                <Icon name="Play" className="mr-2" />
                Создать видео
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 animate-scale-in">
                <Icon name="BookOpen" className="mr-2" />
                Смотреть примеры
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-up">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Видео создано</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Попадание в ритм</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2 мин</div>
                <div className="text-sm text-muted-foreground">Средняя скорость</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Возможности автоматического монтажа
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ИИ анализирует вашу музыку и создает профессиональные переходы, 
              синхронизированные с каждым битом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Library */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Библиотека шаблонов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовые шаблоны для разных типов контента с профессиональными переходами и эффектами
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
              <Card key={template.id} className="overflow-hidden group hover:shadow-xl transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                      <Button size="sm" className="bg-primary/90 hover:bg-primary">
                        <Icon name="Play" size={16} className="mr-1" />
                        Превью
                      </Button>
                      <Badge className="bg-black/50 text-white">
                        {template.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{template.title}</span>
                    <Button size="sm" className="shrink-0 ml-2">
                      <Icon name="Download" size={16} />
                    </Button>
                  </CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {template.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готов создать свой первый рилс?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Загрузи свои видео и музыку, выбери шаблон — остальное сделает ИИ. 
              Профессиональный результат гарантирован.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Upload" className="mr-2" />
                Начать создание
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Headphones" className="mr-2" />
                Посмотреть тутор
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;