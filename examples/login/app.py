from flask import Flask, request, render_template, jsonify
import os
import shutil


app = Flask(__name__)

@app.route("/", methods=['GET'])
def index():

    if request.method == "GET":
        return render_template("index.html")

@app.route("/login", methods=['POST'])
def login():

    if request.method == "POST":
        return jsonify({"status": "Logged in successfully!"})

@app.route("/login-with-reload", methods=['POST'])
def login_with_reload():

    if request.method == "POST":
        return jsonify({"status": "Logged in successfully!"})


if __name__ == "__main__":
    FASTQUERY_PATH = "static/js/fastquery.js"
    if not os.path.exists(FASTQUERY_PATH):
        shutil.copy("../../fastquery.js", "static/js/fastquery.js")

    app.run()