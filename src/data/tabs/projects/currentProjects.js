import CurrentProjects from '../../../components/Projects/CurrentProjects/CurrentProjects';
import UpcomingProjects from '../../../components/Projects/UpcomingProjects/UpcomingProjects';
import FinishedProjects from '../../../components/Projects/FinishedProjects/FinishedProjects';

const currentProjects = [
    {
        id: 1, 
        path: '/currentProjects',
        component: {CurrentProjects},
        name: "Current Projects"
    },
    {
        id: 2, 
        path: '/upcomingProjects',
        component: {UpcomingProjects},
        name: "Upcoming Projects"
    },
    {
        id: 3, 
        path: '/finishedProjects',
        component: {FinishedProjects},
        name: "Finished Projects"
    }
]

export default currentProjects;