"use client";
import { useState } from "react";
import Counter from "../components/Counter";
import Toaster from "../components/Toaster";
import { toast } from "react-toastify";
import styles from "./page.module.css";

interface Attendee {
  name: string;
  role: string;
  department: string;
}

const Home: React.FC = () => {
  const [averageSalary, setAverageSalary] = useState<number>(0);
  const [attendees, setAttendees] = useState<Attendee[]>([
    { name: "", role: "", department: "" }
  ]);
  const [showCounter, setShowCounter] = useState<boolean>(false);
  const [removingAttendeeIndex, setRemovingAttendeeIndex] = useState<number | null>(null);

  const addAttendee = () => {
    setAttendees([...attendees, { name: "", role: "", department: "" }]);
  };

  const updateAttendee = (index: number, updatedAttendee: Attendee) => {
    const updatedAttendees = attendees.map((attendee, i) =>
      i === index ? updatedAttendee : attendee
    );
    setAttendees(updatedAttendees);
  };

  const removeAttendee = (index: number) => {
    setRemovingAttendeeIndex(index);
    setTimeout(() => {
      const updatedAttendees = attendees.filter((_, i) => i !== index);
      setAttendees(updatedAttendees);
      setRemovingAttendeeIndex(null);
    }, 500); // match animation duration
  };

  const handleStart = () => {
    if (averageSalary > 0 && attendees.length > 0) {
      setShowCounter(true);
      toast.success("Meeting started!");
    } else {
      toast.error("Please enter average salary and add at least one attendee.");
    }
  };

  const handleStop = () => {
    setShowCounter(false);
    setAttendees([{ name: "", role: "", department: "" }]);
    setAverageSalary(0);
    toast.info("Meeting stopped");
  };

  return (
    <div className={styles.container}>
      <Toaster />
      {!showCounter && (
        <div className={`${styles.formContainer} ${styles.fadeIn}`}>
          <h1 className={styles.title}>Meeting Cost Counter</h1>
          <div>
            <label className={styles.label}>
              Average Salary (annual):
              <input
                className={styles.input}
                type="number"
                value={averageSalary}
                onChange={(e) => setAverageSalary(parseFloat(e.target.value))}
              />
            </label>
          </div>
          <div>
            <button className={`${styles.button} ${styles.buttonAdd}`} onClick={addAttendee}>
              Add Attendee
            </button>
          </div>
          <div className={styles.attendeesContainer}>
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className={`${styles.attendeeContainer} ${
                  removingAttendeeIndex === index ? styles.slideOut : styles.slideIn
                }`}
              >
                <div className={styles.inputsContainer}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Attendee Name"
                    value={attendee.name}
                    onChange={(e) =>
                      updateAttendee(index, { ...attendee, name: e.target.value })
                    }
                  />
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Role"
                    value={attendee.role}
                    onChange={(e) =>
                      updateAttendee(index, { ...attendee, role: e.target.value })
                    }
                  />
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Department"
                    value={attendee.department}
                    onChange={(e) =>
                      updateAttendee(index, { ...attendee, department: e.target.value })
                    }
                  />
                  <button
                    className={`${styles.button} ${styles.buttonRemove}`}
                    onClick={() => removeAttendee(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className={`${styles.button} ${styles.buttonStart}`} onClick={handleStart}>
            Start Meeting
          </button>
        </div>
      )}
      {showCounter && (
        <Counter
          averageSalary={averageSalary}
          attendees={attendees}
          onStop={handleStop}
        />
      )}
    </div>
  );
};

export default Home;
