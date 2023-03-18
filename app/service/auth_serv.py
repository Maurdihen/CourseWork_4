import jwt
from flask import abort
from datetime import datetime, timedelta
import calendar
from constants import JWT_ALGORITHM, JWT_SECRET

class AuthService:
    def __init__(self, user_service):
        self.user_service = user_service

    def generate_token(self, email, password, is_refresh=False):
        user = self.user_service.get_by_email(email)
        if user is None:
            raise abort(404)

        if not is_refresh:
            if not self.user_service.compare_password(user.password, password):
                abort(400)

        data = {
            "email": user.email
        }

        min30 = datetime.utcnow() + timedelta(minutes=30)
        data["exp"] = calendar.timegm(min30.timetuple())
        access_token = jwt.encode(data, JWT_SECRET, algorithm=JWT_ALGORITHM)

        day130 = datetime.utcnow() + timedelta(days=130)
        data["exp"] = calendar.timegm(day130.timetuple())
        refresh_token = jwt.encode(data, JWT_SECRET, algorithm=JWT_ALGORITHM)

        return {
            "access_token": access_token,
            "refresh_token": refresh_token
        }

    def approve_refresh_token(self, refresh_token):
        data = jwt.decode(jwt=refresh_token, key=JWT_SECRET, algorithms=[JWT_ALGORITHM])
        email = data.get("email")

        return self.generate_token(email, None, is_refresh=True)