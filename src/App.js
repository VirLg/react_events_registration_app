import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventsParticipants from "./components/pages/eventsParticipants/EventsParticipants";
import FormRegistration from "./components/pages/formRegistration/FormRegistration";
import HomePage from "./components/pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/events/add" element={<FormRegistration />} />
        <Route
          path="/api/events/participants"
          element={<EventsParticipants />}
        />
      </Routes>
    </div>
  );
}

export default App;
