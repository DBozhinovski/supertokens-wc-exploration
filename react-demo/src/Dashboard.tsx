import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// @ts-expect-error - NO TYPE YO 🔥
import { registerComponent } from "./components/routeMounter";

function Dashboard() {
  const dashboardRef = useRef(null);
  const navigate = useNavigate(); // Hook to get the navigate function

  useEffect(() => {
    registerComponent({ navigate: navigate, preBuiltUI: "dashboard" });
  }, [navigate]);

  useEffect(() => {
    const dashboardElement = dashboardRef.current;
    if (dashboardElement) {
      (dashboardElement as HTMLElement).navigate = (path: string) => {
        console.log("RR Navigate to:", path);
        navigate(path); // Navigate using React Router
      };
    }

    return () => {
      if (dashboardElement) {
        (dashboardElement as HTMLElement).navigate = null; // Clean up the navigate property
      }
    };
  }, [navigate]);

  return (
    <st-dashboard ref={dashboardRef} className="st-dashboard"></st-dashboard>
  );
}

export default Dashboard;
