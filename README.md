# Hospital Management System with Disease Prediction

**Overview**

This project is a comprehensive hospital management system that integrates machine learning models for predicting diabetes and heart disease. It aims to streamline hospital operations such as appointment scheduling, patient management, and doctor administration, while providing predictive tools to assist in early disease detection. The system consists of a patient-facing website, an administrative dashboard, and backend services for data processing and predictions.

**Features**

- **Patient Management**: Register patients, view patient records, and manage appointments.
- **Doctor and Staff Administration**: Add and manage doctors, admins, and receptionists.
- **Appointment Scheduling**: Book and manage appointments through the patient portal.
- **Disease Prediction**: Predict diabetes risk based on user inputs and heart disease likelihood using trained models.
- **Dashboard**: Administrative interface for managing hospital operations and viewing predictions.
- **User Authentication**: Login and registration for patients and staff.

**System Architecture / Workflow**

The system follows a client-server architecture:

1. **Frontend**: React-based interfaces for patients (HMS/frontend) and admins (HMS/dashboard).
2. **Backend**: Spring Boot application handling business logic, database interactions, and API endpoints.
3. **Database**: MySQL for storing patient, doctor, and appointment data.
4. **Machine Learning Services**: Flask APIs for diabetes and heart disease predictions, using pre-trained models (SVM, KNN, Random Forest).
5. **Workflow**: Users interact via the frontend, which communicates with the backend for data operations and ML services for predictions.

**Tech Stack**

- **Frontend**: React.js, Axios for API calls, React Router for navigation.       
- **Backend**: Spring Boot (Java 17), Spring Data JPA, Spring Web.        
- **Database**: MySQL.         
- **Machine Learning**: Python, Flask, Scikit-learn, Pandas, NumPy, Joblib for model serialization.          
- **Tools**: Maven for Java builds, npm for React, Git for version control.           

**Setup & Installation**

### Prerequisites

- Java 17 or higher   
- Node.js and npm    
- Python 3.x   
- MySQL Server       
- Git         

**Steps**

1. **Clone the repository**:

   ```
   git clone <repository-url>
   cd Mini_Project_1
   ```

2. **Set up the database**:

   - Install and start MySQL.
   - Create a database named `hms`.
   - Update `HMS/backend/demo/src/main/resources/application.properties` with your MySQL credentials.

3. **Run the backend**:

   ```
   cd HMS/backend/demo
   mvn spring-boot:run
   ```

   The backend will run on `http://localhost:8080`.

4. **Run the patient frontend**:

   ```
   cd HMS/frontend/hms
   npm install
   npm start
   ```

   The patient site will run on `http://localhost:3000`.

5. **Run the dashboard**:

   ```
   cd HMS/dashboard/dashboard
   npm install
   npm start
   ```

   The dashboard will run on `http://localhost:3001`.

6. **Run the ML services**:
   - For diabetes prediction:
     ```
     cd diabetes
     python app.py
     ```
     Runs on `http://localhost:5000`.
   - For heart disease prediction, similar setup if separate API is used.

**Usage**

- **Patient Portal**: Access the website to book appointments, view services, and use the diabetes predictor.
- **Admin Dashboard**: Log in to manage doctors, patients, and view laboratory predictions.
- **APIs**: Use endpoints like `/api/patients` for backend operations or `/predict` for ML predictions.
- Ensure all services are running before accessing the frontends.

**Project Structure**

- `HMS/backend/`: Spring Boot backend with controllers, services, models, and repositories.
- `HMS/frontend/hms/`: React app for patient interactions.
- `HMS/dashboard/dashboard/`: React app for administrative tasks.
- `diabetes/`: Python scripts and models for disease prediction, including Flask APIs.
- `README.md`: This file.

**Future Improvements**

- Integrate more ML models for additional diseases.
- Add real-time notifications for appointments.
- Implement user roles and permissions more granularly.
- Enhance UI/UX with responsive design and accessibility features.
- Add testing frameworks for backend and frontend components.


