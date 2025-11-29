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
    emoji: '🏛️',
    color: 'from-purple-400 to-pink-400',
    modules: 12,
    completed: 5,
    topics: ['Египет', 'Греция', 'Рим', 'Первые цивилизации']
  },
  {
    id: 2,
    name: 'Средневековье',
    period: '476 - 1453',
    emoji: '🏰',
    color: 'from-blue-400 to-cyan-400',
    modules: 10,
    completed: 3,
    topics: ['Рыцари', 'Замки', 'Изобретения', 'Культура']
  },
  {
    id: 3,
    name: 'Возрождение',
    period: '1453 - 1600',
    emoji: '🎨',
    color: 'from-orange-400 to-yellow-400',
    modules: 8,
    completed: 0,
    topics: ['Искусство', 'Наука', 'Открытия', 'Гении']
  },
  {
    id: 4,
    name: 'Новое время',
    period: '1600 - 1918',
    emoji: '⚙️',
    color: 'from-green-400 to-emerald-400',
    modules: 15,
    completed: 0,
    topics: ['Революции', 'Промышленность', 'Изобретения']
  },
  {
    id: 5,
    name: 'Современность',
    period: '1918 - наше время',
    emoji: '🚀',
    color: 'from-indigo-400 to-purple-400',
    modules: 20,
    completed: 0,
    topics: ['Технологии', 'Космос', 'Цифровой мир']
  }
];

const projects = [
  {
    id: 1,
    title: 'Построй свою пирамиду',
    description: 'Изучи древнеегипетскую архитектуру и создай 3D-модель',
    difficulty: 'Легко',
    time: '30 мин',
    icon: '🔺',
    color: 'bg-gradient-to-br from-yellow-100 to-orange-100'
  },
  {
    id: 2,
    title: 'Карта великих открытий',
    description: 'Отметь путешествия знаменитых первооткрывателей',
    difficulty: 'Средне',
    time: '45 мин',
    icon: '🗺️',
    color: 'bg-gradient-to-br from-blue-100 to-cyan-100'
  },
  {
    id: 3,
    title: 'Машина времени',
    description: 'Создай временную шкалу важнейших изобретений',
    difficulty: 'Сложно',
    time: '60 мин',
    icon: '⏰',
    color: 'bg-gradient-to-br from-purple-100 to-pink-100'
  }
];

export default function Index() {
  const [selectedEpoch, setSelectedEpoch] = useState<number | null>(null);
  const totalProgress = 33;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl">
                🎓
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Философия знания
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Icon name="Star" size={16} className="mr-1" />
                450 баллов
              </Badge>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold">
                МА
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Привет, Маша! 👋</h2>
              <p className="text-muted-foreground">Продолжай своё путешествие по истории знаний</p>
            </div>
            <Card className="p-4 min-w-[200px]">
              <p className="text-sm text-muted-foreground mb-2">Общий прогресс</p>
              <Progress value={totalProgress} className="h-2 mb-2" />
              <p className="text-2xl font-bold">{totalProgress}%</p>
            </Card>
          </div>
        </div>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl">
              🗺️
            </div>
            <h2 className="text-3xl font-bold">Карта Времени</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {epochs.map((epoch) => (
              <Card
                key={epoch.id}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  selectedEpoch === epoch.id ? 'ring-4 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedEpoch(epoch.id)}
              >
                <div className={`h-32 bg-gradient-to-br ${epoch.color} flex items-center justify-center text-6xl transition-transform group-hover:scale-110`}>
                  {epoch.emoji}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{epoch.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{epoch.period}</p>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Модули</span>
                      <span className="font-semibold">{epoch.completed}/{epoch.modules}</span>
                    </div>
                    <Progress value={(epoch.completed / epoch.modules) * 100} className="h-1.5" />
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {epoch.topics.slice(0, 2).map((topic, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {epoch.topics.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{epoch.topics.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl">
              🎯
            </div>
            <h2 className="text-3xl font-bold">Практические проекты</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`${project.color} border-2 border-white/50 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden group cursor-pointer`}
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {project.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex gap-2 mb-4">
                    <Badge className="bg-white/80 text-foreground hover:bg-white">
                      <Icon name="Signal" size={12} className="mr-1" />
                      {project.difficulty}
                    </Badge>
                    <Badge className="bg-white/80 text-foreground hover:bg-white">
                      <Icon name="Clock" size={12} className="mr-1" />
                      {project.time}
                    </Badge>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Начать проект
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">🌟 Новое приключение ждёт!</h2>
              <p className="text-white/90 text-lg">
                Открой для себя секреты древних цивилизаций в новом модуле
              </p>
            </div>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8">
              Исследовать
              <Icon name="Sparkles" size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
