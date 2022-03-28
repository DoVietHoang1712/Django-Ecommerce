from rest_framework.renderers import JSONRenderer
from datetime import datetime
class CustomJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):

        response_data = {'time': datetime.now(), 'data': data, 'version': '1.0.0'}

        # getattr(renderer_context.get('view').get_serializer().Meta,'resource_name', 'objects')

        # call super to render the response
        response = super(CustomJSONRenderer, self).render(response_data, accepted_media_type, renderer_context)

        return response
