from django.urls import path
import prediction_api.views as views

urlpatterns = [
    path('predict/', views. STROKE_Model_Predict.as_view(), name = 'api_predict'),
]