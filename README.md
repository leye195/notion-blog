# Notion Blog Template

## How to start

### Create env.local

```
NOTION_SECRET=
NOTION_DATABASE=
NEXT_PUBLIC_BASE_URL=
```

### Install dependencies

```bash
pnpm install
```

### Run Server

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

### Run Build

```bash
pnpm start
```

## How to configuration

### Create Notion integration

- create notion integration from [notion developers](https://www.notion.so/my-integrations) and get secret key
- create [Database on Notion](https://www.dantechblog.xyz/posts/744d3f5a-5ad5-41d7-bbd2-46f167b4ab59)

### Google Analytics

- pass gtagID to GoogleAnalytics component on `app/layout.tsx`

### SocialMedia

- update generateKBarAction function on `libs/kbarActions.ts`

```
export const generateKBarAction = (router: AppRouterInstance) => {
  const actions = [
    {
      id: "home",
      name: "Home",
      section: "Scope",
      perform: () => router.push("/"),
    },
    {
      id: "posts",
      name: "Posts",
      section: "Scope",
      keywords: "post, article",
      perform: () => router.push("/posts"),
    },
    {
      id: "resume",
      name: "Resume",
      section: "Scope",
      perform: () => router.push("/resume"),
    },
    {
      id: "rss",
      name: "RSS",
      section: "Scope",
      perform: () => router.push("/rss.xml"),
    },
    {
      id: "github",
      name: "Github",
      subtitle: "leye195",
      section: "Social",
      perform: () =>
        window.open(
          "https://github.com/leye195",
          "_blank",
          "noopner,noreferrer"
        ),
    },
  ];
```

### ToDo

- [x] 페이지 레이아웃 및 UI 설정
- [x] Notion Api 연동
- [x] Sitemap 생성
- [x] rss 생성
- [x] Resume 페이지 작업
