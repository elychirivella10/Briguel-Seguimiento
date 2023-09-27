import React from 'react'

//router-dom
import {BrowserRouter ,Routes, Route} from 'react-router-dom'

//components
import Container from 'components/container/Container'
import RegisterButton from 'components/help/RegisterButton'

//pages
import CenterLoginRegister from 'pages/centerLogin/CenterLoginRegister'
import Help from 'pages/help/Help'
import TasksList from 'pages/Tasks/TasksList'
import TasksAlone from 'pages/Tasks/TasksAlone'
import RegisterTasks from 'pages/Tasks/RegisterTasks'
import DepList from 'pages/Dep/DepList'
import Calendar from 'pages/Calendar/Calendar'
import Dashboard from "pages/dashboard/Dashboard";
import PageNotFound from 'pages/notFound/PageNotFound'
import EditTaks from 'pages/Tasks/Edit'
import EditNotes from 'pages/Notes/Edit'
import ResponsiblesList from 'pages/responsibles/ResponsiblesList'
import ResponsibleAlone from 'pages/responsibles/ResponsibleAlone'
import EditResponsible from 'pages/responsibles/EditResponsible'

const RoutesMain = () =>{
    return (
		<BrowserRouter>
			<Container>
				<RegisterButton/>
				<Routes>
					<Route exact path="/" element={<Dashboard/>}/>
					<Route exact path="/login" element={<CenterLoginRegister/>}/>
					<Route exact path="/help" element={<Help/>}/>
					<Route exact path="/dashboard" element={<Dashboard/>}/>
					<Route exact path="/dep/:dep" element={<TasksList/>}/>
					<Route exact path="/dep/:dep/:id" element={<TasksAlone/>}/>
					<Route exact path="/responsables" element={<ResponsiblesList/>}/>
					<Route exact path="/responsables/:id" element={<ResponsibleAlone/>}/>
					<Route exact path="/responsables/edit/:id" element={<EditResponsible/>}/>
					<Route exact path="/tasks/registro" element={<RegisterTasks/>}/>
					<Route exact path="/tasks/edit/:id" element={<EditTaks/>}/>
					<Route exact path="/notes/edit/:id" element={<EditNotes/>}/>
					<Route exact path="/dep" element={<DepList/>}/>
					<Route exact path="/calendar" element={<Calendar/>}/>
					<Route exact path="*" element={<PageNotFound/>}/>
				</Routes>
			</Container>
		</BrowserRouter>
    		)
}


export default RoutesMain