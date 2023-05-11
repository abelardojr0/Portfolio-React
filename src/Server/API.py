from flask import Flask, jsonify, request
import psycopg2
from psycopg2 import Error
from flask_cors import CORS
import os
from urllib.parse import urlparse

# database_url = os.getenv('postgresql://postgres:rlwFg1MLBAmn8ffcGNMi@containers-us-west-172.railway.app:5529/railway')
# url = urlparse(database_url)

app = Flask(__name__)
CORS(app)

try:
  con = psycopg2.connect(
    database="railway",
    user="postgres",
    password="rlwFg1MLBAmn8ffcGNMi",
    host="containers-us-west-172.railway.app",
    port="5529"
  )
  
  @app.route('/projetos', methods=['GET'])
  def obter_dados():
      cur = con.cursor()
      cur.execute("SELECT * FROM projetos")
      results = cur.fetchall()
      return jsonify(results)
    
  if __name__ == '__main__':
        app.run()
    
except(Error) as error:
  print("Ocorreu um erro", error)
  

