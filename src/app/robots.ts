import { MetadataRoute } from "next";
import { companyInfo } from "@/content/company";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${companyInfo.domain}`;
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
