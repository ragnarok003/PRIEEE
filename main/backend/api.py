from flask import Flask, request, jsonify
from flask_cors import CORS
from recommend import crop_recommend,crop_yeild
from icecream import ic
app = Flask(__name__)
CORS(app) 



@app.route('/api/recommend', methods=['POST'])
def handle_form_data():
    data = request.json
    cropS=crop_recommend(data)
    cropY=crop_yeild(data,cropS)
    response=cropY|{"Crop":cropS}|data
    return jsonify(response)
   

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0',port=5000)
