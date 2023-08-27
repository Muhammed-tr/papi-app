import React from "react";
import ApiShow from "./components/ApiShow";
import AllUser from "./components/AllUser";
import { ApiProvider } from "./context/ApiContext";
import { Route, Routes, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApiContext } from './context/ApiContext';

function App() {
  return (
    <ApiProvider>
      <AppContent />
    </ApiProvider>
  );
}

function AppContent() {
  const { apiShowActive, setApiShowActive } = useApiContext();
  const [isRunning, setIsRunning] = useState(apiShowActive);

  const toggleApiRequest = () => {
    setApiShowActive(!apiShowActive);
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    setApiShowActive(true);

    return () => {
      setApiShowActive(false);
    };
  }, [setApiShowActive]);



  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <header className="fixed w-full top-0 bg-gray-900 z-50">
          <nav className="flex bg-slate-700 justify-between items-center p-3">
            <div className="text-xl font-semibold">Papilon App</div>
            <div className="space-x-4">
              <NavLink
                to="/AllUser"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Show All Users
              </NavLink>
              <NavLink
                to="/ApiShow"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                ApiShow
              </NavLink>

              <button
                onClick={toggleApiRequest}
                className={`text-gray-300 rounded-lg hover:text-white transition duration-300 ${isRunning ? 'bg-red-500' : 'bg-green-500'
                  }`}
              >
                {isRunning ? 'Stop' : 'Running'}
              </button>
              
            </div>
          </nav>
        </header>

        {/* Apply padding to the main content */}
        <div className="pt-16">
          <Routes>
            <Route path="/ApiShow" element={<ApiShow />} />
            <Route path="/AllUser" element={<AllUser />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
