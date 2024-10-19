import { authMiddleware } from "@clerk/nextjs";

// Mở quyền truy cập cho các route công khai
export default authMiddleware({
  publicRoutes: ["/checkout", "/cart", "/api/:path*", "/ws/ws"], // Thêm checkout và cart
});

// Cấu hình matcher để middleware áp dụng chính xác
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
