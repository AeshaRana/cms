import Login from "./Components/AnonymousComponents/Login";
import Register from "./Components/AnonymousComponents/register";
import Dashboard from "./Components/StudentComponents/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/StudentComponents/Profile";
import DashboardIndex from "./Components/StudentComponents/DashboardIndex";
import SearchJobs from "./Components/StudentComponents/SearchJobs";
import JobTracking from "./Components/StudentComponents/JobTracking";
import JobTrackingIndex from "./Components/StudentComponents/JobTrackingIndex";
import JobDetails from "./Components/StudentComponents/JobDetails";
import SearchJobsIndex from "./Components/StudentComponents/SearchJobsIndex";
import CompanyListing from "./Components/AdminComponents/CompanyListing";
import StudentListing from "./Components/AdminComponents/StudentListing";
import CompanyProfile from "./Components/CompanyComponents/CompanyProfile";
import CompanyListingIndex from "./Components/AdminComponents/CompanyListingIndex";
import JobListing from "./Components/CompanyComponents/JobListing";
import AddJob from "./Components/CompanyComponents/AddJob";
import JobListingIndex from "./Components/CompanyComponents/JobListingIndex";
import CompStudentListing from "./Components/CompanyComponents/CompStudentListing";
import StudentProfile from "./Components/CompanyComponents/StudentProfile";
import CompanyStudentListingIndex from "./Components/CompanyComponents/CompanyStudentListingIndex";
import StudentListingIndex from "./Components/AdminComponents/StudentListingIndex";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<DashboardIndex />} />
          <Route path="profile" element={<Profile />} />
          <Route path="searchjobs" element={<SearchJobs />} >
            <Route path="" element={<SearchJobsIndex />} />
            <Route path="jobdetail" element={<JobDetails />} />
          </Route>
          <Route path="jobtracking" element={<JobTracking />}>
            <Route path="" element={<JobTrackingIndex />} />
            <Route path="jobdetail" element={<JobDetails />} />
          </Route>
          <Route path="joblisting" element={<JobListing />}>
            <Route path="" element={<JobListingIndex />} />
            <Route path="viewstudent" element={<CompStudentListing />}>
              <Route path="" element={<CompanyStudentListingIndex />} />
              <Route path="viewstudentdetail" element={<StudentProfile />} />
            </Route>
            <Route path="editjob" element={<AddJob />} />
            <Route path="viewjob" element={<JobDetails />} />
            <Route path="companyprofile" element={<CompanyProfile />} />
            {/* <Route path="joblisting" element={<JobListing/>}/> */}

          </Route>
          <Route path="addjob" element={<AddJob />} />
          <Route path="studentlisting" element={<StudentListing />} >
            <Route path="" element={<StudentListingIndex />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="companylisting" element={<CompanyListing />}>
            <Route path="" element={<CompanyListingIndex />} />
            <Route path="companyprofile" element={<CompanyProfile />} />
            <Route path="joblisting" element={<JobListing/>}>
               <Route path="" element={<JobListingIndex />} />
               {/* doubt */}
                <Route path="viewstudent" element={<CompStudentListing />}>
              <Route path="" element={<CompanyStudentListingIndex />} />
              <Route path="viewstudentdetail" element={<StudentProfile />} />
            </Route>
            <Route path="editjob" element={<AddJob />} />
            <Route path="viewjob" element={<JobDetails />} />
            <Route path="companyprofile" element={<CompanyProfile />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
