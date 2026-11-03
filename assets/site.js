const Y = "shunhwson@gmail.com", F = "./img/avatar.jpeg", Q = "./img/uiuc.png", _ = "./img/wku.jpg", K = "./img/suntime.png", O = "./img/wechat-qr.JPG";
const g = {
  email: `mailto:${Y}`,
  github: "https://github.com/HW-shun",
  linkedin: "https://www.linkedin.com/",
  blog: "https://yourblog.example.com"
}, E = "Shunchang Chen", ae = {
  name: E,
  pageTitle: `${E} - Homepage`,
  description: "Shunchang Chen's personal homepage.",
  keywords: "personal homepage, personal website, portfolio, product manager",
  avatar: F,
  ui: {
    htmlLang: "en",
    home: "Home",
    themeToggle: "Toggle theme",
    languageToggle: "Switch to Chinese",
    languageButton: "中",
    about: "About Me",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    projectWebsite: "Website",
    projectCode: "Code",
    projectStack: "Tech stack",
    rights: "All rights reserved.",
    avatarAlt: "Profile avatar",
    wechatQrTitle: "Scan to add WeChat",
    qrClose: "Close",
    resumeDownload: "Download CV"
  },
  aboutHtml: [
    `I am <strong>${E}</strong>, an AI product manager at Shanghai Suntime Information Technology Co., Ltd.`,
    "My work and interests focus on financial AI, AI agents, large language model products, as well as human-computer interaction and software engineering."
  ],
  resume: null,
  social: [
    { href: g.email, title: "Email", icon: "email" },
    {
      title: "WeChat",
      icon: "wechat",
      qrSrc: O
    },
    { href: g.github, title: "GitHub", icon: "github" },
    {
      href: g.linkedin,
      title: "LinkedIn",
      icon: "linkedin"
    },
    { href: g.blog, title: "Blog", icon: "blog" }
  ],
  education: [
    {
      logo: Q,
      logoAlt: "Institution logo",
      title: "University of Illinois Urbana-Champaign",
      details: ["M.S. in Computer Science"],
      period: "2024 - 2026"
    },
    {
      logo: _,
      logoAlt: "Institution logo",
      title: "Wenzhou-Kean University",
      details: ["B.S. in Computer Science"],
      period: "2020 - 2024"
    }
  ],
  experience: [
    {
      logo: K,
      logoAlt: "Company logo",
      title: "Shanghai Suntime Information Technology Co., Ltd.",
      details: ["AI Product Manager"],
      period: "2026 - Present"
    }
  ],
  projects: [
    {
      name: "Project Name",
      version: "v1.0.0",
      period: "2024 - 2025",
      summary: "A one-line summary of what this project does and why it matters.",
      stack: "TypeScript, React, Vite",
      website: "#",
      code: "https://github.com/yourname/project-name"
    },
    {
      name: "Another Project",
      version: "v0.9.0",
      period: "2023 - 2024",
      summary: "A second line about this project's core capability and use cases.",
      stack: "Python, FastAPI, PostgreSQL",
      website: "#",
      code: "https://github.com/yourname/another-project"
    }
  ]
}, M = "陈顺昌", se = {
  name: M,
  email: Y,
  pageTitle: `${M} - 个人主页`,
  description: "陈顺昌的个人主页。",
  keywords: "个人主页, 个人网站, 作品集, 产品经理",
  avatar: F,
  ui: {
    htmlLang: "zh-CN",
    home: "首页",
    themeToggle: "切换主题",
    languageToggle: "切换到英文",
    languageButton: "EN",
    about: "关于我",
    education: "教育经历",
    experience: "工作经历",
    projects: "项目",
    projectWebsite: "官网",
    projectCode: "代码",
    projectStack: "主要技术栈",
    rights: "保留所有权利。",
    avatarAlt: "头像",
    wechatQrTitle: "扫码添加微信",
    qrClose: "关闭",
    resumeDownload: "下载简历"
  },
  aboutHtml: [
    `我是 <strong>${M}</strong>，AI 产品经理，目前就职于上海朝阳永续信息技术股份有限公司。`,
    "我的工作与兴趣集中在金融 AI、AI Agent、大语言模型产品，以及人机交互与软件工程。"
  ],
  resume: null,
  social: [
    { href: g.email, title: "邮箱", icon: "email" },
    {
      title: "微信",
      icon: "wechat",
      qrSrc: O
    },
    { href: g.github, title: "GitHub", icon: "github" },
    {
      href: g.linkedin,
      title: "LinkedIn",
      icon: "linkedin"
    },
    { href: g.blog, title: "博客", icon: "blog" }
  ],
  education: [
    {
      logo: Q,
      logoAlt: "院校标志",
      title: "伊利诺伊大学厄巴纳-香槟分校",
      details: ["硕士，计算机科学"],
      period: "2024 - 2026"
    },
    {
      logo: _,
      logoAlt: "院校标志",
      title: "温州肯恩大学",
      details: ["本科，计算机科学"],
      period: "2020 - 2024"
    }
  ],
  experience: [
    {
      logo: K,
      logoAlt: "公司标志",
      title: "上海朝阳永续信息技术股份有限公司",
      details: ["AI 产品经理"],
      period: "2026 - 至今"
    }
  ],
  projects: [
    {
      name: "项目名称",
      version: "v1.0.0",
      period: "2024 - 2025",
      summary: "一句话介绍这个项目做什么、为什么重要。",
      stack: "TypeScript, React, Vite",
      website: "#",
      code: "https://github.com/yourname/project-name"
    },
    {
      name: "另一个项目",
      version: "v0.9.0",
      period: "2023 - 2024",
      summary: "再写一句这个项目的核心能力和使用场景。",
      stack: "Python, FastAPI, PostgreSQL",
      website: "#",
      code: "https://github.com/yourname/another-project"
    }
  ],
  copyrightYear: 2026
}, ce = [
  "email",
  "wechat",
  "github",
  "linkedin",
  "blog",
  "douyin",
  "xiaohongshu",
  "x",
  "instagram",
  "bilibili",
  "youtube"
], G = [
  "home",
  "themeToggle",
  "languageToggle",
  "languageButton",
  "about",
  "education",
  "experience",
  "projects",
  "projectWebsite",
  "projectCode",
  "projectStack",
  "rights",
  "avatarAlt",
  "wechatQrTitle",
  "qrClose",
  "resumeDownload"
];
class d extends Error {
  constructor(t) {
    super(t), this.name = "ContentError";
  }
}
const le = ["./img/", "./uploads/"];
function J() {
  return de(se, ae);
}
function de(e, t) {
  return {
    revision: 0,
    name: { zh: e.name, en: t.name },
    email: e.email,
    pageTitle: { zh: e.pageTitle, en: t.pageTitle },
    description: { zh: e.description, en: t.description },
    keywords: { zh: e.keywords, en: t.keywords },
    avatar: Z(e.avatar || t.avatar),
    copyrightYear: e.copyrightYear,
    ui: { zh: V(e.ui), en: V(t.ui) },
    social: pe(e.social, t.social),
    education: B(e.education, t.education, "education"),
    about: {
      zh: P(e.aboutHtml),
      en: P(t.aboutHtml)
    },
    resume: { zh: e.resume, en: t.resume },
    experience: B(e.experience, t.experience, "experience"),
    projects: ge(e.projects, t.projects)
  };
}
function ue(e, t) {
  return {
    name: e.name[t],
    email: e.email,
    pageTitle: e.pageTitle[t],
    description: e.description[t],
    keywords: e.keywords[t],
    avatar: e.avatar.url,
    ui: {
      htmlLang: t === "zh" ? "zh-CN" : "en",
      ...e.ui[t]
    },
    aboutHtml: e.about[t],
    resume: e.resume[t],
    social: e.social.map((n) => fe(n, t)),
    education: e.education.map((n) => W(n, t)),
    experience: e.experience.map((n) => W(n, t)),
    projects: e.projects.map((n) => ve(n, t)),
    copyrightYear: e.copyrightYear
  };
}
function me(e) {
  const t = C(e, "内容");
  return {
    revision: $e(t.revision),
    name: h(t.name, "姓名"),
    email: p(t.email, "邮箱", 200),
    pageTitle: h(t.pageTitle, "页面标题"),
    description: h(t.description, "页面描述"),
    keywords: h(t.keywords, "关键词"),
    avatar: we(t.avatar, "头像"),
    copyrightYear: ye(t.copyrightYear),
    ui: {
      zh: D(t.ui, "zh", "中文界面文案"),
      en: D(t.ui, "en", "英文界面文案")
    },
    social: Le(t.social),
    education: N(t.education, "教育经历"),
    about: {
      zh: T(y(t.about, "关于我").zh, "关于我（中文）"),
      en: T(y(t.about, "关于我").en, "关于我（英文）")
    },
    resume: {
      zh: L(y(t.resume, "简历").zh, "中文简历"),
      en: L(y(t.resume, "简历").en, "英文简历")
    },
    experience: N(t.experience, "工作经历"),
    projects: xe(t.projects)
  };
}
function V(e) {
  const t = {};
  for (const n of G)
    t[n] = e[n];
  return t;
}
function P(e) {
  return e.filter((t) => !he(t));
}
function he(e) {
  const t = e.replace(/<[^>]+>/g, "").trim();
  return t === "下载简历" || t === "Download CV";
}
function Z(e) {
  return { fileName: e.split("/").pop() || "file", url: e };
}
function pe(e, t) {
  const n = Math.max(e.length, t.length);
  return Array.from({ length: n }, (o, i) => {
    const a = e[i], s = t[i], c = a?.qrSrc || s?.qrSrc || "";
    return {
      id: `social-${i + 1}`,
      icon: be(a?.icon ?? s?.icon),
      title: { zh: a?.title ?? "", en: s?.title ?? "" },
      href: a?.href ?? s?.href ?? "",
      qr: c ? Z(c) : null,
      qrTitle: { zh: "", en: "" },
      kind: (a?.icon ?? s?.icon) === "wechat" ? "qr" : "link",
      visible: !0
    };
  });
}
function B(e, t, n) {
  const o = Math.max(e.length, t.length);
  return Array.from({ length: o }, (i, a) => {
    const s = e[a], c = t[a], l = s?.logo || c?.logo || "", u = Ce(s?.details ?? [], c?.details ?? []);
    return {
      id: `${n}-${a + 1}`,
      logo: l ? Z(l) : null,
      logoAlt: { zh: s?.logoAlt ?? "", en: c?.logoAlt ?? "" },
      title: { zh: s?.title ?? "", en: c?.title ?? "" },
      details: u,
      period: { zh: s?.period ?? "", en: c?.period ?? "" },
      visible: !0
    };
  });
}
function ge(e, t) {
  const n = Math.max(e.length, t.length);
  return Array.from({ length: n }, (o, i) => {
    const a = e[i], s = t[i];
    return {
      id: `project-${i + 1}`,
      name: { zh: a?.name ?? "", en: s?.name ?? "" },
      version: a?.version || s?.version || "",
      period: { zh: a?.period ?? "", en: s?.period ?? "" },
      summary: { zh: a?.summary ?? "", en: s?.summary ?? "" },
      stack: { zh: a?.stack ?? "", en: s?.stack ?? "" },
      website: a?.website ?? s?.website ?? "",
      code: a?.code ?? s?.code ?? "",
      visible: !0
    };
  });
}
function Ce(e, t) {
  const n = Math.max(e.length, t.length);
  return {
    zh: Array.from({ length: n }, (o, i) => e[i] ?? ""),
    en: Array.from({ length: n }, (o, i) => t[i] ?? "")
  };
}
function fe(e, t) {
  const n = e.title[t].trim() || (e.kind === "qr" ? t === "zh" ? "二维码" : "QR code" : t === "zh" ? "链接" : "Link"), o = e.kind === "qr" ? e.qrTitle[t].trim() || n : void 0;
  return {
    title: n,
    icon: e.icon,
    href: e.kind === "qr" ? void 0 : e.href || void 0,
    qrSrc: e.kind === "link" ? void 0 : e.qr?.url,
    qrCaption: o,
    visible: e.visible
  };
}
function W(e, t) {
  return {
    logo: e.logo?.url ?? "",
    logoAlt: e.logoAlt[t],
    title: e.title[t],
    details: e.details[t].map((n) => n.trim()).filter(Boolean),
    period: e.period[t],
    visible: e.visible
  };
}
function ve(e, t) {
  return {
    name: e.name[t],
    version: e.version,
    period: e.period[t],
    summary: e.summary[t],
    stack: e.stack[t],
    website: e.website.trim() || void 0,
    code: e.code.trim() || void 0,
    visible: e.visible
  };
}
function be(e) {
  return e && X(e) ? e : "blog";
}
function X(e) {
  return ce.includes(e);
}
function C(e, t) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new d(`${t}格式不正确`);
  return e;
}
function p(e, t, n = 4e3) {
  if (typeof e != "string")
    throw new d(`${t}必须是文本`);
  if (e.length > n)
    throw new d(`${t}过长`);
  return e;
}
function h(e, t, n = 4e3) {
  const o = y(e, t);
  return {
    zh: p(o.zh, `${t}（中文）`, n),
    en: p(o.en, `${t}（英文）`, n)
  };
}
function y(e, t) {
  return C(e, t);
}
function T(e, t) {
  if (!Array.isArray(e))
    throw new d(`${t}格式不正确`);
  if (e.length > 40)
    throw new d(`${t}条目过多`);
  return e.map((n, o) => p(n, `${t}第 ${o + 1} 项`));
}
function $e(e) {
  if (e === void 0)
    return 0;
  if (typeof e != "number" || !Number.isInteger(e) || e < 0 || e > 1e9)
    throw new d("内容版本无效");
  return e;
}
function ye(e) {
  if (typeof e != "number" || !Number.isInteger(e) || e < 1900 || e > 2200)
    throw new d("版权年份无效");
  return e;
}
function we(e, t) {
  const n = L(e, t);
  if (!n)
    throw new d(`${t}不能为空`);
  return n;
}
function L(e, t) {
  if (e == null)
    return null;
  const n = C(e, t), o = p(n.url, `${t}地址`, 2e3).trim(), i = p(n.fileName, `${t}文件名`, 180).trim();
  if (!i || !Ae(o))
    throw new d(`${t}路径无效`);
  return { fileName: i, url: o };
}
function Ae(e) {
  return e.includes("..") || e.includes("\\") || e.includes("\0") ? !1 : le.some((t) => e.startsWith(t));
}
function D(e, t, n) {
  const o = C(C(e, "界面文案")[t], n), i = {};
  for (const a of G)
    i[a] = p(o[a], `${n}（${a}）`, 200);
  return i;
}
function Le(e) {
  return H(e, "社交链接", 40).map((t) => {
    const n = C(t, "社交链接");
    return {
      id: I(n.id),
      icon: Te(n.icon),
      title: h(n.title, "社交名称", 120),
      href: S(n.href, "社交链接"),
      qr: L(n.qr, "二维码"),
      qrTitle: n.qrTitle === void 0 ? { zh: "", en: "" } : h(n.qrTitle, "弹窗标题", 200),
      kind: ke(n.kind, n.icon),
      visible: j(n.visible, "展示状态", !0)
    };
  });
}
function ke(e, t) {
  return e === "link" || e === "qr" ? e : t === "wechat" ? "qr" : "link";
}
function j(e, t, n) {
  if (e === void 0)
    return n;
  if (typeof e != "boolean")
    throw new d(`${t}必须是布尔值`);
  return e;
}
function N(e, t) {
  return H(e, t, 40).map((n) => {
    const o = C(n, t), i = y(o.details, `${t}说明`);
    return {
      id: I(o.id),
      logo: L(o.logo, `${t}标志`),
      logoAlt: h(o.logoAlt, `${t}标志说明`, 200),
      title: h(o.title, `${t}标题`),
      details: {
        zh: T(i.zh, `${t}说明（中文）`),
        en: T(i.en, `${t}说明（英文）`)
      },
      period: h(o.period, `${t}时间`, 120),
      visible: j(o.visible, `${t}展示状态`, !0)
    };
  });
}
function xe(e) {
  return H(e, "项目", 40).map((t) => {
    const n = C(t, "项目");
    return {
      id: I(n.id),
      name: h(n.name, "项目名称", 200),
      version: p(n.version, "项目版本", 80),
      period: h(n.period, "项目时间", 120),
      summary: h(n.summary, "项目简介"),
      stack: h(n.stack, "技术栈", 400),
      website: S(n.website, "项目官网"),
      code: S(n.code, "项目代码"),
      visible: j(n.visible, "项目展示状态", !0)
    };
  });
}
function H(e, t, n) {
  if (!Array.isArray(e))
    throw new d(`${t}格式不正确`);
  if (e.length > n)
    throw new d(`${t}条目过多`);
  return e;
}
function I(e) {
  const t = p(e, "条目编号", 80).trim();
  if (!t)
    throw new d("条目编号不能为空");
  return t;
}
function Te(e) {
  if (typeof e == "string" && X(e))
    return e;
  throw new d("社交图标无效");
}
function S(e, t) {
  const n = p(e, t, 2e3).trim();
  if (!n || n.startsWith("#"))
    return n;
  try {
    const o = new URL(n);
    if (o.protocol === "http:" || o.protocol === "https:" || o.protocol === "mailto:")
      return n;
  } catch {
  }
  throw new d(`${t}无效`);
}
const ee = "locale";
function qe() {
  const e = localStorage.getItem(ee);
  return e === "en" || e === "zh" ? e : navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}
function Ee(e) {
  localStorage.setItem(ee, e);
}
function Me(e) {
  return e === "en" ? "zh" : "en";
}
function Se(e) {
  document.getElementById("localeToggle")?.addEventListener("click", e);
}
function Ze(e) {
  document.documentElement.lang = e.ui.htmlLang, document.title = e.pageTitle, document.querySelector('meta[name="description"]')?.setAttribute("content", e.description), document.querySelector('meta[name="keywords"]')?.setAttribute("content", e.keywords);
}
const je = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
function He(e) {
  const t = document.activeElement instanceof HTMLElement ? document.activeElement : null, n = (o) => {
    if (o.key !== "Tab")
      return;
    const i = [...e.querySelectorAll(je)].filter((c) => !c.hasAttribute("disabled") && c.getAttribute("aria-hidden") !== "true" && !c.closest("[hidden]"));
    if (i.length === 0) {
      o.preventDefault(), e.focus();
      return;
    }
    const a = i[0], s = i[i.length - 1];
    o.shiftKey && document.activeElement === a ? (o.preventDefault(), s.focus()) : !o.shiftKey && document.activeElement === s && (o.preventDefault(), a.focus());
  };
  return document.addEventListener("keydown", n, !0), () => {
    document.removeEventListener("keydown", n, !0), t?.isConnected && t.focus();
  };
}
function Ie(e) {
  const t = document.getElementById("qrModal"), n = document.getElementById("qrModalImage"), o = document.getElementById("qrModalTitle"), i = t?.querySelector(".qr-modal-dialog");
  if (!(t instanceof HTMLElement) || !(n instanceof HTMLImageElement) || !(o instanceof HTMLElement) || !(i instanceof HTMLElement))
    return () => {
    };
  const a = t, s = n, c = o, l = i;
  let u = !1, v;
  function b(m) {
    m.key === "Escape" && (m.preventDefault(), $());
  }
  function k(m, f) {
    s.src = m, s.alt = f, c.textContent = f, a.removeAttribute("hidden"), u = !0, v?.(), v = He(l), document.addEventListener("keydown", b), l.querySelector(".qr-modal-close")?.focus();
  }
  function $() {
    !u && a.hasAttribute("hidden") || (a.setAttribute("hidden", ""), u = !1, document.removeEventListener("keydown", b), v?.(), v = void 0);
  }
  function x(m) {
    const f = m.currentTarget;
    if (!(f instanceof HTMLElement))
      return;
    m.preventDefault();
    const z = f.getAttribute("data-qr"), re = f.getAttribute("data-qr-title") || f.getAttribute("title") || e;
    z && k(z, re);
  }
  const q = [...document.querySelectorAll("[data-qr]")];
  return q.forEach((m) => {
    m.addEventListener("click", x);
  }), a.querySelectorAll("[data-qr-close]").forEach((m) => {
    m.addEventListener("click", $);
  }), () => {
    $(), q.forEach((m) => {
      m.removeEventListener("click", x);
    });
  };
}
const ze = /* @__PURE__ */ new Set(["strong", "em", "a", "br"]), Ve = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/g;
function r(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Pe(e) {
  return /^https?:\/\//i.test(e.trim());
}
function Be(e) {
  const t = e.trim();
  if (t.startsWith("#"))
    return !0;
  try {
    const n = new URL(t);
    return n.protocol === "http:" || n.protocol === "https:" || n.protocol === "mailto:";
  } catch {
    return !1;
  }
}
function A(e) {
  const t = `href="${r(e)}"`;
  return Pe(e) ? `${t} target="_blank" rel="noopener noreferrer"` : t;
}
function We(e, t) {
  const o = new RegExp(`(?:^|\\s)${t}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'>]+))`, "i").exec(e);
  return o ? o[1] ?? o[2] ?? o[3] ?? "" : "";
}
function te(e) {
  let t = "", n = 0, o = 0;
  for (const i of e.matchAll(Ve)) {
    const a = i.index ?? 0;
    t += r(e.slice(n, a)), n = a + i[0].length;
    const s = i[1] === "/", c = i[2].toLowerCase(), l = i[3] ?? "";
    if (ze.has(c)) {
      if (c === "br") {
        s || (t += "<br>");
        continue;
      }
      if (c === "a") {
        if (s) {
          o > 0 ? o -= 1 : t += "</a>";
          continue;
        }
        const u = We(l, "href");
        if (!u || !Be(u)) {
          o += 1;
          continue;
        }
        t += `<a ${A(u)}>`;
        continue;
      }
      t += s ? `</${c}>` : `<${c}>`;
    }
  }
  return t += r(e.slice(n)), t;
}
const De = {
  email: '<path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm1.7.5 7.05 5.1a.5.5 0 0 0 .5 0L19.3 6H4.7Zm14.8 1.38-6.72 4.86a2 2 0 0 1-2.16 0L3.9 7.88V18.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.88Z"/>',
  wechat: '<path d="M9.4 4.5c-3.86 0-7 2.7-7 6.03 0 1.9 1.04 3.6 2.66 4.72l-.66 2.26 2.5-1.4c.76.22 1.58.34 2.44.34.28 0 .55-.02.82-.05A5.7 5.7 0 0 0 9.5 15.1c-3.2 0-5.8-2.28-5.8-5.1S6.3 4.9 9.5 4.9c.3 0 .6.02.88.06A6.8 6.8 0 0 0 9.4 4.5Zm-.9 3.15a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Zm3.7 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8ZM16.1 9.4c-3.5 0-6.35 2.46-6.35 5.5s2.85 5.5 6.35 5.5c.7 0 1.38-.1 2.02-.28l2.18 1.22-.56-1.94c1.38-.98 2.26-2.46 2.26-4.1 0-3.04-2.85-5.4-6.9-5.4Zm-1.55 4.05a.78.78 0 1 1 0 1.56.78.78 0 0 1 0-1.56Zm3.2 0a.78.78 0 1 1 0 1.56.78.78 0 0 1 0-1.56Z"/>',
  github: '<path d="M12 .3C5.37.3 0 5.67 0 12.3c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.3 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.82.58C20.56 22.1 24 17.6 24 12.3 24 5.67 18.63.3 12 .3Z"/>',
  linkedin: '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.24.8 24 1.77 24h20.45c.98 0 1.78-.76 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>',
  blog: '<path d="M5.5 4A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4h-13Zm1 3.25h11v1.5h-11v-1.5Zm0 3.5h11v1.5h-11v-1.5Zm0 3.5h7.5v1.5H6.5v-1.5Z"/>',
  douyin: '<path d="M14.1 2.4c.5 2.7 2.1 4.4 4.7 4.9v2.7c-1.6.1-3-.3-4.4-1.2v5.8c0 3.6-2.6 6.2-6.1 6.2A5.7 5.7 0 0 1 2.6 15c0-3.2 2.5-5.6 5.8-5.6.4 0 .9 0 1.3.1v2.9a3 3 0 0 0-1.2-.3c-1.7 0-3 1.3-3 3.1 0 1.7 1.3 3 3.1 3 1.9 0 3.2-1.3 3.2-3.3V2.4h2.3Z"/>',
  x: '<path d="M3.2 3.4h4.2l4.4 6.1 4.6-6.1h4.2l-6.8 8.7 7.3 8.5h-4.2l-4.9-6.5-5.1 6.5H2.7l7.2-9L3.2 3.4Z"/>',
  instagram: '<path fill-rule="evenodd" d="M7.2 2.6h9.6a4.6 4.6 0 0 1 4.6 4.6v9.6a4.6 4.6 0 0 1-4.6 4.6H7.2a4.6 4.6 0 0 1-4.6-4.6V7.2a4.6 4.6 0 0 1 4.6-4.6Zm9.5 2.3a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3ZM12 7.3a4.7 4.7 0 1 0 .01 9.41A4.7 4.7 0 0 0 12 7.3Zm0 1.9a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z"/>',
  bilibili: '<path fill-rule="evenodd" d="M8.1 5.2 6.4 3.2 7.8 2l2.2 2.5h4L16.2 2l1.4 1.2-1.7 2H18a2.4 2.4 0 0 1 2.4 2.4v9.2A2.4 2.4 0 0 1 18 19.2H6A2.4 2.4 0 0 1 3.6 16.8V7.6A2.4 2.4 0 0 1 6 5.2h2.1ZM8.3 10.2a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Zm7.4 0a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Z"/>',
  youtube: '<path fill-rule="evenodd" d="M4.4 6h15.2A2.4 2.4 0 0 1 22 8.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 15.6V8.4A2.4 2.4 0 0 1 4.4 6Zm5.3 2.2 6 3.8-6 3.8V8.2Z"/>',
  globe: '<path fill-rule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5ZM3.75 12a8.25 8.25 0 0 1 7.5-8.21V6.5a.75.75 0 0 0 1.5 0V3.79A8.25 8.25 0 0 1 20.2 11.25h-2.7a.75.75 0 0 0 0 1.5h2.7a8.25 8.25 0 0 1-7.45 7.46V17.5a.75.75 0 0 0-1.5 0v2.71A8.25 8.25 0 0 1 3.8 12.75h2.7a.75.75 0 0 0 0-1.5h-2.7A8.28 8.28 0 0 1 3.75 12Zm5.9-4.13a6.76 6.76 0 0 1 4.7 0 6.7 6.7 0 0 1 0 8.26 6.76 6.76 0 0 1-4.7 0 6.7 6.7 0 0 1 0-8.26Z"/>',
  moon: '<path d="M17.63 15.4A7.75 7.75 0 0 1 8.6 6.37 7.75 7.75 0 1 0 17.63 15.4Z"/>',
  sun: '<path d="M12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM12 1.5a.75.75 0 0 1 .75.75V4a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5Zm0 16a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V18.25a.75.75 0 0 1 .75-.75Zm10.5-6.25a.75.75 0 0 1-.75.75H20a.75.75 0 0 1 0-1.5h1.75a.75.75 0 0 1 .75.75ZM5.5 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h1.75A.75.75 0 0 1 5.5 12Zm12.48-6.98a.75.75 0 0 1 0 1.06l-1.24 1.24a.75.75 0 1 1-1.06-1.06l1.24-1.24a.75.75 0 0 1 1.06 0ZM8.32 15.68a.75.75 0 0 1 0 1.06l-1.24 1.24a.75.75 0 1 1-1.06-1.06l1.24-1.24a.75.75 0 0 1 1.06 0Zm9.72 1.06a.75.75 0 0 1-1.06 0l-1.24-1.24a.75.75 0 0 1 1.06-1.06l1.24 1.24a.75.75 0 0 1 0 1.06ZM8.32 8.32a.75.75 0 0 1-1.06 0L6.02 7.08A.75.75 0 0 1 7.08 6.02l1.24 1.24a.75.75 0 0 1 0 1.06Z"/>',
  close: '<path d="M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 0 1 0-1.06Z"/>'
}, Ne = '<path d="M224 0H64C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128H224C259.346 128 288 99.3462 288 64C288 28.6538 259.346 0 224 0Z" fill="#FF2442"/><path fill-rule="evenodd" clip-rule="evenodd" d="M223.226 48.1668C223.234 48.2468 223.288 48.2956 223.366 48.3016C223.49 48.3112 223.615 48.3136 223.741 48.3136C224.67 48.3148 225.6 48.314 226.53 48.314C227.407 48.314 228.283 48.3116 229.16 48.3152C229.591 48.3176 230.018 48.266 230.436 48.1732C233.677 47.456 235.696 44.3016 234.988 41.058C234.357 38.1735 231.624 36.0168 228.382 36.4459C225.394 36.8406 223.236 39.34 223.214 42.3704C223.202 44.1956 223.212 46.0208 223.213 47.846C223.213 47.9524 223.217 48.0604 223.226 48.1668ZM137.327 84.0584C135.813 84.064 127.228 84.0876 124.747 84.074C122.88 84.0632 120.828 83.7424 119.032 83.14C118.94 83.1092 118.84 83.1524 118.8 83.2412L113.462 94.8016C113.422 94.8916 113.456 94.9972 113.543 95.0444C114.37 95.4916 116.047 95.9696 117.236 95.9696C118.13 95.964 118.061 95.9972 118.956 95.996C122.438 95.9908 131.002 95.9716 132.019 95.9696C132.094 95.9696 132.16 95.9252 132.19 95.8576L137.5 84.3224C137.556 84.1984 137.464 84.058 137.327 84.0584ZM70.6156 48.3916C70.5084 48.3876 70.4016 48.39 70.294 48.39C66.7168 48.39 63.1396 48.3892 59.5632 48.3916C59.4312 48.3916 59.194 48.3892 59.0672 48.4096C59.0072 48.4188 58.996 48.448 58.9884 48.4664C58.9728 48.5064 58.94 48.8504 58.924 49.0616C58.8344 50.2564 58.7516 51.452 58.6604 52.6464C58.5772 53.7348 58.482 54.8216 58.3964 55.9092C58.3072 57.0504 58.224 58.192 58.1352 59.3332C58.0452 60.5104 57.9504 61.6868 57.86 62.864C57.7692 64.0588 57.6832 65.254 57.5916 66.4488C57.5064 67.5544 57.4156 68.6592 57.3292 69.7656C57.2736 70.4788 57.2056 71.1912 57.17 71.9056C57.0816 73.6964 56.9152 74.8068 56.1636 76.434C55.9688 76.8568 55.916 76.7456 56.184 77.2736C56.5304 77.9572 61.2732 88.634 62.062 90.2512C62.1192 90.3688 62.144 90.4032 62.1852 90.4032C62.2452 90.4032 62.4316 90.2156 62.5388 90.0792C63.6372 88.6804 64.5384 87.1592 65.308 85.5588C66.4284 83.23 67.2552 80.7956 67.8912 78.2944C68.35 76.4908 68.7072 74.666 68.9384 72.8188C69.0404 72.0028 69.0944 71.1812 69.1592 70.3608C69.3136 68.418 69.4592 66.4736 69.6108 64.53C69.7448 62.8184 69.8836 61.1076 70.0164 59.396C70.1124 58.1476 70.198 56.8984 70.2952 55.65C70.4192 54.0456 70.5524 52.4416 70.6796 50.8364C70.738 50.1056 70.7924 49.3748 70.8492 48.6436C70.8652 48.4336 70.836 48.4004 70.6156 48.3916ZM113.319 76.434C112.568 74.8068 112.401 73.6964 112.312 71.9056C112.277 71.1912 112.21 70.4788 112.154 69.7656C112.067 68.6592 111.976 67.5544 111.891 66.4488C111.8 65.254 111.714 64.0588 111.622 62.864C111.533 61.6868 111.438 60.5104 111.347 59.3332C111.259 58.192 111.176 57.0504 111.086 55.9092C111.001 54.8216 110.906 53.7348 110.822 52.6464C110.731 51.452 110.649 50.2564 110.558 49.0616C110.542 48.8504 110.521 48.5412 110.488 48.4496C110.454 48.3684 110.096 48.3916 109.92 48.3916C106.343 48.3892 102.766 48.39 99.1888 48.39C99.082 48.39 98.9744 48.3876 98.8672 48.3916C98.6468 48.4004 98.6176 48.4336 98.6344 48.6436C98.69 49.3748 98.7448 50.1056 98.8032 50.8364C98.9308 52.4416 99.0632 54.0456 99.1876 55.65C99.2852 56.8984 99.37 58.1476 99.4664 59.396C99.5988 61.1076 99.7388 62.8184 99.8716 64.53C100.024 66.4736 100.17 68.418 100.324 70.3608C100.388 71.1812 100.442 72.0028 100.545 72.8188C100.775 74.666 101.132 76.4908 101.591 78.2944C102.228 80.7956 103.054 83.23 104.175 85.5588C104.945 87.1592 105.846 88.6804 106.944 90.0792C107.052 90.2156 107.217 90.4612 107.301 90.4444C107.346 90.4356 107.353 90.3888 107.395 90.3032C108.101 88.8796 112.948 77.9656 113.299 77.2736C113.567 76.7456 113.514 76.8568 113.319 76.434ZM142.142 69.6188H135.631C134.946 69.6188 134.488 68.9168 134.767 68.2936L143.555 48.7004C143.611 48.5764 143.519 48.436 143.382 48.436L133.549 48.4152C132.743 48.4136 132.207 47.586 132.538 46.8548L139.079 32.2657C139.135 32.1408 139.044 32.0005 138.907 32.0005C137.403 31.9999 130.479 31.9994 127.257 32.0017C127.182 32.0017 127.117 32.0455 127.086 32.113L120.173 47.5496C119.47 48.9568 118.794 50.378 118.184 51.8284C117.81 52.7192 117.46 53.6176 117.196 54.5488C117.062 55.0184 117.005 55.4896 117.045 55.9784C117.144 57.2076 117.703 58.1492 118.756 58.7944C119.062 58.9816 119.385 59.1348 119.724 59.252C120.524 59.5296 121.346 59.6828 122.194 59.6824C123.965 59.6812 124.826 59.6812 126.597 59.6828C126.771 59.6836 122.236 69.6152 121.419 71.5428C121.021 72.4796 120.648 73.4248 120.368 74.4056C120.248 74.8236 120.182 75.2572 120.204 75.6912C120.269 76.9972 120.828 77.9904 121.92 78.6584C122.242 78.8556 122.582 79.0132 122.938 79.1344C123.757 79.4148 124.598 79.5524 125.465 79.5512C129.166 79.5468 133.814 79.5492 137.516 79.5492C137.578 79.5492 137.733 79.5464 137.851 79.5468C137.926 79.5468 137.994 79.5036 138.024 79.4356L142.314 69.884C142.37 69.7588 142.279 69.6188 142.142 69.6188ZM90.4048 32.7782L79.1372 32.7835C79.0036 32.7835 78.8948 32.8895 78.8948 33.0232C78.8864 35.8611 78.81 63.2364 78.81 77.0512V83.9988C78.81 86.142 76.8096 85.95 76.72 85.95H71.5784C71.4536 85.95 71.328 85.9476 71.2028 85.9508C70.9008 85.9596 70.8764 85.9792 70.8972 86.304C70.9144 86.5776 74.3732 94.24 75.0448 95.7256C75.114 95.8788 75.2624 95.9752 75.4308 95.9776C76.598 95.9932 81.1552 96.0404 82.4308 95.8736C83.5732 95.7248 84.6728 95.4232 85.6988 94.8864C87.9308 93.7188 89.362 91.758 90.1408 89.178C90.53 87.8884 90.6972 86.5424 90.6988 85.196C90.708 76.6444 90.7024 68.0928 90.7024 59.5408C90.702 51.368 90.6544 35.1722 90.6484 33.0173C90.648 32.8836 90.5384 32.7782 90.4048 32.7782ZM178.365 84.2504C178.36 84.1424 178.29 84.0904 178.192 84.0864C178.031 84.08 177.87 84.0816 177.709 84.0816H167.625C167.5 84.0816 167.375 84.0832 167.25 84.0812C166.893 84.074 166.892 84.072 166.884 83.7212C166.882 83.614 166.884 83.5064 166.884 83.3992V48.9368C166.884 48.398 166.846 48.4088 167.409 48.4124C167.516 48.4136 171.68 48.4124 173.844 48.4128C174.434 48.4128 174.402 48.4484 174.402 47.866C174.402 44.27 174.402 40.6728 174.402 37.0768C174.402 36.4624 174.452 36.511 173.813 36.511C164.977 36.511 156.52 36.511 147.685 36.511C147.204 36.511 147.127 36.463 147.127 37.0543C147.127 40.6508 147.127 44.2476 147.128 47.844C147.128 48.4572 147.079 48.4128 147.716 48.4128C149.97 48.4128 151.845 48.4124 154.098 48.4128C154.657 48.4128 154.619 48.3864 154.622 48.9368V49.044C154.622 60.5136 154.622 71.9832 154.622 83.4524C154.622 84.1568 154.676 84.0804 153.985 84.0804C151.22 84.0824 145.706 84.0616 144.25 84.0828C143.89 84.0876 143.803 84.306 143.803 84.306L138.598 95.6372C138.598 95.6372 138.494 95.8284 138.54 95.9068C138.588 95.9848 138.638 95.9688 138.974 95.9692C140.882 95.9724 147.57 95.9836 151.601 95.9836H177.623C177.784 95.9836 177.945 95.9872 178.106 95.982C178.324 95.9736 178.361 95.938 178.371 95.7368C178.376 95.6476 178.374 95.558 178.374 95.4688C178.374 91.8364 178.374 88.204 178.374 84.5716C178.374 84.464 178.371 84.3568 178.365 84.2504ZM209.544 58.6488C209.539 58.7476 209.49 58.8188 209.385 58.8288C209.278 58.8388 209.171 58.8448 209.064 58.8448C207.332 58.8452 203.656 58.8612 201.924 58.8608C201.834 58.8608 201.746 58.858 201.657 58.8512C201.553 58.8436 201.494 58.7796 201.488 58.6796C201.48 58.5376 201.482 58.3944 201.482 58.2516L201.414 48.9508C201.406 48.4152 201.374 48.4236 201.932 48.4248C203.111 48.4276 206.233 48.4096 207.412 48.4096C207.716 48.41 208.016 48.4248 208.311 48.5212C209.046 48.7628 209.469 49.2784 209.539 50.0452C209.55 50.1696 209.548 50.2952 209.548 50.42C209.549 52.8676 209.549 55.8804 209.549 58.3276C209.549 58.4348 209.55 58.5424 209.544 58.6488ZM234.878 67.9296C234.246 64.5964 232.484 62.0776 229.474 60.4724C227.415 59.3744 225.2 58.8704 222.878 58.8128C222.431 58.8016 221.984 58.814 221.536 58.8088C221.244 58.8052 221.234 58.7904 221.224 58.508C221.222 58.418 221.223 58.3288 221.223 58.2392C221.223 55.8952 221.222 52.986 221.224 50.6424C221.224 49.6572 221.174 48.6752 221.039 47.6988C220.849 46.326 220.488 45.0028 219.897 43.7464C218.802 41.4144 217.095 39.6608 214.84 38.441C212.516 37.1845 210.018 36.5725 207.383 36.5169C206.238 36.4926 203.15 36.524 202.004 36.5222C201.488 36.5216 201.496 36.5482 201.496 36.0351C201.498 35.1758 201.498 33.3896 201.497 32.3562C201.497 32.2485 201.481 32.1722 201.418 32.1088C201.357 32.0491 201.158 32.0603 201.158 32.0603L189.82 32.0638C189.82 32.0638 189.699 32.0579 189.648 32.113C189.601 32.1621 189.585 32.2059 189.585 32.2858C189.585 33.2742 189.585 35.087 189.585 35.9316C189.585 36.0748 189.584 36.218 189.576 36.3606C189.57 36.4654 189.503 36.5175 189.402 36.521C189.259 36.5258 189.116 36.5264 188.973 36.5264C186.755 36.527 184.538 36.527 182.319 36.527C182.176 36.527 182.033 36.524 181.89 36.5299C181.724 36.5376 181.68 36.5856 181.672 36.7637C181.666 36.8886 181.669 37.014 181.669 37.1395C181.669 40.7008 181.669 44.2612 181.669 47.8216C181.668 48.494 181.638 48.4272 182.278 48.4276C184.55 48.4288 186.821 48.4276 189.093 48.4284C189.707 48.4284 189.63 49.3824 189.63 49.3824L189.623 57.4344L189.623 57.9512C189.623 57.9512 189.652 58.826 189.173 58.826C188.989 58.826 188.61 58.826 188.426 58.826C185.034 58.8276 181.497 58.8272 178.122 58.8264C177.616 58.8264 177.674 59.4412 177.674 59.4412V60.1248V69.666V70.2252C177.674 70.2252 177.595 70.732 178.15 70.732C181.691 70.7348 185.482 70.7332 189.024 70.7336C189.638 70.7336 189.592 70.686 189.593 71.3216V76.3136C189.593 82.8632 189.592 88.8464 189.593 95.396C189.593 96.0512 189.539 95.9988 190.202 95.9988C193.762 95.9996 197.32 95.9996 200.88 95.9988C201.546 95.9988 201.488 96.0516 201.489 95.396C201.489 91.2984 201.489 87.2012 201.489 83.1028V71.4292C201.489 71.286 201.485 71.142 201.49 70.9996C201.498 70.7848 201.535 70.7444 201.735 70.736C201.878 70.7304 202.021 70.7336 202.164 70.7336C204.49 70.7332 208.759 70.7176 211.084 70.7176C213.748 70.7176 216.414 70.7184 219.078 70.7176C219.804 70.7176 220.502 70.8616 221.157 71.1724C222.437 71.7784 223.1 72.8124 223.208 74.212C223.234 74.5504 223.231 74.8916 223.231 75.2312C223.232 78.7208 223.233 79.5684 223.231 83.0576C223.231 84.9876 222.431 85.7968 220.77 85.7968C217.265 85.7992 215.664 85.798 212.159 85.798C211.998 85.798 211.836 85.7952 211.676 85.8004C211.507 85.8068 211.464 85.8532 211.47 86.0364C211.474 86.1976 214.967 94.1212 215.679 95.6896C215.691 95.7172 215.702 95.7428 215.713 95.7664C215.767 95.884 215.883 95.96 216.012 95.9624C216.052 95.9636 216.097 95.964 216.147 95.9652C216.821 95.9772 218.368 95.9996 219.83 95.982C220.942 95.9684 223.688 96.0116 224.796 95.9096C225.832 95.8148 226.854 95.6488 227.848 95.3456C232.245 94.0076 235.116 90.1408 235.119 85.5464C235.122 80.4288 235.117 75.8764 235.122 70.758C235.122 69.8068 235.056 68.864 234.878 67.9296Z" fill="white"/>';
function w(e) {
  return e === "xiaohongshu" ? `<svg class="icon icon-xiaohongshu" viewBox="0 0 288 128" aria-hidden="true" focusable="false">${Ne}</svg>` : `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${De[e]}</svg>`;
}
function Re(e, t) {
  return e.map((o, i) => {
    if (o.visible === !1)
      return "";
    const a = w(o.icon);
    if (o.visible, o.qrSrc) {
      const s = o.qrCaption || o.title;
      return `<button type="button" class="social-button" data-qr="${r(o.qrSrc)}" data-qr-title="${r(s)}" title="${r(o.title)}" aria-label="${r(o.title)}">${a}</button>`;
    }
    return o.href ? `<a ${A(o.href)} title="${r(o.title)}" aria-label="${r(o.title)}">${a}</a>` : `<span class="social-static" title="${r(o.title)}" aria-label="${r(o.title)}">${a}</span>`;
  }).join("");
}
function Ue(e) {
  return te(e).replace(/<[^>]+>/g, "").replaceAll("&nbsp;", " ").trim();
}
function ne(e) {
  const t = e.toLowerCase().startsWith("zh") ? "空" : "Empty";
  return `<span class="edit-placeholder">${r(t)}</span>`;
}
function Ye(e, t) {
  return e.trim() ? r(e) : ne(t);
}
function Fe(e) {
  const t = e.details.map((o) => `<p class="exp-detail">${r(o)}</p>`).join("");
  return `
    <div class="experience-item">
      ${e.logo ? `<img src="${r(e.logo)}" alt="${r(e.logoAlt)}" class="institution-logo">` : ""}
      <div class="experience-content">
        <p class="exp-title"><strong>${r(e.title)}</strong></p>
        ${t}
        <p class="exp-period">${r(e.period)}</p>
      </div>
    </div>`;
}
function Qe(e) {
  return !e.logo && !e.title.trim() && !e.period.trim() && e.details.every((t) => !t.trim());
}
function R(e, t, n, o = "zh") {
  return e.map((a, s) => {
    const c = !!t;
    return !c && a.visible === !1 ? "" : `<div class="timeline-item">${c && Qe(a) ? `<p class="exp-title">${ne(o)}</p>` : Fe(a)}</div>`;
  }).join("");
}
function _e(e, t, n) {
  return e.map((i, a) => {
    if (i.visible === !1)
      return "";
    const s = i.website ? `<a class="project-link" ${A(i.website)} title="${r(t.projectWebsite)}" aria-label="${r(t.projectWebsite)}">${w("globe")}</a>` : "", c = i.code ? `<a class="project-link" ${A(i.code)} title="${r(t.projectCode)}" aria-label="${r(t.projectCode)}">${w("github")}</a>` : "", l = `${s}${c}`, u = i.website ? `<a class="project-card-hit" ${A(i.website)} aria-label="${r(`${i.name} · ${t.projectWebsite}`)}"></a>` : "";
    return `
        <div class="timeline-item">
          <article class="project-card${i.website ? " has-website" : ""}">
            ${u}
            <div class="project-content">
              <div class="title">${r(i.name)}</div>
              <div class="version">${r(i.version)}</div>
              <div class="period">${r(i.period)}</div>
              <div class="summary">${r(i.summary)}</div>
              <div class="stack">${r(t.projectStack)}: ${r(i.stack)}</div>
              ${l ? `<div class="project-links">${l}</div>` : ""}
            </div>
          </article>
        </div>`;
  }).join("");
}
function Ke(e, t) {
  return e?.url ? `<p><strong><a href="${r(e.url)}" download="${r(e.fileName)}" target="_blank" rel="noopener">${r(t)}</a></strong></p>` : "";
}
function Oe(e, t, n = !1) {
  return `
    <nav class="top-nav">
      <div class="nav-container">
        <div class="nav-left">
          ${n ? `<button type="button" class="nav-home edit-target" data-edit="ui" data-key="home">${Ye(e.home, e.htmlLang)}</button>` : `<a href="./">${r(e.home)}</a>`}
        </div>
        <div class="nav-right">
          ${t}
          <button id="localeToggle" class="lang-toggle" title="${r(e.languageToggle)}" aria-label="${r(e.languageToggle)}">
            ${r(e.languageButton)}
          </button>
          <button id="themeToggle" class="theme-toggle" title="${r(e.themeToggle)}" aria-label="${r(e.themeToggle)}">
            <span data-theme-icon>${w("moon")}</span>
          </button>
        </div>
      </div>
    </nav>`;
}
function Ge(e, t, n) {
  return "";
}
function Je(e, t) {
  const { ui: n } = e, o = t.canEdit === !0, i = e.aboutHtml.map((b, k) => {
    const $ = te(b);
    return Ue(b) ? `<p>${$}</p>` : "";
  }).join(""), a = Ke(e.resume, n.resumeDownload), s = (b, k, $) => `<div class="section-heading">${`<h2 class="section-title">${r(k)}</h2>`}</div>`, c = `<h1 class="site-name">${r(e.name)}</h1>`, l = `<p class="site-email">${r(e.email)}</p>`, u = `<div class="image avatar"><img src="${r(e.avatar)}" alt="${r(n.avatarAlt)}"></div>`, v = `&copy; ${e.copyrightYear} ${r(e.name)}. ${r(n.rights)}`;
  return `
    ${Oe(n, Ge(t.canEdit === !0, o, n.htmlLang), o)}

    <div class="wrapper">
      <header class="sidebar">
        <div class="profile-card">
          ${u}

          ${c}
          ${l}

          <div class="social-icons">
            ${Re(e.social)}
          </div>
        </div>

        <div class="section sidebar-education" id="education">
          ${s("education", n.education)}
          <div class="section-body">
            ${R(e.education, void 0, void 0, n.htmlLang)}
          </div>
        </div>
      </header>

      <section class="content">
        <div class="section" id="about">
          ${s("about", n.about)}
          <div class="section-body">
            ${i}
            ${a}
          </div>
        </div>

        <div class="section" id="experience">
          ${s("experience", n.experience)}
          <div class="section-body">
            ${R(e.experience, void 0, void 0, n.htmlLang)}
          </div>
        </div>

        <div class="section" id="projects">
          ${s("projects", n.projects)}
          <div class="section-body">
            ${_e(e.projects, n)}
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <p>
          ${v}
        </p>
      </footer>
    </div>

    <div id="qrModal" class="qr-modal" hidden>
      <div class="qr-modal-backdrop" data-qr-close></div>
      <div class="qr-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="qrModalTitle" tabindex="-1">
        <button type="button" class="qr-modal-close" data-qr-close aria-label="${r(n.qrClose)}">
          ${w("close")}
        </button>
        <img id="qrModalImage" class="qr-modal-image" alt="">
        <p id="qrModalTitle" class="qr-modal-title"></p>
      </div>
    </div>
  `;
}
function Xe(e = !1) {
  const t = document.querySelectorAll(".section");
  if (e || !("IntersectionObserver" in window)) {
    t.forEach((o) => {
      o.classList.add("visible");
    });
    return;
  }
  document.documentElement.classList.add("reveal-ready");
  const n = new IntersectionObserver(
    (o) => {
      o.forEach((i) => {
        i.isIntersecting && (i.target.classList.add("visible"), n.unobserve(i.target));
      });
    },
    { threshold: 0.1 }
  );
  t.forEach((o) => {
    n.observe(o);
  });
}
function e1() {
  const e = document.getElementById("themeToggle"), t = e?.querySelector("[data-theme-icon]");
  if (!e || !(t instanceof HTMLElement))
    return;
  const n = t;
  function o(l) {
    document.documentElement.setAttribute("data-theme", l ? "dark" : "light"), n.innerHTML = w(l ? "sun" : "moon"), localStorage.setItem("theme", l ? "dark" : "light");
  }
  const i = localStorage.getItem("theme"), a = window.matchMedia("(prefers-color-scheme: dark)").matches, s = document.documentElement.getAttribute("data-theme");
  o(s === "dark" || s === "light" ? s === "dark" : i ? i === "dark" : a), e.addEventListener("click", () => {
    const l = document.documentElement.getAttribute("data-theme") === "dark";
    o(!l);
  });
}
let U, oe = J();
function t1() {
  const e = document.getElementById("site-content");
  return e?.textContent ? me(JSON.parse(e.textContent)) : J();
}
function ie(e) {
  const t = document.querySelector("#app");
  if (!t)
    return;
  U?.();
  const n = ue(oe, e);
  Ze(n), t.innerHTML = Je(n, { canEdit: !1 }), e1();
  const o = Ie(n.ui.wechatQrTitle);
  Se(() => {
    const i = Me(e);
    Ee(i), ie(i);
  }), Xe(!0), U = o;
}
function n1() {
  oe = t1(), ie(qe());
}
n1();
