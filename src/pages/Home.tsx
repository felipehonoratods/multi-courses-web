import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ImageMedio from "@/assets/medio.svg";
import ImageGraduacao from "@/assets/lic-matematica.svg";
import ImageGames from "@/assets/games.svg";
import ImageIdiomas from "@/assets/idiomas.svg";

export const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Bem-vindo ao Multi-Cursos-Web</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-2">
        <Card>
          <CardHeader className="flex flex-col items-center">
            <img src={ImageMedio} alt="Ensino Médio" className="w-28 h-28 mb-2 object-contain" />
            <CardTitle>Ensino Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Cursos voltados para estudantes do ensino médio, abrangendo disciplinas fundamentais e preparação para vestibulares.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col items-center">
            <img src={ImageGraduacao} alt="Graduação" className="w-28 h-28 mb-2 object-contain" />
            <CardTitle>Graduação</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Conteúdos e trilhas para graduação em diversas áreas, com foco em aprofundamento acadêmico e profissional.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col items-center">
            <img src={ImageGames} alt="Jogos Eletrônicos" className="w-28 h-28 mb-2 object-contain" />
            <CardTitle>Jogos Eletrônicos</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Cursos sobre desenvolvimento, design e estratégias em jogos eletrônicos, para quem deseja atuar ou se especializar no setor.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-col items-center">
            <img src={ImageIdiomas} alt="Idiomas" className="w-28 h-28 mb-2 object-contain" />
            <CardTitle>Idiomas</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Aprenda novos idiomas com cursos dinâmicos, práticos e adaptados a diferentes níveis de conhecimento.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};