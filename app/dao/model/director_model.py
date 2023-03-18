from setup_db import db
from marshmallow import Schema, fields


class Director(db.Model):
    __tablename__ = "director"
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String, unique=True, nullable=False)

class DirectorSchema(Schema):
    id = fields.Int()
    name = fields.Str()