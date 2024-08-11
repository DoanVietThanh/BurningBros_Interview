import MainLayout from "@/layouts/main-layout";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
