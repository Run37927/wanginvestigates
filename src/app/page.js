import LandingPage from "@/components/LandingPage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FeedbackPop } from "@/components/ui/feedback-pop";
import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/db";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <LandingPage />
  );
}