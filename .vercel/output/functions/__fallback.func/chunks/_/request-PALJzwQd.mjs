import { a as createServerRpc, c as createServerFn, g as getRequestHeader } from '../virtual/entry.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'react/jsx-runtime';
import '@tanstack/react-router';
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

var getBaseUrl_createServerFn_handler = createServerRpc("src_server_functions_request_ts--getBaseUrl_createServerFn_handler", (opts, signal) => {
  return getBaseUrl.__executeServer(opts, signal);
});
var getBaseUrl = createServerFn({ method: "GET" }).handler(getBaseUrl_createServerFn_handler, () => {
  const origin = getRequestHeader("origin");
  const host = getRequestHeader("host");
  if (origin) return origin;
  if (host) return `${"https" }://${host}`;
  return `https://imagine-undefined.appwrite.network`;
});

export { getBaseUrl_createServerFn_handler };
//# sourceMappingURL=request-PALJzwQd.mjs.map
