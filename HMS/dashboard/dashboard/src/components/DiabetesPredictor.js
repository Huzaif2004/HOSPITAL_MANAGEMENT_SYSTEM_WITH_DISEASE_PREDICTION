import React, { useState } from 'react';
import '../styles/prediction/DiabetesPredictor.css'

function DiabetesPredictor() {
  const [formData, setFormData] = useState({
    glucose: '',
    insulin: '',
    bmi: '',
    age: ''
  });

  const [prediction, setPrediction] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    setPrediction(result.prediction);
  };

  return (
    <div className='parent-diabetes'>

    
    <div className="diabetes-predictor-login">
      <h1>Diabetes Predictor</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="glucose"
          placeholder="Glucose Level"
          required
          value={formData.glucose}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="insulin"
          placeholder="Insulin"
          required
          value={formData.insulin}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="bmi"
          placeholder="BMI"
          required
          value={formData.bmi}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          required
          value={formData.age}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Predict
        </button>
      </form>

      {isSubmitted && prediction && (
        <div className="diabetes-predictor-result">
          <p>{prediction}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default DiabetesPredictor;
