import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const epochs = [
  {
    id: 1,
    name: 'Древний мир',
    period: '3000 до н.э. - 476 н.э.',
    modules: 12,
    completed: 5
  },
  {
    id: 2,
    name: 'Средневековье',
    period: '476 - 1453',
    modules: 10,
    completed: 3
  },
  {
    id: 3,
    name: 'Возрождение',
    period: '1453 - 1600',
    modules: 8,
    completed: 0
  },
  {
    id: 4,
    name: 'Новое время',
    period: '1600 - 1918',
    modules: 15,
    completed: 0
  },
  {
    id: 5,
    name: 'Современность',
    period: '1918 - наше время',
    modules: 20,
    completed: 0
  }
];

const projects = [
  {
    id: 1,
    title: 'Проект А',
    description: 'Построение структурной модели',
    difficulty: 'Начальный',
    time: '30 мин'
  },
  {
    id: 2,
    title: 'Проект Б',
    description: 'Картографирование событий',
    difficulty: 'Средний',
    time: '45 мин'
  },
  {
    id: 3,
    title: 'Проект В',
    description: 'Временная линия изобретений',
    difficulty: 'Продвинутый',
    time: '60 мин'
  }
];

export default function Index() {
  const [selectedEpoch, setSelectedEpoch] = useState<number | null>(null);
  const totalProgress = 33;

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-foreground rounded flex items-center justify-center">
                <Icon name="BookOpen" size={16} />
              </div>
              <h1 className="text-lg font-semibold">Философия знания</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Star" size={16} />
                <span>450 pts</span>
              </div>
              <div className="w-8 h-8 border border-border rounded-full flex items-center justify-center text-xs font-medium">
                МА
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Главная панель</h2>
              <p className="text-muted-foreground text-sm">Обзор учебного процесса</p>
            </div>
            <Card className="p-4 min-w-[180px]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Прогресс</p>
                <span className="text-lg font-semibold">{totalProgress}%</span>
              </div>
              <Progress value={totalProgress} className="h-1.5" />
            </Card>
          </div>
        </div>

        <section className="mb-12">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Временная шкала</h3>
            <p className="text-sm text-muted-foreground">Исторические эпохи и модули обучения</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {epochs.map((epoch) => (
              <Card
                key={epoch.id}
                className={`p-0 cursor-pointer transition-all hover:shadow-md ${
                  selectedEpoch === epoch.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedEpoch(epoch.id)}
              >
                <div className="border-b border-border p-4 bg-muted/30">
                  <div className="w-12 h-12 border-2 border-foreground/20 rounded flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {epoch.id}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{epoch.name}</h4>
                  <p className="text-xs text-muted-foreground">{epoch.period}</p>
                </div>
                
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Модули:</span>
                      <span className="font-medium">{epoch.completed} / {epoch.modules}</span>
                    </div>
                    <Progress 
                      value={(epoch.completed / epoch.modules) * 100} 
                      className="h-1" 
                    />
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4 text-xs"
                  >
                    <Icon name="Eye" size={14} className="mr-2" />
                    Просмотр
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Практические задания</h3>
            <p className="text-sm text-muted-foreground">Интерактивные проекты и упражнения</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Card key={project.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 border border-border rounded flex items-center justify-center">
                    <Icon name="FileText" size={20} className="text-muted-foreground" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                    {project.difficulty}
                  </span>
                </div>
                
                <h4 className="font-semibold mb-1">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    <span>{project.time}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Начать
                  <Icon name="ArrowRight" size={14} className="ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="p-8 border-2 border-dashed border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Новый контент доступен</h3>
                  <p className="text-sm text-muted-foreground">
                    Исследуйте дополнительные модули и материалы
                  </p>
                </div>
              </div>
              <Button size="lg">
                Перейти к обучению
                <Icon name="ChevronRight" size={16} className="ml-2" />
              </Button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}