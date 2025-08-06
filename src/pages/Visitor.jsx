import { useEffect, useRef } from "react";
import InputBar from "../components/InputBar";
import styles from "../styles/Visitor.module.css";
import { IoPerson } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Visitor({
  handleCheckIn,
  setName,
  name,
  addvisitor,
  currentUser,
  events,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={`container ${styles.visitorCard}`}>
      <div className="text-center mb-4">
        <h2 className={styles.title}>Visitor Check-In</h2>
      </div>

      <div className="mb-3">
        <label className={styles.label}>
          <IoPerson className={styles.icon} /> Enter your name:
        </label>
        <div className="d-flex flex-column flex-md-row gap-2 mt-2">
          <InputBar
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputRef={inputRef}
          />
          <button className={styles.checkInBtn} onClick={handleCheckIn}>
            Check In
          </button>
        </div>
      </div>

      {currentUser && (
        <div className={`alert alert-success mt-3 ${styles.welcomeMsg}`}>
          Welcome, <strong>{currentUser}</strong>!
        </div>
      )}

      {addvisitor.length !== 0 && (
        <div className="mt-4">
          <h5 className={styles.subheading}>Visitors List:</h5>
          <ul className="list-group">
            {addvisitor.map((visitor, index) => (
              <li key={index} className="list-group-item">
                {visitor}
              </li>
            ))}
          </ul>
        </div>
      )}

      {events.length !== 0 && (
        <div className="mt-4">
          <h5 className={styles.subheading}>Events and Organizers:</h5>
          {events.map((event, index) => (
            <div key={index} className="mb-2">
              <div className="p-2 bg-light border rounded">
                <strong>{event.eventName}</strong> organized by {event.OrganizerName}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 text-end">
        <Link to="/event" className={`btn ${styles.linkBtn}`}>
          Events <FaArrowRight className="ms-1" />
        </Link>
      </div>
    </div>
  );
}
