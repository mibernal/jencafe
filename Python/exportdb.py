import pymongo
import pandas as pd
import json
from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(JSONEncoder, self).default(obj)

def export_db_structure_and_data(uri, db_name, export_path):
    # Conectar a la base de datos MongoDB
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    
    # Diccionario para almacenar la estructura y datos
    db_export = {}
    
    # Iterar sobre todas las colecciones en la base de datos
    for collection_name in db.list_collection_names():
        collection = db[collection_name]
        
        # Obtener los datos de la colección
        data = list(collection.find())
        
        # Crear un DataFrame de pandas para estructurar los datos
        df = pd.DataFrame(data)
        
        # Convertir el DataFrame a un diccionario de listas
        collection_data = df.to_dict(orient='records')
        
        # Almacenar los datos en el diccionario de exportación
        db_export[collection_name] = collection_data
    
    # Exportar el diccionario a un archivo JSON usando JSONEncoder para ObjectId
    with open(export_path, 'w') as f:
        json.dump(db_export, f, indent=4, cls=JSONEncoder)
    
    print(f"Exportación completada. Datos guardados en {export_path}")

# Parámetros de conexión y exportación
mongo_uri = "mongodb://localhost:27017"
database_name = "jencafe"
output_file = "jencafe_export.json"

# Ejecutar la función
export_db_structure_and_data(mongo_uri, database_name, output_file)
