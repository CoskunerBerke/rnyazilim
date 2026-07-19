import { MetadataRoute } from "next";
import { services, projects, companyInfo } from "@/content/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${companyInfo.domain}`;

  // Static routes
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/iletisim",
    "/hizmetler",
    "/projeler",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
    "/kvkk",
    "/kullanim-kosullari",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/hizmetler/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projeler/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
