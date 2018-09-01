from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer

class HttpProcessor(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('content-type','text/html')
        self.end_headers()
        self.wfile.write("hello ABC!")


serv = HTTPServer(("http://demsp-github-io-dserp18822717.codeanyapp.com",80),HttpProcessor)
serv.serve_forever()