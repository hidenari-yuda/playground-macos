# Reach

Web: https://reach-agent.com

LP: https://reach.motoyui.com

I have been in charge of the development of this service from its predecessor service in February 2022 (service now terminated) until now in October 2023.

There are 4 people in the entire company, and since there are 2 engineers, myself and an employee, we are in charge of the work regardless of backend and frontend.

Since the employee was also inexperienced, we are creating the service by discussing the addition of functions, DB design, etc. with the employees who are actually using and selling the service.

## Job Details.
### Backend:Go, Docker

We are using Echo for middleware implementation and sqlx for DB. As a CRM for a recruiting company, there are many aspects of business logic in the information of jobs and job seekers owned by each recruiting agency, so we designed a Domain-driven design.

In addition, the RPA service that we had been using for a while was not accurate enough for the cost, and we had to customize it ourselves. We proposed that RPA be added as an optional feature within Reach, and were responsible for the entire functionality.

### Frontend: React, NextJs, TypeScript

NextJs is used, and recoil is used for state management.

When adding basic functionalities, we are in charge of each feature, so we work on the frontend screen as we start, and then add the missing elements to the backend API or DB columns.

As for the front-end, due to the small size of the company, we do not have a designer, and our sales staff also serve as PMs, so the UI/UX aspect is implemented by hand based on feedback from our sales staff and users.

### Infrastructure: AWS, Firebase, MySQL
The services and roles used are as follows

Route53: Domain management
S3: Location of static files such as next.js content
Cloud Front: The destination when the site is accessed, using S3 files as the delivery destination. Since the service specification does not require any of the Server Less Functions of Server Side Rendering, we chose this form so that we can use AWS instead of Vercel.

ECS: Runs a Backend Docker container placed in ECR, which is used to add RPA processing.

ALB: Passing access from the front desk to ECS

RDS: Managed database. Originally planned to store video data, but due to specification changes, only text was used, so a Master/Slave configuration was used for redundancy.

Firebase is mainly used for authentication with Auth and for storing images with Firebase Storage.

When implementing RPA, it was necessary to set up a batch server for RPA separately from the API server, so it was implemented on ECS. After that, batch processing had to be added again for notification processing, etc., and batch servers had to be set up for each agent, so the current deployment process is complicated.

The front end is an automatic deployment using Github Action.

Translated with www.DeepL.com/Translator (free version)