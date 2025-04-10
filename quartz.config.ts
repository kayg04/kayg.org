import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "kayg.org",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'umami',
      host: 'https://umami.kayg.org', 
      websiteId: '845e36eb-7054-488c-919d-73f399433363',
    },
    locale: "en-US",
    baseUrl: "kayg.org",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: {
      colorScheme: "darkMode", // what colors to use for generating image, same as theme colors from config, valid values are "darkMode" and "lightMode"
      width: 1200, // width to generate with (in pixels)
      height: 630, // height to generate with (in pixels)
      excludeRoot: false, // wether to exclude "/" index path to be excluded from auto generated images (false = use auto, true = use default og image)
    },
    theme: {
      cdnCaching: false,
      typography: {
        header: "Schibsted Grotesk",
        body: "Encode Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#AA336A",
          tertiary: "#f910de",
          highlight: "rgba(249, 16, 222, 0.15)",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#DA70D6",
          tertiary: "#ed06d2",
          highlight: "rgba(199, 122, 204, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter"],
      }),
    //  Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "light-plus",
          dark: "synthwave-84",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: false, 
        mermaid: false 
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({
      }),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.Remark42({ host: "https://remark42.kayg.org", site_id: "kayg.org", no_footer: true }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
