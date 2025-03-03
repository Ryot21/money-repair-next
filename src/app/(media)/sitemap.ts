import { MetadataRoute } from "next";
import {
    getAllInformationSitemap,
    getAllInformationCategorySitemap,
} from "@/features/media/api/microcms/getInformation";
import {
    getAllInterviewSitemap,
    getAllInterviewCategorySitemap,
} from "@/features/media/api/microcms/getInterview";


const buildUrl = (path?: string) => `https://money-repair.jp${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const informationContents = await getAllInformationSitemap();
    const informationUrls: MetadataRoute.Sitemap = informationContents.map((content) => ({
        url: buildUrl(`/information/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const interviewContents = await getAllInterviewSitemap();
    const interviewUrls: MetadataRoute.Sitemap = interviewContents.map((content) => ({
        url: buildUrl(`/interview/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const informationCategoryContents = await getAllInformationCategorySitemap();
    const informationCategoryUrls: MetadataRoute.Sitemap = informationCategoryContents.map((content) => ({
        url: buildUrl(`/information/category/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const interviewCategoryContents = await getAllInterviewCategorySitemap();
    const interviewCategoryUrls: MetadataRoute.Sitemap = interviewCategoryContents.map((content) => ({
        url: buildUrl(`/interview/category/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const now = new Date();

    return [
        {
            url: buildUrl(),
            lastModified: now,
        },
        {
            url: buildUrl("/interview"),
            lastModified: now,
        },
        {
            url: buildUrl("/information"),
            lastModified: now,
        },
        {
            url: buildUrl("/contact"),
            lastModified: now,
        },
        ...informationUrls,
        ...interviewUrls,
        ...informationCategoryUrls,
        ...interviewCategoryUrls,
    ];
}