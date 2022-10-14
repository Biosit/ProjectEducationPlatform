"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Calificaciones, Inscribir, BloquearToken, TodosEstudiantes
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt
from flask_bcrypt import Bcrypt
from datetime import date, time, datetime, timezone

api = Blueprint('api', __name__)
app=Flask(__name__)
bcrypt=Bcrypt(app)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def login():
    usuario=request.json.get("usuario",None)
    clave=request.json.get("clave", None)

    user=User.query.filter_by(usuario=usuario).first()

    if user is None:
        return jsonify({"message":"Login failed"}),401

    if not bcrypt.check_password_hash(user.clave, clave):
        return jsonify({"message":"wrong password"}),401
    
    access_token=create_access_token(identity=user.id)
    return jsonify({"token":access_token})

@api.route("/signup", methods=["POST"])#registrar personas
def signup():
    usuario=request.json.get("usuario",None)
    correo=request.json.get("correo",None)
    nombre=request.json.get("nombre",None)
    perfil=request.json.get("perfil",None)
    clave=request.json.get("clave",None)
    cedula=request.json.get("cedula",None)
    try:
      clave=bcrypt.generate_password_hash(clave, rounds=None).decode("utf-8") 
      user=User(usuario=usuario,correo=correo, nombre=nombre,perfil=perfil, clave=clave)
      Estudiantes=TodosEstudiantes(cedula=cedula,usuario=usuario,correo=correo, nombre=nombre,perfil=perfil)
      db.session.add(user)
      db.session.add(Estudiantes)
      db.session.commit()
      return jsonify({"message":"Usuario registrado"}),201
    except Exception as err:
        db.session.rollback()
        print(err)
        return jsonify({"message":"internal error"}),500


@api.route('/estudiantes', methods=['GET'])
def estudiantes():
    estudiantes=TodosEstudiantes.query.all()
    estudiantes=list(map(lambda Estudiantes: Estudiantes.serialize(), estudiantes))    
    return jsonify(estudiantes), 200


@api.route('/Users', methods=['GET'])
def Users():
    usuarios=User.query.all()
    usuarios=list(map(lambda Usuarios: Usuarios.serialize(), usuarios))    
    return jsonify(usuarios), 200

@api.route('/notas', methods=['GET'])
def Notas():
    notas=Calificaciones.query.all()
    notas=list(map(lambda puntaje: puntaje.serialize(), notas))    
    return jsonify(notas), 200


@api.route('/inscripciones', methods=['GET'])
def inscripciones():
    inscripcion=Inscribir.query.all()
    inscripcion=list(map(lambda inscrito: inscrito.serialize(), inscripcion))    
    return jsonify(inscripcion), 200

@api.route('/Bienvenido', methods=['GET'])
@jwt_required()

def Bienvenidos():
    user=User.query.get(get_jwt_identity())
    response_body = {
        "message": "Bienvenido",
        "ID USers" : get_jwt_identity(),
        "Usuario": user.usuario
    }
    BloquearTokens=BloquearToken.query.filter_by(token=get_jwt()["jti"]).first()
    if isinstance(BloquearTokens, BloquearToken):
        return jsonify(msg="Acceso revocado")

    return jsonify(user.serialize()), 200

@api.route("/logout", methods=["POST"])
@jwt_required()
def destruir():
    jwt = get_jwt()["jti"]
    tiempo=datetime.now(timezone.utc)
    tokens=BloquearToken(token=jwt, create_at=tiempo, correo=get_jwt_identity())
    db.session.add(tokens)
    db.session.commit()

    return jsonify(msg="acceso revocado")