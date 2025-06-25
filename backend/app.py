from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/libros', methods=['GET'])
def get_libros():
    return jsonify([{"id": 1, "titulo": "El Principito"}])

if __name__ == '__main__':
    app.run(debug=True)