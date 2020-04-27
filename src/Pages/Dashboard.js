import React from 'react';
import {GoDashboard, GiBriefcase, FaTasks, FaWallet, AiOutlineLineChart} from 'react-icons/all';
import Cards from '../Components/Cards';
import '../assets/css/Dashboard.css';
import TodoList from '../Components/TodoList';

function Dashboard(props) {

    return(
        <div className="MainBody"> 
            <h3 className="subtitle"> <GoDashboard className="subIcon"/> DASHBOARD</h3>
            <div className="view">
                <Cards 
                    className="Projects"
                    subtitle="Active Projects"
                    info="3"
                    icon={<GiBriefcase/>}
                />
                <Cards 
                    className="Revenue"
                    subtitle="Total Revenue"
                    info="$12,500"
                    icon={<FaWallet/>}
                />
                <Cards 
                    className="Tasks"
                    subtitle="Tasks Completed"
                    info="5"
                    icon={<FaTasks/>}
                />
                <Cards 
                    className="Reports"
                    subtitle="Reports pending"
                    info="7"
                    icon={<AiOutlineLineChart/>}
                />
            </div>

            <div>
                <TodoList/>
            </div>                  
       </div>
    )

}

export default Dashboard;