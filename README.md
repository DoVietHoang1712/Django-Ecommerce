WORK FLOW
1. checkout sang main
2. git pull origin main
3. check về nhánh feature sẽ làm (fe/login)
4. git merge main


làm lần đầu
1. cài django
2. cài pipenv
    pip install pipenv
3. pipenv shell
4. pipenv lock
6. python manage.py makemigrations
7. python manage.py migrate

với các lần vào sau
1. pipenv shell
2. python manage.py runserver

muốn thêm css js thì vào folder static để thêm, trước khi gọi link href đến thì thêm 1 dòng {% load static %}