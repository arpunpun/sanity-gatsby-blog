export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6164edcf58b5473c2e533329",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ybmc34ih",
                  apiId: "6c79c58d-a882-4057-8532-576301f6fb9e",
                },
                {
                  buildHookId: "6164edcf518f143da905e9bf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8hxb9h2m",
                  apiId: "4842d78e-3d63-496c-ad8a-90c967d76b10",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/arpunpun/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8hxb9h2m.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
