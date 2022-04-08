from users.serializers import UserSerializer


class UserDAO:
    def get_user_information(self,user):
        pass


class UserDAOImp(UserDAO):
    def get_user_information(self, user,*args):
        print(user)
        serializer = UserSerializer(user)
        return serializer.data