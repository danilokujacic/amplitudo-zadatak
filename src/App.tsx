// Library modules
import { QueryClientProvider, QueryClient } from "react-query";

//Components
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Core
import routes from "./core/navigation/routes";

// Layout components
import MainLayout from "./layouts/main";

// 3rd party styles
import "antd/dist/reset.css";
import Course from "./pages/Course";
import FormPageLayout from "./layouts/form";
import Success from "./pages/Success";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="*" element={<Navigate to="/courses" />} />
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route
              path="/course/:id?"
              element={
                <FormPageLayout>
                  <Course />
                </FormPageLayout>
              }
            />
          </Route>

          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
