from flask import Blueprint, jsonify
from .models import Categoria, Guitarra, Bajo, Bateria, Amplificador

api = Blueprint('api', __name__)

@api.route('/instrumentos', methods=['GET'])
def obtener_instrumentos():
    categorias = Categoria.query.all()
    resultado = {}

    for categoria in categorias:
        # Para cada categoría armamos lista de todos los instrumentos
        instrumentos = []

        # Unimos guitarras, bajos, baterias y amplificadores en una lista
        instrumentos += [g.serialize() for g in categoria.guitarras]
        instrumentos += [b.serialize() for b in categoria.bajos]
        instrumentos += [bat.serialize() for bat in categoria.baterias]
        instrumentos += [a.serialize() for a in categoria.amplificadores]

        resultado[categoria.nombre.lower()] = instrumentos

    return jsonify(resultado), 200
