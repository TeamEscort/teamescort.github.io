import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./app/home/Home";
import CareerGuidance from "./app/career_guidance/CareerGuidance";
import { Navigation } from "./app/navigation/Navigation";
import { Administration } from "./app/administration/Administration";
import { AdministrativeChatbot } from "./app/administration/administrativeChatbot/AdministrativeChatbot";
import { Events } from "./app/administration/administrationFiles/events/Events";
import { Clubs } from "./app/administration/administrationFiles/clubs/Clubs";
import { Shuttles } from "./app/administration/administrationFiles/shuttle/Shuttle";
import PsychologyHome from "./app/psychology_solutions/PsychologyHome";
import SolutionProvider from "./app/psychology_solutions/SolutionProvider";
import StressLevel from "./app/psychology_solutions/StressLevel";
import { CourseDetails } from "./app/administration/administrationFiles/courseDetails/CourseDetails";
import { Performance } from "./app/performance_prediction/performance//Performance";
import { Quizzes } from "./app/performance_prediction/performance/Quizzes";
import { QuizPage } from "./app/performance_prediction/Quiz/QuizPage";
import { Result } from "./app/performance_prediction/Quiz//Result";
import { QuizProvider } from "./app/performance_prediction/contexts/jobquiz";
import { AboutUS } from "./app/commonPages/about_us/AboutUs";
import { ContactUS } from "./app/commonPages/contact_us/ContactUs";

const App = () => {
  return (
    <Router>
      <Navigation>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<CareerGuidance />} path="/career-guidance"></Route>
          <Route
            element={<AdministrativeChatbot />}
            path="/administrative-chatbot"
          ></Route>
          <Route element={<Administration />} path="/administration"></Route>
          <Route
            element={<CourseDetails />}
            path="/administration/course-details"
          ></Route>
          <Route element={<Events />} path="/administration/events"></Route>
          <Route element={<Clubs />} path="/administration/clubs"></Route>
          <Route
            element={<Shuttles />}
            path="/administration/shuttle-details"
          ></Route>
          <Route element={<PsychologyHome />} path="/psychology_home"></Route>
          <Route
            element={<SolutionProvider />}
            path="/solution_provider"
          ></Route>
          <Route element={<StressLevel />} path="/stress_level"></Route>
          <Route element={<Performance />} path="/performance"></Route>

          <Route
            element={
              <QuizProvider>
                <Quizzes />
              </QuizProvider>
            }
            path="/assessment"
          ></Route>

          <Route element={<QuizPage />} path="/quiz/:id"></Route>
          <Route element={<Result />} path="/result"></Route>
          <Route element={<AboutUS/>} path='/about-us'></Route>
          <Route element={<ContactUS/>} path='/contact-us'></Route>

        </Routes>
      </Navigation>
    </Router>
  );
};

export default App;
