import json
import pickle
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from icecream import ic
label_encoder = LabelEncoder()
load_model_R=pickle.load(open('Crop_Recommend.pkl','rb'))
load_model_Y=pickle.load(open('Crop_Yeild_Predict.pkl','rb'))

def crop_yeild(request,cropS):
    ip={"Crop":cropS}|request
    input_df = pd.DataFrame([ip])
    input_df['Season']=label_encoder.fit_transform(input_df['Season'])
    input_df['State']=label_encoder.fit_transform(input_df['State'])
    input_df['Crop']=label_encoder.fit_transform(input_df['Crop'])
    y_pred = load_model_Y.predict(input_df)
    y_pred=pd.DataFrame(y_pred,columns=['Fertilizer','Pesticide','Yield']).to_json(orient='records')
    y_pred=json.loads(y_pred)[0]
    return y_pred
    
def crop_recommend(request):

   input_df = pd.DataFrame([request])
   ic(input_df)
   input_df['Season']=label_encoder.fit_transform(input_df['Season'])
   input_df['State']=label_encoder.fit_transform(input_df['State'])
   y_pred = load_model_R.predict(input_df)

   return y_pred[0]

a=crop_yeild({
    "Crop_Year": 2024,
    "Season": "Kharif",
    "State": "Tamil Nadu",
    "Area": 95217.0,
    "Production": 35885,
    "Annual_Rainfall":315.9,
    },"Urad")

print(a)
#output {'Fertilizer': 12.1582367994, 'Pesticide': 16339137.180100005, 'Yield': 34844.3036}
