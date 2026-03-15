import { c as createServerFn, a as createServerRpc, g as getRequestHeader } from '../virtual/entry.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createRouter, createRootRouteWithContext, createFileRoute, useLocation, lazyRouteComponent, HeadContent, Scripts } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTheme, ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { useRef, useEffect } from 'react';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@tanstack/react-router/ssr/server';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'rou3';
import 'srvx';
import 'tiny-invariant';
import 'seroval';

function getContext() {
  return { queryClient: new QueryClient() };
}
function Provider({ children, queryClient }) {
  return /* @__PURE__ */ jsx(QueryClientProvider, {
    client: queryClient,
    children
  });
}
var styles_default = "/assets/styles-CRyM_362.css";
var Toaster$1 = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(Toaster, {
    theme,
    className: "toaster group",
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)"
    },
    ...props
  });
};
var getBaseUrl_createServerFn_handler = createServerRpc("src_server_functions_request_ts--getBaseUrl_createServerFn_handler", (opts, signal) => {
  return getBaseUrl.__executeServer(opts, signal);
});
const getBaseUrl = createServerFn({ method: "GET" }).handler(getBaseUrl_createServerFn_handler, () => {
  const origin = getRequestHeader("origin");
  const host = getRequestHeader("host");
  if (origin) return origin;
  if (host) return `${"https" }://${host}`;
  return `https://imagine-undefined.appwrite.network`;
});
function generateOGImageUrl(config, baseUrl) {
  const defaultOGUrl = `${baseUrl.replace(/\/$/, "")}/og`;
  return defaultOGUrl;
}
function createOGMetaTags(config) {
  const { title, description, image, url, type = "website", twitterHandle } = config;
  return { meta: [
    {
      property: "og:title",
      content: title
    },
    {
      property: "og:description",
      content: description
    },
    {
      property: "og:image",
      content: image
    },
    {
      property: "og:url",
      content: url
    },
    {
      property: "og:type",
      content: type
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: title
    },
    {
      name: "twitter:description",
      content: description
    },
    {
      name: "twitter:image",
      content: image
    },
    ...twitterHandle ? [{
      name: "twitter:creator",
      content: twitterHandle
    }] : [],
    {
      name: "description",
      content: description
    }
  ] };
}
var scripts = [];
const Route = createRootRouteWithContext()({
  loader: async () => {
    return { baseUrl: await getBaseUrl() };
  },
  head: ({ loaderData }) => {
    var _a;
    const baseUrl = (_a = loaderData == null ? void 0 : loaderData.baseUrl) != null ? _a : "https://imagine.dev";
    return {
      meta: [
        { charSet: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        { title: "RJ Media Photography Portfolio" },
        {
          name: "description",
          content: "A stunning visual portfolio showcasing RJ Media's photography work, capturing breathtaking moments with creativity, artistry, and a unique perspective."
        },
        ...createOGMetaTags({
          title: "RJ Media Photography Portfolio",
          description: "A stunning visual portfolio showcasing RJ Media's photography work, capturing breathtaking moments with creativity, artistry, and a unique perspective.",
          image: generateOGImageUrl({ }, baseUrl),
          url: baseUrl
        }).meta
      ],
      links: [
        {
          rel: "stylesheet",
          href: styles_default
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap"
        }
      ],
      scripts: [...scripts]
    };
  },
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [/* @__PURE__ */ jsxs(ThemeProvider, {
      attribute: "class",
      defaultTheme: "light",
      enableSystem: true,
      disableTransitionOnChange: true,
      children: [children, /* @__PURE__ */ jsx(Toaster$1, {})]
    }), /* @__PURE__ */ jsx(Scripts, {})] })]
  });
}
var $$splitComponentImporter = () => import('./routes-DZ4tuT-F.mjs');
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
  id: "/",
  path: "/",
  getParentRoute: () => Route
}) };
const routeTree = Route._addFileChildren(rootRouteChildren)._addFileTypes();
function ErrorComponent({ error, info }) {
  const randomErrorId = useRef(Math.random().toString(36).substring(2, 15));
  const { theme } = useTheme();
  const location = useLocation();
  const message = {
    type: "NOTIFY_ERROR",
    data: {
      errorId: randomErrorId.current,
      href: location.href,
      errorMessage: error.message,
      errorStack: error.stack,
      errorCause: error.cause,
      errorComponentStack: info == null ? void 0 : info.componentStack
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      window.parent.postMessage(message);
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "flex-grow flex flex-col justify-center items-center gap-6 text-center my-20",
    children: [
      /* @__PURE__ */ jsx("img", {
        src: theme === "dark" ? "/imagine-logo-dark.svg" : "/imagine-logo-light.svg",
        alt: "Imagine Logo",
        className: "size-14"
      }),
      /* @__PURE__ */ jsx("h1", {
        className: "text-2xl font-medium",
        children: "Oops! Something went wrong."
      }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", {
        className: "text-xs border border-red-500 p-2 text-red-500 overflow-auto rounded-md",
        children: error.message ? /* @__PURE__ */ jsx("code", { children: error.message }) : null
      }) })
    ]
  });
}
const getRouter = () => {
  const rqContext = getContext();
  const router = createRouter({
    routeTree,
    basepath: "/",
    context: { ...rqContext },
    defaultPreload: "intent",
    defaultErrorComponent: ({ error, info, reset }) => /* @__PURE__ */ jsx(ErrorComponent, {
      error,
      info,
      reset
    }),
    Wrap: (props) => {
      return /* @__PURE__ */ jsx(Provider, {
        ...rqContext,
        children: props.children
      });
    }
  });
  setupRouterSsrQueryIntegration({
    router,
    queryClient: rqContext.queryClient
  });
  return router;
};

export { getRouter };
//# sourceMappingURL=router-DdiibwK-.mjs.map
