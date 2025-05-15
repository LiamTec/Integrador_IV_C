"""
WSGI config for candidato project.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'candidato.settings')

application = get_wsgi_application()
