import AppRouter from "./app/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
            padding: "12px 18px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          },
          success: {
            style: {
              background: "#10b981",   // green
              color: "#ffffff",
            },
            iconTheme: {
              primary: "#ffffff",
              secondary: "#10b981",
            },
          },
          error: {
            style: {
              background: "#dc3545",   // red
              color: "#ffffff",
            },
            iconTheme: {
              primary: "#ffffff",
              secondary: "#dc3545",
            },
          },
        }}
      />
      <AppRouter />
    </>
  );
};

export default App;