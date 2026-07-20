import { Card } from "@/components/ui/card"
import Link from "next/link"
import "../../../src/index.css"

export default function CardsProjects() {
    const projects = [
        {
            id: 1,
            title: "GOO LIVE",
            subtitle: "Plataforma análisis de datos Goo para estrategias de marketing digital",
            bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
            textColor: "text-white",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjM2bDuwmKjjwA3MKiijQFRGL3MjWwQEwfuhqA9ZvK2cyBGPgNtxpnCzC8&s=10",
            link: "https://www.goo.live/",
        },
        {
            id: 2,
            title: "GOO ADMIN",
            subtitle: "Plataforma administrativa para la gestión de datos de GOO LIVE",
            bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
            textColor: "text-white",
            image: "https://goo-admin.web.app/assets/goo_logo-D_UCyG8b.png",
            link: "https://goo-admin.web.app/login",
        },
        {
            id: 3,
            title: "DRASKINT",
            subtitle: "landing page para empresa de desarrollo de software",
            bgColor: "bg-gradient-to-br from-black via-zinc-950 to-zinc-900",
            textColor: "text-white",
            image: "https://i.postimg.cc/QCmF4Hbn/Screenshot-2026-07-20-170748.png",
            link: "https://demo-draskint.netlify.app/",
        },
        {
            id: 4,
            title: "NC-Delicias",
            subtitle: "Landing page para reposteria y pastelería",
            bgColor: "bg-gradient-to-br from-pink-200 to-pink-900",
            textColor: "text-white",
            image: "https://i.postimg.cc/zvwT6yjm/448427755-1248364163239611-6793991713541956325-n-removebg-2.png",
            link: "https://nc-delicias.netlify.app/",
        },
        {
            id: 5,
            title: "TALLER EL MASTER",
            subtitle: "Plataforma para taller de mecánica automotriz aun en desarrollo",
            bgColor: "bg-gradient-to-br from-gray-900 to-red-900",
            textColor: "text-white",
            image: "https://i.postimg.cc/d3PRPkGJ/img-Taller-El-Masterr.jpg",
            link: "https://elmaster.netlify.app/",
        },
        {
            id: 6,
            title: "Landing Page BI",
            subtitle: "Prueba técnica para el proceso de selección de Banca Empresarial",
            bgColor: "bg-gradient-to-br from-gray-700 to-blue-900",
            textColor: "text-white",
            image: "https://bancaempresarial.bi.com.gt/assets/webp/image-preview-share.webp",
            link: "https://technical-test-rod-frontend.vercel.app/#",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Proyectos
                    </h1>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Estos son algunos de los proyectos que he realizado y en
                        los cuales he participado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visitar proyecto ${project.title}`}
                            className="block rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/40"
                        >
                            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer appear">
                                <div
                                    className={`${project.bgColor} relative h-80 flex flex-col items-center justify-center p-8`}
                                >
                                    <div
                                        className="absolute inset-0 opacity-20 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url("${project.image}")`,
                                        }}
                                    />

                                    <div
                                        className={`relative z-10 text-center ${project.textColor}`}
                                    >
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-wide">
                                            {project.title}
                                        </h3>

                                        {project.subtitle && (
                                            <p className="text-lg opacity-90 font-medium">
                                                {project.subtitle}
                                            </p>
                                        )}
                                    </div>

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}