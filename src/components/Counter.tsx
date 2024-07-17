import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from './Counter.module.css';
import ReportModal from './ReportModal';

interface Attendee {
  name: string;
  role: string;
  department: string;
}

interface CounterProps {
  averageSalary: number;
  attendees: Attendee[];
  onStop: () => void;
}

const Counter: React.FC<CounterProps> = ({ averageSalary, attendees, onStop }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const costPerSecond = (averageSalary / 160 / 3600) * attendees.length;
  const cost = seconds * costPerSecond;

  const animatedSeconds = useSpring({
    from: { number: 0 },
    number: seconds,
    delay: 0,
    config: { mass: 1, tension: 120, friction: 30 }
  });

  const animatedCost = useSpring({
    from: { number: 0 },
    number: cost,
    delay: 0,
    config: { mass: 1, tension: 10, friction: 10 }
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGenerateReport = () => {
    setIsReportModalOpen(true);
  };

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.counterTitle}>Meeting Cost Counter</h1>
      <p className={styles.counterText}>
        Time Elapsed: <animated.span>{animatedSeconds.number.to((n) => formatTime(Math.floor(n)))}</animated.span>
      </p>
      <p className={styles.counterText}>
        Meeting Cost: €<animated.span>{animatedCost.number.to((n) => n.toFixed(2))}</animated.span>
      </p>
      <div>
        <button className={`${styles.button} ${styles.buttonPause}`} onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button className={`${styles.button} ${styles.buttonStop}`} onClick={onStop}>Stop</button>
        {isPaused && (
          <button className={`${styles.button} ${styles.buttonReport}`} onClick={handleGenerateReport}>
            Generate Report
          </button>
        )}
      </div>
      <ReportModal
        isOpen={isReportModalOpen}
        onRequestClose={() => setIsReportModalOpen(false)}
        attendees={attendees}
        averageSalary={averageSalary}
        totalCost={cost}
        duration={formatTime(seconds)}
      />
    </div>
  );
};

export default Counter;
