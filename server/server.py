from flask import Flask, render_template, jsonify, url_for
from flask import request
import pymongo
from pymongo import MongoClient
import requests
import json
import os

apiKey = 'ae4a410ac17411638d764d47a4c57495'
customerId ='5f3574cbf1bac107157e1029'

app = Flask(__name__)

mongoSrc = "mongodb+srv://admin:admin@cluster0.zxcnk.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority"
cluster = MongoClient(mongoSrc)
db = cluster["Harmonize"]
dataIndex = db["PurchaseData"]
studentLoan = db['StudentLoan']

@app.route('/', methods = ['GET', 'POST'])
def getBalance():
    """
    returns balance of test "saving account"
    """
    url = 'http://api.reimaginebanking.com/customers/{}/accounts?key={}'.format(customerId,apiKey)
    # Create a Savings Account

    response = requests.get(
    	url,
    	# data=json.dumps(payload),
    	headers={'content-type':'application/json'},
    	)
    return str(response.json()[0]['balance'])

@app.route('/add', methods = ['POST'])
def sendDataToMDB():
    """
    Parses array of items from frontend, sends to mongoDB
    :input: array of json objs - name, price, need vs want
    """
    feData = request.get_json()
    for i in feData:
        post = {
            "_id" : dataIndex.count_documents({}) + 1 ,
            "ItemName" : i['name'],
            "Price" : i['price'],
            "Need" : i['need']
        }
        dataIndex.insert_one(post)
    return "data has been added to mongoDB Atlas"

@app.route('/get', methods = ['GET'])
def getDataFromDB():
    """
    Gets names and items for
    """
    cursor = dataIndex.find({})
    dataArr = []
    for doc in cursor:
        dataArr.append(doc)
    return jsonify(dataArr)

if __name__ == "__main__":
    app.debug = True
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
