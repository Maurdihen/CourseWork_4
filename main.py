from flask import Flask, render_template
from flask_cors import CORS
from flask_restx import Api

from config import Config
from setup_db import db
from views.genres import genres_ns
from views.movies import film_ns
from views.directors import director_ns
from views.auth import auth_ns
from views.users import user_ns
from app.dao.model.user_model import User
from app.dao.model.movie_model import Movie
from app.dao.model.genre_model import Genre
from app.dao.model.director_model import Director


def create_app(config: Config) -> Flask:
    app = Flask(__name__)
    app.config.from_object(config)
    app.app_context().push()
    @app.route("/")
    def index():
        return render_template("index.html")
    configure_app(app)

    return app

def configure_app(app):
    db.init_app(app)
    api = Api(app, doc="/docs")
    api.add_namespace(genres_ns)
    api.add_namespace(film_ns)
    api.add_namespace(director_ns)
    api.add_namespace(auth_ns)
    api.add_namespace(user_ns)
    load_data(app, db)


def load_data(app, db):
    with app.app_context():
        db.create_all()
        # u1 = User(email="n.ilin@it-park.tech", password="my_little_pony", name="kolya", surname="ilin",
        #           favorite_genre="thriller")
        # u2 = User(email="e.arhipov@it-park.tech", password="qwerty", name="egor", surname="arhipov",
        #           favorite_genre="comedy")
        # u3 = User(email="r.boronov@it-park.tech", password="P@ssw0rd", name="roma", surname="boronov",
        #           favorite_genre="retro")
        # m1 = Movie(title="sad", description="asd", trailer="asd", year=2000, rating=9.9,
        #            genre_id=1, director_id=1)
        # m2 = Movie(title="Avatar", description="dejad", trailer="jasdlkd", year=2000, rating=9.9,
        #            genre_id=1, director_id=1)
        # m3 = Movie(title="fsf", description="fsd", trailer="fsd", year=2000, rating=9.9,
        #            genre_id=1, director_id=1)
        # g1 = Genre(name="sefse")
        # d1 = Director(name="sfsdf")
        # with db.session.begin():
        #     db.session.add_all([u1,u2, u3, m1, m2, m3, g1, d1])


if __name__ == "__main__":
    app = create_app(Config)
    CORS(app)
    app.run(debug=True)