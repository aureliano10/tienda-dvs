import os
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS

# Importamos el blueprint de rutas y la db de models.py
from src.api.routes import api
from src.api.models import db

app = Flask(__name__)
CORS(app)

# Obtener ruta absoluta base del proyecto (carpeta donde está app.py)
basedir = os.path.abspath(os.path.dirname(__file__))

# Configuración base de datos con ruta absoluta al archivo dentro de 'instance'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'instance', 'instrumentos.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializamos la base de datos con la app
db.init_app(app)
migrate = Migrate(app, db)

# Importar tus modelos aquí para que Flask-Migrate los detecte
from src.api.models import User, Categoria, Guitarra, Bajo, Bateria, Amplificador

# Registramos el blueprint para rutas con prefijo /api
app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
