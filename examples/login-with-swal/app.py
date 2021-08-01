from flask import Flask, request, render_template, jsonify
import os
import shutil


app = Flask(__name__)

def get_success_dict(success_message):
    return {"icon": "success", "title": "Success", "text": success_message}

@app.route("/", methods=['GET'])
def index():

    if request.method == "GET":
        return render_template("index.html")

@app.route("/redirected", methods=['GET'])
def redirected():

    if request.method == "GET":
        return render_template("redirected.html")

@app.route("/login", methods=['POST'])
def login():

    if request.method == "POST":
        return jsonify(get_success_dict(success_message="Logged in successfully!"))

@app.route("/login-with-redirect", methods=['POST'])
def login_with_redirect():

    if request.method == "POST":
        success_dict = get_success_dict(success_message="Logged in successfully!")
        success_dict['url'] = "/redirected"
        return jsonify(success_dict)


if __name__ == "__main__":
    FASTQUERY_PATH = "static/js/fastquery.js"
    if not os.path.exists(FASTQUERY_PATH):
        shutil.copy("../../fastquery.js", "static/js/fastquery.js")

    app.run()