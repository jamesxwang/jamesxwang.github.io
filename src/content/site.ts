export const site = {
  name: "James Wang",
  firstName: "James",
  lastName: "Wang",
  title: "James Wang",
  description:
    "Software Engineer at Airwallex. Previously a frontend engineer at Tencent Cloud.",
  url: "https://jamesxwang.com",
  email: "jameswangx95@gmail.com",
  github: "https://github.com/jamesxwang",
  githubHandle: "jamesxwang",
  linkedin: "https://www.linkedin.com/in/james-wang-cn/",
};

const bioLink = (href: string, label: string, logo: string, logoClass = "bio-logo") =>
  `<span class="bio-brand"><a href="${href}" target="_blank" rel="noopener noreferrer"><img src="${logo}" alt="" aria-hidden="true" class="${logoClass}" />${label}</a></span>`;

export const bio = [
  {
    html: `I'm James, a software engineer working at ${bioLink("https://www.airwallex.com/en-au/spend-management", "Airwallex Spend", "/images/airwallex.png")}, based in <span class="bio-brand"><img src="/images/sydney.svg" alt="" aria-hidden="true" class="bio-logo" />Sydney</span>, Australia.`,
  },
  {
    html: `Before that I was a frontend engineer at ${bioLink("https://www.tencentcloud.com", "Tencent Cloud", "/images/tencent-cloud.svg")}.`,
  },
  {
    html: `I hold a Master of Computer Science from the ${bioLink("https://study.unimelb.edu.au/find/courses/graduate/master-of-computer-science/", "University of Melbourne", "/images/unimelb.svg", "bio-logo bio-logo-unimelb")}, and a B.E. in Automation from ${bioLink("https://soa.csu.edu.cn/English/Introduction/Introduction.htm", "Central South University", "/images/csu.png", "bio-logo bio-logo-csu")}.`,
  },
  {
    html: `I've spent years in the browser — and still like shipping things people can click.`,
  },
];

export const timeline = [
  {
    kind: "education",
    year: "2013–2017",
    company: "CSU SOA",
    role: "B.E. Automation",
    href: "https://soa.csu.edu.cn/English/Introduction/Introduction.htm",
    rise: 38,
  },
  {
    kind: "work",
    year: "2017",
    company: "Hunan Wongxin Hi-tech Co., Ltd.",
    role: "Software Engineer",
    color: "#1F8A7D",
    ink: "#ffffff",
    rise: 84,
  },
  {
    kind: "education",
    year: "2018–2020",
    company: "UniMelb",
    role: "Master of Computer Science",
    href: "https://study.unimelb.edu.au/find/courses/graduate/master-of-computer-science/",
    rise: 72,
  },
  {
    kind: "work",
    year: "2018",
    company: "Ubisoft",
    role: "Intern",
    color: "#111111",
    ink: "#ffffff",
    rise: 52,
  },
  {
    kind: "work",
    year: "2019",
    company: "Royal Melbourne Hospital",
    role: "Full-stack Engineer",
    color: "#1E4D78",
    ink: "#ffffff",
    rise: 100,
  },
  {
    kind: "move",
    year: "2020",
    label: "Moved to Shenzhen",
    rise: 32,
  },
  {
    kind: "work",
    year: "2020",
    company: "Tencent Cloud",
    role: "Frontend Engineer",
    color: "#0052D9",
    ink: "#ffffff",
    rise: 68,
  },
  {
    kind: "move",
    year: "2021",
    label: "Moved to Shanghai",
    rise: 86,
  },
  {
    kind: "work",
    year: "2022",
    company: "Airwallex",
    role: "Software Engineer",
    color: "#FF4F42",
    colorEnd: "#FF8E3C",
    ink: "#ffffff",
    rise: 94,
  },
  {
    kind: "move",
    year: "2022",
    label: "Moved to Melbourne",
    rise: 40,
  },
  {
    kind: "move",
    year: "2024",
    label: "Got married",
    rise: 78,
  },
  {
    kind: "move",
    year: "2024",
    label: "Moved to Sydney",
    rise: 36,
  },
];

export const works = [
  {
    title: "Tencent Cloud Monitor Grafana App",
    description: "Documentation for the Tencent Cloud Monitor Grafana plugin.",
    href: "https://jamesxwang.com/tencentcloud-monitor-grafana-app-docs/",
    image:
      "https://cdn.jsdelivr.net/gh/TencentCloud/tencentcloud-monitor-grafana-app@master/src/image/plugin-app.png",
  },
  {
    title: "Vue-Hotspot",
    description: "A hotspot component for Vue.js.",
    href: "https://github.com/jamesxwang/vue-hotspot",
    image:
      "https://cdn.jsdelivr.net/gh/jamesxwang/vue-hotspot@master/src/demo/assets/logo.png",
  },
  {
    title: "Mini MVVM",
    description: "A small MVVM mock-up exploring reactivity from scratch.",
    href: "https://github.com/jamesxwang/MVVM",
    image: "https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/mvvm/mvvm.png",
  },
];

export const resumes = [
  { id: "en", label: "English", subtitle: "Resume", href: "/resume/Resume.pdf" },
  { id: "zh", label: "中文", subtitle: "简历", href: "/resume/Resume-zh.pdf" },
];

export const analytics = {
  cnzz: "https://s4.cnzz.com/z_stat.php?id=1279680844&web_id=1279680844",
  busuanzi: "https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",
};
