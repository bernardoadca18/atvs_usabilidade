from flask import Flask, jsonify, request
import json
import os

app = Flask(__name__)
DATA_FILE = 'database/data.json'


def read_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    else:
        return []

def write_data(data):
    with open(DATA_FILE, 'w') as file:
        json.dump(data, file)
        

@app.route("/api/data", methods=["GET"])
def get_data():
    data = read_data()
    return jsonify(data)


@app.route("/api/data", methods=["POST"])
def add_data():
    new_entry = request.json
    data = read_data()
    
    if data:
        next_id = max(entry.get("id") for entry in data) + 1
    else:
        next_id = 0
    
    new_entry["id"] = next_id

    data.append(new_entry)
    write_data(data)
    
    return jsonify(new_entry), 201


@app.route("/api/data/<int:id>", methods=["PUT"])
def update_data(id):
    updated_entry = request.json
    data = read_data()
    
    for index, entry in enumerate(data):
        if entry.get("id") == id:
            data[index] = updated_entry
            write_data(data)
            return jsonify(updated_entry), 200
    return jsonify({"error": "Entry not found"}), 404


@app.route("/api/data/<int:id>", methods=["DELETE"])
def delete_data(id):
    data = read_data()
    data = [entry for entry in data if entry.get("id") != id]
    write_data(data)
    
    return jsonify({"message": "Entry deleted"}), 204


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)