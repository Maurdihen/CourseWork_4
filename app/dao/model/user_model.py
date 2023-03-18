from setup_db import db
from marshmallow import Schema, fields

class User(db.Model):
	__tablename__ = 'user'
	id = db.Column(db.Integer, primary_key=True, nullable=False)
	email = db.Column(db.String, unique=True, nullable=False)
	password = db.Column(db.String, nullable=False)
	name = db.Column(db.String)
	surname = db.Column(db.String)
	favorite_genre = db.Column(db.String)

class UserSchema(Schema):
	id = fields.Integer()
	email = fields.Str()
	password = fields.Str()
	name = fields.Str()
	surname = fields.Str()
	favorite_genre = fields.Str()