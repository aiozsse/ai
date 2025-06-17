import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //publicRoutes: ["/", "/api/webhook"],
  publicRoutes: ["/"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};