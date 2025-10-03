import React, { useState } from 'react';
import axios from 'axios';
import '../styles/prediction/HeartDiseasePredictor.css'

const HeartDiseaseForm = () => {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/predict', formData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error making prediction", error);
        }
    };

    // Check if all form fields are filled
    const isFormValid = () => {
        return Object.values(formData).every(value => value !== '');
    };

    return (
        <section className='parent-heart'>

        
        <div className="heart-disease-form">
            <h2>Heart Disease Prediction Form</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Age:</label>
                                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                                </div>
                            </td>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Sex:</label>
                                    <select name="sex" value={formData.sex} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="0">Female</option>
                                        <option value="1">Male</option>
                                    </select>
                                </div>
                            </td>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Chest Pain Type:</label>
                                    <select name="cp" value={formData.cp} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="0">Typical Angina</option>
                                        <option value="1">Atypical Angina</option>
                                        <option value="2">Non-Anginal Pain</option>
                                        <option value="3">Asymptomatic</option>
                                    </select>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Resting BP:</label>
                                    <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} />
                                </div>
                            </td>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Cholesterol:</label>
                                    <input type="number" name="chol" value={formData.chol} onChange={handleChange} />
                                </div>
                            </td>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Fasting Blood Sugar:</label>
                                    <select name="fbs" value={formData.fbs} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="0">Below 120 mg/dl</option>
                                        <option value="1">Above 120 mg/dl</option>
                                    </select>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Resting ECG:</label>
                                    <select name="restecg" value={formData.restecg} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="0">Normal</option>
                                        <option value="1">ST-T Wave Abnormality</option>
                                        <option value="2">Left Ventricular Hypertrophy</option>
                                    </select>
                                </div>
                            </td>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Max Heart Rate:</label>
                                    <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} />
                                </div>
                            </td>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Exercise Angina:</label>
                                    <select name="exang" value={formData.exang} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </select>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Oldpeak:</label>
                                    <input type="number" name="oldpeak" step="0.1" value={formData.oldpeak} onChange={handleChange} />
                                </div>
                            </td>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>ST Slope:</label>
                                    <select name="slope" value={formData.slope} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="0">Upsloping</option>
                                        <option value="1">Flat</option>
                                        <option value="2">Downsloping</option>
                                    </select>
                                </div>
                            </td>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Major Vessels:</label>
                                    <input type="number" name="ca" value={formData.ca} onChange={handleChange} />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="table-cell">
                                <div className="form-group">
                                    <label>Thalassemia:</label>
                                    <select name="thal" value={formData.thal} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="0">Normal</option>
                                        <option value="1">Fixed Defect</option>
                                        <option value="2">Reversible Defect</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button type="submit" disabled={!isFormValid()}>Predict</button>
            </form>

            {prediction !== null && (
                <div className="result">
                    {prediction === 1 ? (
                        <p>Heart disease predicted!</p>
                    ) : (
                        <p>No heart disease predicted.</p>
                    )}
                </div>
            )}
        </div>
        </section>
    );
};

export default HeartDiseaseForm;
