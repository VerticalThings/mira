from flask import Flask, redirect, url_for, request;
import json;
import socket
from cryptography.fernet import Fernet;
app = Flask(__name__);

@app.route("/miramarket/api/register", methods=["POST"])
def signup():
    postedform = request.form;
    username = postedform["username"].lower()
    password = postedform["password"]
    verification = postedform["lowverify"]
    if verification != "0481613180107414":
    	return "You need an api key to get access to this."
    else:
    	pass
    return postedform
app.run(host="0.0.0.0");
