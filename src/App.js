import AppBar from "./components/AppBar/index";
import Banner from "./components/Banner/index";
import BongaPointsPage from "./containers/BongaPointsPage/BongaPointsPage";

export default function App() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-stretch items-stretch bg-gray-100">
      <AppBar />
      <div className="w-full flex flex-col bg-transparent px-10 py-10">
        <div className="w-full flex flex-col bg-white">
          <Banner />
          <BongaPointsPage />
        </div>
      </div>
    </div>
  );
}