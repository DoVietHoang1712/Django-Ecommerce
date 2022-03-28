WORK FLOW
1. checkout sang main
2. git pull origin main
3. check về nhánh feature sẽ làm (fe/login)
4. git merge main
5. làm xong thì push lên + tạo merge request + tự merge
6. quay lại bước 1


làm lần đầu
1. cài django
2. cài pipenv
    pip install pipenv
3. pipenv shell
4. pipenv lock

với các lần vào sau
1. pipenv shell
2. python manage.py runserver

muốn thêm css js thì vào folder static để thêm, trước khi gọi link href đến thì thêm 1 dòng {% load static %}