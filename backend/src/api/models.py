from flask_sqlalchemy import SQLAlchemy
from datetime import datetime  

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=True)
    apellido = db.Column(db.String(120), nullable=True)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    telefono = db.Column(db.String(20))
    direccion_line1 = db.Column(db.String(120))
    direccion_line2 = db.Column(db.String(120), nullable=True)
    ciudad = db.Column(db.String(80))
    codigo_postal = db.Column(db.String(20))
    pais = db.Column(db.String(50))
    role = db.Column(db.String(50), default='cliente')
    is_active = db.Column(db.Boolean(), default=True)

    # Relaciones con instrumentos (back_populates)
    guitarras_list = db.relationship('Guitarra', back_populates='user', lazy=True)
    bajos_list = db.relationship('Bajo', back_populates='user', lazy=True)
    baterias_list = db.relationship('Bateria', back_populates='user', lazy=True)
    amplificadores_list = db.relationship('Amplificador', back_populates='user', lazy=True)

    def __repr__(self):
        return f'<User {self.correo}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "correo": self.correo,
            "telefono": self.telefono,
            "direccion_line1": self.direccion_line1,
            "direccion_line2": self.direccion_line2,
            "ciudad": self.ciudad,
            "codigo_postal": self.codigo_postal,
            "pais": self.pais,
            "role": self.role,
            "is_active": self.is_active
        }


class Newsletter(db.Model):
    __tablename__ = 'newsletter'

    id = db.Column(db.Integer, primary_key=True)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    fecha_suscripcion = db.Column(db.DateTime, default=datetime.utcnow)
    nombre = db.Column(db.String(120), nullable=True)
    confirmado = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<Newsletter {self.correo}>'

    def serialize(self):
        return {
            "id": self.id,
            "correo": self.correo,
            "fecha_suscripcion": self.fecha_suscripcion.isoformat(),
            "nombre": self.nombre,
            "confirmado": self.confirmado
        }


class Categoria(db.Model):
    __tablename__ = 'categorias'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)

    guitarras = db.relationship('Guitarra', backref='categoria', lazy=True)
    bajos = db.relationship('Bajo', backref='categoria', lazy=True)
    baterias = db.relationship('Bateria', backref='categoria', lazy=True)
    amplificadores = db.relationship('Amplificador', backref='categoria', lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre
        }


class Guitarra(db.Model):
    __tablename__ = 'guitarras'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    descripcion = db.Column(db.String(500))
    imagen = db.Column(db.String(255))
    precio = db.Column(db.Float)
    categoria_id = db.Column(db.Integer, db.ForeignKey('categorias.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # <-- clave foránea a User

    user = db.relationship('User', back_populates='guitarras_list')

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "imagen": self.imagen,
            "precio": self.precio,
            "categoria": self.categoria.nombre if self.categoria else None,
            "user": self.user.nombre if self.user else None
        }


class Bajo(db.Model):
    __tablename__ = 'bajos'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    descripcion = db.Column(db.String(500))
    imagen = db.Column(db.String(255))
    precio = db.Column(db.Float)
    categoria_id = db.Column(db.Integer, db.ForeignKey('categorias.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # <-- clave foránea a User

    user = db.relationship('User', back_populates='bajos_list')

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "imagen": self.imagen,
            "precio": self.precio,
            "categoria": self.categoria.nombre if self.categoria else None,
            "user": self.user.nombre if self.user else None
        }


class Bateria(db.Model):
    __tablename__ = 'baterias'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    descripcion = db.Column(db.String(500))
    imagen = db.Column(db.String(255))
    precio = db.Column(db.Float)
    categoria_id = db.Column(db.Integer, db.ForeignKey('categorias.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # <-- clave foránea a User

    user = db.relationship('User', back_populates='baterias_list')

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "imagen": self.imagen,
            "precio": self.precio,
            "categoria": self.categoria.nombre if self.categoria else None,
            "user": self.user.nombre if self.user else None
        }


class Amplificador(db.Model):
    __tablename__ = 'amplificadores'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    descripcion = db.Column(db.String(500))
    imagen = db.Column(db.String(255))
    precio = db.Column(db.Float)
    categoria_id = db.Column(db.Integer, db.ForeignKey('categorias.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # <-- clave foránea a User

    user = db.relationship('User', back_populates='amplificadores_list')

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "imagen": self.imagen,
            "precio": self.precio,
            "categoria": self.categoria.nombre if self.categoria else None,
            "user": self.user.nombre if self.user else None
        }
