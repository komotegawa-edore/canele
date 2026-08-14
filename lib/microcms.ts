import { createClient } from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

// microCMS の環境変数が未設定の場合は null を返す
function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    return null;
  }

  return createClient({
    serviceDomain,
    apiKey,
  });
}

export async function getBlogList() {
  const client = getClient();
  if (!client) return { contents: [] as Blog[], totalCount: 0 };

  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: { orders: "-publishedAt" },
  });
  return data;
}

export async function getBlogDetail(contentId: string) {
  const client = getClient();
  if (!client) return null;

  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
  });
  return data;
}

export type News = {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export async function getNewsList(limit?: number) {
  const client = getClient();
  if (!client) return { contents: [] as News[], totalCount: 0 };

  const data = await client.getList<News>({
    endpoint: "news",
    queries: {
      orders: "-publishedAt",
      ...(limit ? { limit } : {}),
    },
  });
  return data;
}
