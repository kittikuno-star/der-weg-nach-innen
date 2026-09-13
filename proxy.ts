import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { languageFromPathname } from "@/lib/languageRoutes";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-page-language", languageFromPathname(request.nextUrl.pathname));
  requestHeaders.set("x-page-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
