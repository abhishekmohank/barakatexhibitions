import { useState } from "react";
import { useAdminAuth } from "../../context/AdminAuthContext";
import ManageEvents from "./ManageEvents";
import ManageAchievements from "./ManageAchievements";
import ManageGallery from "./ManageGallery";
import ManageLeads from "./ManageLeads";

const tabs = [
  { key: "events", label: "Events", Component: ManageEvents },
  { key: "achievements", label: "Achievements", Component: ManageAchievements },
  { key: "gallery", label: "Gallery", Component: ManageGallery },
  { key: "leads", label: "Leads", Component: ManageLeads },
];

const AdminDashboard = () => {
  const { user, signOut } = useAdminAuth();
  const [activeTab, setActiveTab] = useState("events");

  const ActiveComponent =
    tabs.find((tab) => tab.key === activeTab)?.Component ?? ManageEvents;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-satoshi text-xl font-bold tracking-tight text-gray-900">
            Admin Panel
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user.email}</span>
            <button
              onClick={signOut}
              className="text-sm font-semibold text-[#822168] hover:underline"
            >
              Sign out
            </button>
          </div>
        </div>
        <nav className="max-w-6xl mx-auto px-6 flex gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-[#822168] text-[#822168]"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <ActiveComponent />
      </main>
    </div>
  );
};

export default AdminDashboard;
