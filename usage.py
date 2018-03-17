import dash
import dash_html_components as html
import random
import linkurious_component

app = dash.Dash('')

app.scripts.config.serve_locally = True
# app.config['suppress_callback_exceptions']=True
app.layout = html.Div([
    linkurious_component.LinkuriousGraphComponent(
        id='graph-container',
        nodes=[{'attributes': {'text': '+919999999999', 'x': random.random() * 1000, 'y': random.random(),
                               'radius': 5 + 10 * random.random()}, 'data': {'properties': {'name': 'Jhon'}},
                'id': '1'},
               {'data': {'properties': {'name': 'Nash'}},
                'attributes': {'text': '+915555555555', 'x': random.random() * 1000, 'y': random.random(),
                               'radius': 5 + 10 * random.random()}, 'id': '2'}]
    )
])


@app.callback(dash.dependencies.Output('graph-container', 'id'))
def display_output(value):
    return ''


if __name__ == '__main__':
    app.run_server(debug=True)
