import { track } from "@vercel/analytics";

export const trackSearch = (query: string) => {
  if (!query.trim()) return;

  track("search", {
    query: query.toLowerCase(),
  });
};
