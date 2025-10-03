from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

model = pickle.load(open('model.pkl', 'rb'))

dataset = pd.read_csv('diabetes.csv')
dataset_X = dataset.iloc[:, [1, 4, 5, 7]].values

from sklearn.preprocessing import MinMaxScaler
sc = MinMaxScaler(feature_range=(0, 1))
dataset_scaled = sc.fit_transform(dataset_X)

@app.route('/')
def home():
    return "Diabetes Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)  # Ensure JSON data is fetched from React
    features = [data['glucose'], data['insulin'], data['bmi'], data['age']]
    final_features = np.array(features).reshape(1, -1)
    prediction = model.predict(sc.transform(final_features))

    if prediction == 1:
        output = "You have Diabetes, please consult a Doctor."
    else:
        output = "You don't have Diabetes."
    
    return jsonify({'prediction': output})

if __name__ == "__main__":
    app.run(debug=True)
