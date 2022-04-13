from users.serializers import UserSerializer


class UserDAO:
    def get_user_information(self,user):
        pass


class UserDAOImp(UserDAO):
    def get_user_information(self, user):
        serializer = UserSerializer(user)
        return serializer.data