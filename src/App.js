import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPage from "./Components/Admin/AdminPage";
import UserPage from "./Components/User/";
import AuthProvider from "./Context/AuthProvider";
function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/">
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/admin" component={AdminPage} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
