from flask import request
from flask_restx import Namespace, Resource

from container import auth_service
from container import user_service

auth_ns = Namespace("auth")

@auth_ns.route("/login/")
class AuthsViews(Resource):
    def post(self):
        data = request.json
        if None in [data.get("email", None), data.get("password", None)]:
            return "", 400
        tokens = auth_service.generate_token(data.get("email", None), data.get("password", None))

        return tokens, 201

    def put(self):
        data = request.json
        token = data.get("refresh_token")

        tokens = auth_service.approve_refresh_token(token)

        return tokens, 201

@auth_ns.route("/register/")
class AuthViews(Resource):
    def post(self):
        req_data = request.json
        user_service.create(req_data)
        return "", 201