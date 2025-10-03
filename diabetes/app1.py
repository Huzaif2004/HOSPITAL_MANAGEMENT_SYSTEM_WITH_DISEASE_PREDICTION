from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React

# Load the model, scaler, and model columns
model = joblib.load('knn_classifier_model.joblib')
scaler = joblib.load('scaler.joblib')
model_columns = joblib.load('model_columns.joblib')

# Define the prediction route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input data from the request (from React form)
        input_data = request.json
        
        # Extract the input tuple values from the request
        input_tuple = (
            input_data['age'], input_data['sex'], input_data['cp'],
            input_data['trestbps'], input_data['chol'], input_data['fbs'],
            input_data['restecg'], input_data['thalach'], input_data['exang'],
            input_data['oldpeak'], input_data['slope'], input_data['ca'], input_data['thal']
        )
        
        # Convert input data to a NumPy array and reshape it
        input_data_as_numpy_array = np.asarray(input_tuple)
        input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

        # Create a DataFrame from the input data with appropriate column names
        input_df = pd.DataFrame(input_data_reshaped, columns=[
            'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 
            'restecg', 'thalach', 'exang', 'oldpeak', 
            'slope', 'ca', 'thal'
        ])

        # Scale the appropriate columns (use the saved StandardScaler)
        columns_to_scale = ['age', 'trestbps', 'chol', 'thalach', 'oldpeak']
        input_df[columns_to_scale] = scaler.transform(input_df[columns_to_scale])

        # Apply one-hot encoding (same as during training)
        input_df = pd.get_dummies(input_df, columns=['sex', 'cp', 'fbs', 'restecg', 'exang', 'slope', 'ca', 'thal'])

        # Ensure that all columns from the training data are present in the input (fill missing columns with 0)
        for col in model_columns:
            if col not in input_df.columns:
                input_df[col] = 0

        # Reorder the input DataFrame columns to match the model columns
        input_df = input_df[model_columns]

        # Make the prediction
        prediction = model.predict(input_df)

        # Return the prediction as a JSON response
        return jsonify({'prediction': int(prediction[0])})

    except Exception as e:
        return jsonify({'error': str(e)})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True,port=5001)
