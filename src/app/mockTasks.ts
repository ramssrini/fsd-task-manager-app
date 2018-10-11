import { Task } from "./task";

export const TASKS : Task[] = [{
    "taskId": 1,
    "parentTaskId": 100,
    "taskDesc": "Angular Training",
    "parentTaskDesc": "Training",
    "startDate": "03/09/2018",
    "endDate": "06/02/2018",
    "priority": 14
  }, {
    "taskId": 2,
    "parentTaskId": 100,
    "taskDesc": "React Training",
    "parentTaskDesc": "Training",
    "startDate": "08/23/2018",
    "endDate": "01/09/2018",
    "priority": 25
  }, {
    "taskId": 6,
    "parentTaskId": 101,
    "taskDesc": "Requirement gathering",
    "parentTaskDesc": "Requirement",
    "startDate": "07/26/2018",
    "endDate": "09/25/2018",
    "priority": 15
  }, {
    "taskId": 7,
    "parentTaskId": 110,
    "taskDesc": "Coding UI",
    "parentTaskDesc": "Construction",
    "startDate": "02/16/2018",
    "endDate": "02/04/2018",
    "priority": 1
  }, {
    "taskId": 3,
    "parentTaskId": 100,
    "taskDesc": "Spring Boot Training",
    "parentTaskDesc": "Training",
    "startDate": "10/21/2017",
    "endDate": "12/25/2017",
    "priority": 22
  }, {
    "taskId": 15,
    "parentTaskId": 110,
    "taskDesc": "Spring Restful web service development",
    "parentTaskDesc": "Construction",
    "startDate": "12/09/2017",
    "endDate": "01/03/2018",
    "priority": 17
  }, {
    "taskId": 16,
    "parentTaskId": 122,
    "taskDesc": "Unit Testing",
    "parentTaskDesc": "Testing",
    "startDate": "10/29/2017",
    "endDate": "07/24/2018",
    "priority": 18
  }, {
    "taskId": 17,
    "parentTaskId": 122,
    "taskDesc": "Integration Testing",
    "parentTaskDesc": "Testing",
    "startDate": "08/07/2018",
    "endDate": "07/29/2018",
    "priority": 20
  }, {
    "taskId": 20,
    "parentTaskId": 120,
    "taskDesc": "Build deployment",
    "parentTaskDesc": "Deployment",
    "startDate": "02/12/2018",
    "endDate": "04/22/2018",
    "priority": 1
  }, {
    "taskId": 7,
    "parentTaskId": 102,
    "taskDesc": "Analysis",
    "parentTaskDesc": "A and D",
    "startDate": "08/30/2018",
    "endDate": "06/25/2018",
    "priority": 1
  }];