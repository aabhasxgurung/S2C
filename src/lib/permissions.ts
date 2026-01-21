export const isBypassRoutes = [
  "/api/polar/webhook",
  "/api/inngest(.*)",
  "/api/auth(.*)",
  "/convex(.*)",
];

export const isPublicRoutes = ["/auth(.*)", "/dashboard"];

export const isProtectedRoutes = ["/dashboard(.*)"];
