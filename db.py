from flask_mysqldb import MySQL

class Db:
    self.app1 = Flask(__name__)
    self.app1.config['MYSQL_HOST'] = 'database-2.cfk3hpc50gdi.us-east-1.rds.amazonaws.com'
    self.app1.config['MYSQL_USER'] = 'admin'
    self.app1.config['MYSQL_PASSWORD'] = '00000000'
    self.app1.config['MYSQL_DB'] = 'trial'
    self.mysql=''
    def __init__(self):
        try:
            self.mysql = MySQL(self.app1)
        except :
            print('Error al conectar BB..')

    def close_db(self):
        if self.conexion is not None:
            self.conexion.close()