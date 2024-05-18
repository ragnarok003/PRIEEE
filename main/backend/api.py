from flask import Flask,request,jsonify

import os
app=Flask(__name__)

@app.route('/',methods=['GET'])
def predict():
   data=request.json
   data=data.get('led_state')
   print(data)
   return data   

if __name__=='__main__':
   app.run(debug=True)