import { Card } from "@/components/ui/card"
import Link from "next/link"
import "../../../src/index.css"

export default function CardsProjects() {
    const projects = [
        {
            id: 1,
            title: "Goo-Admin",
            subtitle: "",
            bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
            textColor: "text-white",
            image: "https://www.prensalibre.com//2024/04/goo-the-data-1.jpg?quality=52",
        },
        {
            id: 2,
            title: "CareTech",
            subtitle: "Chartered Professional Accountants",
            bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
            textColor: "text-white",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            id: 3,
            title: "Taskinder",
            subtitle: "",
            bgColor: "bg-gradient-to-br from-purple-600 to-blue-600",
            textColor: "text-white",
            image: "/placeholder.svg?height=300&width=400",
        },
        {
            id: 4,
            title: "NC-Delicias",
            subtitle: "SOLUTIONS",
            bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
            textColor: "text-white",
            image: "/placeholder.svg?height=300&width=400",
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Proyectos</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Estos son algunos de los proyectos los cuales e realizado y participado{" "}
                      {/*  <Link
                            href="mailto:contact@example.com"
                            className="text-blue-600 hover:text-blue-700 underline transition-colors"
                        >
                            Email me
                        </Link>*/} 
                        .
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer appear"
                        >
                            <div className={`${project.bgColor} relative h-80 flex flex-col items-center justify-center p-8`}>
                                {/* Background Pattern/Image */}
                                <div
                                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url('${project.image}')`,
                                    }}
                                />

                                {/* Content */}
                                <div className={`relative z-10 text-center ${project.textColor}`}>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-wide">{project.title}</h3>
                                    {project.subtitle && <p className="text-lg opacity-90 font-medium">{project.subtitle}</p>}
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
