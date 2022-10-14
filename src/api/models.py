from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(120), unique=True, nullable=False)
    correo = db.Column(db.String(80), unique=True, nullable=False)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    perfil = db.Column(db.String(120), unique=False, nullable=False)
    clave = db.Column(db.String(300), unique=True, nullable=False)
   # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.correo}>'

    def serialize(self):
        return {
            "id": self.id,
            "usuario": self.usuario,
            "correo": self.correo,
            "nombre": self.nombre,
            "perfil": self.perfil,
            "clave": self.clave,
            # do not serialize the password, its a security breach
        }

class TodosEstudiantes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cedula = db.Column(db.String(120), unique=True, nullable=False)
    usuario = db.Column(db.String(120), unique=True, nullable=False)
    correo = db.Column(db.String(80), unique=True, nullable=False)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    perfil = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.correo}>'

    def serialize(self):
        return {
            "id": self.id,
            "cedula":self.cedula,
            "usuario": self.usuario,
            "correo": self.correo,
            "nombre": self.nombre,
            "perfil": self.perfil,
        }

class Calificaciones(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    inscripcion=db.Column(db.Boolean, unique=False, nullable=False)
    actividad=db.Column(db.Boolean(), unique=False, nullable=False)
    calificacion=db.Column(db.Integer,nullable=False)

    def __repr__(self):
        return f'<User {self.inscripcion}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "inscripcion": self.inscripcion,
            "actividad": self.actividad,
            "calificacion": self.calificacion,
            # do not serialize the password, its a security breach
        }

class Inscribir(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    perfil = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "perfil":self.perfil
            # do not serialize the password, its a security breach
        }

class BloquearToken(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    token=db.Column(db.String(200), unique=True, nullable=False)
    correo = db.Column(db.String(80), unique=True, nullable=False)
    create_at=db.Column(db.DateTime, nullable=False)

    def serialize(self):
        return{
            "id":self.id,
            "token":self.token,
            "correo":self.correo,
            "create_at":self.create_at
        }