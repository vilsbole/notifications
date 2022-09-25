import pytest
import app as MyApp
from mock_data import mock_data

# Primitive Fixtures
@pytest.fixture()
def app():
    MyApp.app.config.update({
        "TESTING": True,
    })
    yield MyApp.app

@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.fixture()
def runner(app):
    return app.test_cli_runner()



# App Test
def test_search_returns_all_by_default(client):
    response = client.get("/search")
    assert mock_data == response.get_json()
