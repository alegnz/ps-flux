import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoudPage";
import ManagecoursePage from "./ManageCoursePage";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManagecoursePage} />
        <Route path="/course/" component={ManagecoursePage} />

        <Redirect from="/about-page" to="about" />

        {/* If none of the previous matches, shows 404 page */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
