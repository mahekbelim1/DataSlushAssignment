from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load jobs data
jobs_df = pd.read_csv("../data_ds/all_jobs_top10.csv")

@app.route("/jobs", methods=["GET"])
def get_jobs():
    jobs = jobs_df["job_title"].unique().tolist()
    return jsonify(jobs)

@app.route("/jobs/<job_title>/top10", methods=["GET"])
def get_job_top10(job_title):
    data = jobs_df[jobs_df["job_title"] == job_title].head(10).to_dict(orient="records")
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=5000)




