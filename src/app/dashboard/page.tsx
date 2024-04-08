import DrinkTracker from "@/components/DashBoard/DrinkTracker";
import DefaultLayout from "@/components/Layouts/DefaultLayout";



export default function Dashboard() {
  return (
    <>
      <DefaultLayout>
        <DrinkTracker />
      </DefaultLayout>
    </>
  );
}
