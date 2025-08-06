import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Visitor from "./pages/Visitor";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [addvisitor, setAddVisitor] = useState([]);
  const [name, setName] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [addEvent, setAddEvent] = useState([]);
  const [addOrganizer, setAddOrganizer] = useState([]);

  const handleCheckIn = () => {
    if (name.length === 0) return toast.error("Please enter valid data!");
    setAddVisitor([...addvisitor, name]);
    setName("");
    setCurrentUser(name);
  };
  const handleEvents = () => {
    try {
      if (addEvent.length === 0 || addOrganizer.length === 0) {
        return toast.error("Please enter valid data!");
      }

      let eventsList = {
        eventName: addEvent,
        OrganizerName: addOrganizer,
      };
      setEvents([...events, eventsList]);
      setAddEvent("");
      setAddOrganizer("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (eventsList) => {
    let eventsNames = events.filter((event) => event !== eventsList);
    setEvents(eventsNames);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/event"
          element={
            <Event
              addEvent={addEvent}
              addOrganizer={addOrganizer}
              setAddEvent={setAddEvent}
              setAddOrganizer={setAddOrganizer}
              handleEvents={handleEvents}
              events={events}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/"
          element={
            <Visitor
              handleCheckIn={handleCheckIn}
              setName={setName}
              name={name}
              addvisitor={addvisitor}
              currentUser={currentUser}
              events={events}
            />
          }
        />
      </Routes>
      <ToastContainer position="top-center" autoClose={4000} />

    </BrowserRouter>
  );
}

export default App;
