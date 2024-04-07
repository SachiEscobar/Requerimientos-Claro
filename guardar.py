import csv
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        parsed_data = parse_qs(post_data)
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Datos recibidos y guardados exitosamente\n')

        datos = [parsed_data.get('campo1', [''])[0], parsed_data.get('campo2', [''])[0], parsed_data.get('campo3', [''])[0]] # Ajusta esto según tus campos de formulario
        escribir_csv(datos)

def escribir_csv(datos):
    with open('datos.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(datos)

def main():
    host = 'localhost'
    port = 8080
    server_address = (host, port)
    httpd = HTTPServer(server_address, RequestHandler)
    print(f'Servidor corriendo en http://{host}:{port}')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()
        print('Servidor detenido')

if __name__ == '__main__':
    main()
