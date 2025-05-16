import ImageMedio from "@/assets/medio.svg";
import ImageTecnologia from "@/assets/tecnologia.svg";
import ImageGames from "@/assets/games.svg";
import ImageIdiomas from "@/assets/idiomas.svg";
import ImageFinanceiro from "@/assets/financeiro.svg";

export const coursesData = [
	{
		category: "Ensino Médio",
		image: ImageMedio,
		courses: [
			{ title: "Desvendando a Matemática", description: "Curso completo para desvendar os principais conceitos matemáticos do ensino médio." },
			{ title: "Lições de Matemática", description: "Aprofunde-se em matemática com lições práticas e teóricas." },
			{ title: "Lições de Física", description: "Entenda os fundamentos da física de forma clara e objetiva." },
			{ title: "A Tal da Química", description: "Explore a química do ensino médio de maneira descomplicada." },
			{ title: "Português Completo", description: "Domine gramática, literatura e redação para o ensino médio." },
		],
	},
	{
		category: "Tecnologia",
		image: ImageTecnologia,
		courses: [
			{ title: "Linguagem C", description: "Aprenda programação estruturada com a linguagem C do básico ao avançado." },
			{ title: "Fluência em HTML5, CSS3, Flexbox e CSSGrid", description: "Domine as principais tecnologias para desenvolvimento web moderno." },
		],
	},
	{
		category: "Jogos Eletrônicos",
		image: ImageGames,
		courses: [
			{ title: "Curso Elo Up – CNB Academy: League of Legends", description: "Melhore seu desempenho no LoL com técnicas e estratégias profissionais." },
		],
	},
	{
		category: "Idiomas",
		image: ImageIdiomas,
		courses: [
			{ title: "Curso de Inglês Mairo Vergara", description: "Aprenda inglês de forma eficiente com o método Mairo Vergara." },
			{ title: "Inglês Sem Neura", description: "Curso prático para aprender inglês sem complicação." },
		],
	},
	{
		category: "Financeiro",
		image: ImageFinanceiro,
		courses: [
			{ title: "Viver de Renda | Bruno Perini", description: "Aprenda a investir e conquistar independência financeira com Bruno Perini." },
		],
	},
];