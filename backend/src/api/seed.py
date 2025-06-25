from src.api.models import db, Categoria, Guitarra, Bajo, Bateria, Amplificador
from app import app

def poblar_db():
    with app.app_context():
        if Categoria.query.count() == 0:
            cat1 = Categoria(nombre="Guitarras")
            cat2 = Categoria(nombre="Baterías")
            cat3 = Categoria(nombre="Bajos")
            cat4 = Categoria(nombre="Amplificadores")
            db.session.add_all([cat1, cat2, cat3, cat4])
            db.session.commit()

            guitarras = [
                Guitarra(nombre="Fender Stratocaster", categoria=cat1),
                Guitarra(nombre="Gibson Les Paul", categoria=cat1),
            ]
            baterias = [
                Bateria(nombre="Yamaha Stage Custom", categoria=cat2),
                Bateria(nombre="Pearl Export", categoria=cat2),
            ]
            bajos = [
                Bajo(nombre="Fender Precision", categoria=cat3),
                Bajo(nombre="Ibanez SR", categoria=cat3),
            ]
            amplificadores = [
                Amplificador(nombre="Marshall JCM800", categoria=cat4),
                Amplificador(nombre="Fender Twin Reverb", categoria=cat4),
            ]

            db.session.add_all(guitarras + baterias + bajos + amplificadores)
            db.session.commit()
            print("Base de datos poblada con datos iniciales.")
        else:
            print("La base de datos ya tiene datos, no se poblaron.")

if __name__ == "__main__":
    poblar_db()
