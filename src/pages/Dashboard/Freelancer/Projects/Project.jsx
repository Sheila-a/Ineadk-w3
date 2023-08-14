import DashIntro from '../../../../components/DashIntro/DashIntro';
import DashNav from '../../../../components/DashNav/DashNav';
import Search from '../../../../components/Search/Search';
import Sidebar from '../../../../layout/Sidebar/FreeSidebar';
import design from './project.module.css';

const Project = () => {
  return (
    <div className={design.projects}>
      <div className={design.project_body}>
        <Sidebar />
        <div className={design.project_main}>
          <DashNav title='PROJECT' />
          <Search page='projects' />
          <DashIntro
            title='Streamline Your Project Management"'
            text='Welcome to the project management hub. From planning to execution, this is where you can efficiently oversee, coordinate, and optimize all of your projects. Stay organized, collaborate effectively, and drive success across your endeavors. Lets dive in and take control of your projects!'
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
