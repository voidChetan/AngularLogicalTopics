import { Component } from '@angular/core';

@Component({
  selector: 'app-jira-board',
  templateUrl: './jira-board.component.html',
  styleUrls: ['./jira-board.component.css']
})
export class JiraBoardComponent {
  selectedProject: number = 0;
  ticketStatusArray = [
    { statusId: 2, status: "To Do" },
    { statusId: 3, status: "In-Progress" },
    { statusId: 4, status: "Done" },
    { statusId: 5, status: "Completed" }
  ];
  projectsList = [
    { projectId: 1, projectName: "School-ERM" },
    { projectId: 2, projectName: "Big-Basket" },
    { projectId: 3, projectName: "Baking-Erp" }
  ];
  ticketsArray = [
    { ticketId: 121, projectId: 1, ticketNo: '001', ticketName: 'Login', createdBy: "Rahul", assignedTo: 'Sachin', statusId: 5 },
    { ticketId: 122, projectId: 2, ticketNo: '002', ticketName: 'User Registration', createdBy: "Rohit", assignedTo: 'Chetan', statusId: 4 },
    { ticketId: 123, projectId: 1, ticketNo: '003', ticketName: 'Forgot Password', createdBy: "Rahul", assignedTo: 'Sachin', statusId: 2 },
    { ticketId: 124, projectId: 1, ticketNo: '004', ticketName: 'Navbar Design', createdBy: "Rohit", assignedTo: 'Chetan', statusId: 3 },
    { ticketId: 125, projectId: 2, ticketNo: '005', ticketName: 'User Filter', createdBy: "Rohit", assignedTo: 'Sachin', statusId: 2 },
    { ticketId: 126, projectId: 1, ticketNo: '006', ticketName: 'PrimeNg Exploration', createdBy: "Rahul", assignedTo: 'Ankur', statusId: 4 },
    { ticketId: 127, projectId: 2, ticketNo: '007', ticketName: 'Navbar Role Based Menu', createdBy: "Rohit", assignedTo: 'Rahul', statusId: 3 },
    { ticketId: 128, projectId: 1, ticketNo: '008', ticketName: 'Customer UID Generation', createdBy: "Rohit", assignedTo: 'Ankur', statusId: 2 },
    { ticketId: 126, projectId: 2, ticketNo: '009', ticketName: 'Products Filter', createdBy: "Rahul", assignedTo: 'Ankit', statusId: 4 },
    { ticketId: 127, projectId: 2, ticketNo: '010', ticketName: 'Product Category', createdBy: "Rohit", assignedTo: 'Devendra', statusId: 3 },
    { ticketId: 128, projectId: 1, ticketNo: '011', ticketName: 'Techer Assignment', createdBy: "Rohit", assignedTo: 'Himanshu', statusId: 3 },
    { ticketId: 126, projectId: 1, ticketNo: '012', ticketName: 'User Role', createdBy: "Rahul", assignedTo: 'Himanshu', statusId: 4 },
    { ticketId: 127, projectId: 3, ticketNo: '013', ticketName: 'Carts', createdBy: "Rahul", assignedTo: 'Chetan', statusId: 5 },
    { ticketId: 128, projectId: 1, ticketNo: '014', ticketName: 'School Masters', createdBy: "Rahul", assignedTo: 'Ankur', statusId: 2 }
  ];

  filteredTickets: any []= [];

  onProjectChange() {
    this.filteredTickets =  this.ticketsArray.filter(x=>x.projectId == this.selectedProject);
    debugger;
  }

  getTicketsByStatusId (statusId: number) {
    return this.filteredTickets.filter(m=>m.statusId == statusId)
  }
}
