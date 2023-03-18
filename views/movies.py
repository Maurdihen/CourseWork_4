from flask_restx import Namespace, Resource
from container import movie_service
from app.dao.model.movie_model import MovieSchema
from flask import request
from decorators import auth_reguired

film_ns = Namespace("movies")

movie_schema = MovieSchema()
movies_schema = MovieSchema(many=True)

@film_ns.route("/")
class FilmsView(Resource):
    @auth_reguired
    def get(self):
        genres_args = request.args.get("genre_id", False)
        director_args = request.args.get("director_id", False)
        year_args = request.args.get("year", False)
        status = request.args.get("status", False)
        page = request.args.get("page", False)
        return movies_schema.dump(movie_service.get_all(genres_args, director_args, year_args, status, page)), 200

    @auth_reguired
    def post(self):
        req_json = request.json
        movie_service.create(req_json)
        return "", 201

@film_ns.route("/<int:fid>/")
class FilmView(Resource):
    @auth_reguired
    def get(self, mid):
        return movie_schema.dump(movie_service.get_one(mid)), 200

    @auth_reguired
    def put(self, mid):
        req_json = request.json
        movie_service.update(req_json, mid)
        return "", 204

    @auth_reguired
    def delete(self, mid):
        movie_service.delete(mid)
        return "", 204
