from rest_framework.response import Response
def custom_exceptions_handler(exc, context):
    res = Response()
    res.status_code = getattr(exc,'status_code',400)
    if isinstance(exc.detail, dict):
        first_key = next(iter(exc.detail))
        if isinstance(exc.detail[first_key], list):
            detail = first_key + " " + exc.detail[first_key][0]
            code = exc.detail[first_key][0].code
        else:
            detail = exc.detail[first_key]
            code = exc.detail[first_key].code
        res.data = {
            "detail": detail,
            "code": code
        }
    elif isinstance(exc.detail, list):
        res.data = {
            "detail": exc.detail[0],
            "code": exc.detail[0].code
        }
    else:
        res.data = {
            "detail": exc.detail,
            "code": exc.detail.code
        }
    return res
