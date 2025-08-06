import { useEffect, useRef } from "react";
import InputBar from "../components/InputBar";
import styles from "../styles/Event.module.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Event({
  addEvent,
  addOrganizer,
  setAddEvent,
  setAddOrganizer,
  handleEvents,
  events,
  handleDelete,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={`container ${styles.eventCard}`}>
      <div className="text-center mb-4">
        <h2 className={styles.title}>Add New Event</h2>
      </div>

      <div className="mb-3">
        <label className={styles.label}>Event Name</label>
        <InputBar
          value={addEvent}
          onChange={(e) => setAddEvent(e.target.value)}
          inputRef={inputRef}
        />
      </div>

      <div className="mb-3">
        <label className={styles.label}>Organizer Name</label>
        <InputBar
          value={addOrganizer}
          onChange={(e) => setAddOrganizer(e.target.value)}
        />
      </div>

      <button className={styles.checkInBtn} onClick={handleEvents}>
        Save Event Info
      </button>

      {events.length > 0 && (
        <div className="mt-4">
          <h5 className={styles.subheading}>Events and Organizers:</h5>
          {events.map((event, index) => (
            <div key={index} className={`d-flex justify-content-between align-items-center mb-2 p-2 ${styles.eventItem}`}>
              <div>
                <strong>{event.eventName}</strong> organized by {event.OrganizerName}
              </div>
              <button className={styles.deleteBtn} onClick={() => handleDelete(event)}>
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 text-end">
        <Link to="/" className={`btn ${styles.linkBtn}`}>
          Back <FaArrowRight className="ms-1" />
        </Link>
      </div>
    </div>
  );
}
