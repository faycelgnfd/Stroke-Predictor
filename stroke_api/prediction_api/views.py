from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import status
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from prediction_api.apps import PredictionConfig
import pandas as pd

class STROKE_Model_Predict(APIView):

    def post(self, request, format=None):
        data = request.data
        keys = []
        values = []
        for key in data:
            keys.append(key)
            values.append(data[key])
     
        X = pd.Series(values).to_numpy().reshape(1, -1)
      
        df2 = pd.DataFrame(data=X, columns=keys)
      
        loaded_mlmodel = PredictionConfig.mlmodel 
        y_pred = loaded_mlmodel.predict(df2)
        y_pred = pd.Series(y_pred)
        target_map = {0: 'Negative', 1: 'Positive'}
        y_pred = y_pred.map(target_map).to_numpy()
        response_dict = {"Predicted Stroke": y_pred[0]}
        return Response(response_dict, status=200)