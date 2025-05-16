import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { coursesData } from "@/data/courses";

export const Courses = () => {
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold mb-8 text-center">Todos os Cursos</h1>
			<div className="flex flex-col gap-12 mx-2">
				{coursesData.map((cat) => (
					<section key={cat.category}>
						<div className="flex items-center gap-4 mb-4">
							<img src={cat.image} alt={cat.category} className="w-16 h-16 object-contain" />
							<h2 className="text-2xl font-semibold">{cat.category}</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{cat.courses.map((course) => (
								<Card key={course.title}>
									<CardHeader>
										<CardTitle>{course.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground text-sm">{course.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
};