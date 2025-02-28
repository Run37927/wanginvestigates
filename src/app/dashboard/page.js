import { getAuthSession } from "@/lib/auth";
import DashboardPage from "./DashboardPage";
import { redirect } from "next/navigation";

async function page() {
    const session = await getAuthSession();

    if (!session?.user?.id) {
        return redirect('/');
    }

    return (
        <DashboardPage session={session} />
    )
}

export default page