import Sidebar from '../../../../layout/Sidebar/ClientSidebar';
import design from './project.module.css';

const Jobs = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}></div>
      </div>
    </div>
  );
};

export default Jobs;
