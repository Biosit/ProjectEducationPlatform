"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Calificaciones, Inscribir
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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