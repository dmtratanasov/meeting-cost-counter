import { Bar, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './Report.module.css';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

interface Attendee {
  name: string;
  role: string;
  department: string;
}

interface ReportProps {
  attendees: Attendee[];
}

const Report: React.FC<ReportProps> = ({ attendees }) => {
  const getRoleData = () => {
    const roles = attendees.reduce((acc, attendee) => {
      acc[attendee.role] = (acc[attendee.role] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      labels: Object.keys(roles),
      datasets: [
        {
          label: '# of Attendees by Role',
          data: Object.values(roles),
          backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107'],
        },
      ],
    };
  };

  const getDepartmentData = () => {
    const departments = attendees.reduce((acc, attendee) => {
      acc[attendee.department] = (acc[attendee.department] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      labels: Object.keys(departments),
      datasets: [
        {
          label: '# of Attendees by Department',
          data: Object.values(departments),
          backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107'],
        },
      ],
    };
  };

  return (
    <div className={styles.reportContainer}>
      <h2 className={styles.reportTitle}>Meeting Report</h2>
      <div className={styles.chartContainer}>
        <h3>Attendees by Role</h3>
        <Bar data={getRoleData()} />
      </div>
      <div className={styles.chartContainer}>
        <h3>Attendees by Department</h3>
        <Pie data={getDepartmentData()} />
      </div>
    </div>
  );
};

export default Report;
